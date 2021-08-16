import { v4 as uuidv4 } from "uuid";
import { default as testData } from "../constants/testLinks.json";

export const getLinks = (isTest = false) => {
  if (isTest) {
    return testData.links;
  } else {
    let links = localStorage.getItem("links");

    if (!links || links.length === 0) return [];
    else return JSON.parse(links);
  }
};

export const addLink = (newLink, isTest = false) => {
  let links = getLinks(isTest);

  const linkInQueue = {
    id: newLink.id ? newLink.id : uuidv4(),
    name: newLink.name,
    url: newLink.url,
    points: 0,
    createdAt: new Date(),
  };

  links = [...links, linkInQueue];

  if (!isTest) localStorage.setItem("links", JSON.stringify(links));

  return newLink;
};

export const deleteLink = (linkId, isTest = false) => {
  let links = getLinks(isTest);

  if (links && links.length === 0) return false;

  const newLinks = links.filter((l) => l.id !== linkId);

  if (!isTest) localStorage.setItem("links", JSON.stringify(newLinks));

  return true;
};

export const vote = (linkId, type, isTest = false) => {
  let links = getLinks(isTest);
  links = links.map((l) =>
    l.id === linkId
      ? {
          ...l,
          points:
            type === "upvote"
              ? l.points + 1
              : type === "downvote"
              ? l.points - 1
              : l.points,
        }
      : l
  );

  if (!isTest) localStorage.setItem("links", JSON.stringify(links));

  return links;
};

const paginator = (items, pageCount, limit) => {
  var page = pageCount || 1,
    perPage = limit || 10,
    offset = (page - 1) * perPage,
    paginatedItems = items.slice(offset).slice(0, perPage),
    totalPages = Math.ceil(items.length / perPage);

  return {
    page: page,
    perPage: perPage,
    prePage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: items.length,
    totalPages: totalPages,
    data: paginatedItems,
  };
};

export const getFilteredLinks = (
  orderBy = "date",
  offset = 1,
  limit = 5,
  isTest = false
) => {
  let links = getLinks(isTest);

  if (links && links.length === 0) return links;

  if (orderBy === "date") {
    const sortedLinks = links.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    const paginatedLinks = paginator(sortedLinks, offset, limit);
    return paginatedLinks;
  } else if (orderBy === "mostvote") {
    const sortedLinks = links.sort((a, b) => {
      return b.points - a.points;
    });

    const paginatedLinks = paginator(sortedLinks, offset, limit);
    return paginatedLinks;
  } else if (orderBy === "lessvote") {
    const sortedLinks = links.sort((a, b) => {
      return a.points - b.points;
    });

    const paginatedLinks = paginator(sortedLinks, offset, limit);
    return paginatedLinks;
  }
};

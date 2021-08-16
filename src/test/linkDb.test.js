import {
  getLinks,
  addLink,
  deleteLink,
  vote,
  getFilteredLinks,
} from "../helpers/linkDb";

const testLinkId = "7b578626-67e0-4ee6-bfad-a20974acaee5";

describe("Link JSON DB Test", () => {
  it("should fetch data that are available", () => {
    const links = getLinks(true);
    expect(links.length).toBe(5);
  });

  it("should add link to json db", () => {
    const newLink = {
      id: 6,
      name: "Test Link",
      url: "http://test.test",
      points: 0,
      createdAt: "2021-07-16T19:00:34.628Z",
    };
    const addedLink = addLink(newLink, true);
    expect(addedLink.id).toBe(newLink.id);
  });

  it("should delete link from json db", () => {
    const isDeleted = deleteLink(testLinkId, true);
    expect(isDeleted).toBe(true);
  });

  it("should vote link", () => {
    const links = vote(testLinkId, "upvote", true);
    const link = links.find((l) => l.id === testLinkId);
    expect(link.points).toBe(3);
  });

  it("should filter by most voted links order criteria", () => {
    const links = getFilteredLinks("mostvote", 1, 5, true);
    expect(links.data[0].name).toBe("LinkedIn");
  });

  it("should filter by most voted links order criteria", () => {
    const links = getFilteredLinks("lessvote", 1, 5, true);
    expect(links.data[0].name).toBe("Twitter");
  });

  it("should filter by most recent links order criteria", () => {
    const links = getFilteredLinks("date", 1, 5, true);
    expect(links.data[0].name).toBe("Alphabet");
  });
});

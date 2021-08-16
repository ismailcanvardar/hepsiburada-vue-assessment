<template>
  <Dropdown class="z-10 px-4 pb-2" v-bind="$attrs"/>
  <div :key="link.id" v-for="link in links.data">
    <Link :data="link" v-bind="$attrs"/>
  </div>
  <Pagination :pageCount="links.totalPages" :currentPage="links.page" v-bind="$attrs"/>
</template>

<script>
import Dropdown from "./Dropdown.vue";
import Link from "./Link.vue";
import Pagination from "./Pagination.vue";
export default {
  name: "Links",
  components: {
    Dropdown,
    Link,
    Pagination,
  },
  props: {
    links: Array,
  },
};
</script>   
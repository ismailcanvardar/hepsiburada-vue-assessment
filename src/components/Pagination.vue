<template>
  <div class="flex gap-4 justify-center items-center pt-8">
    <i
      @click="goAnotherPage('back')"
      class="fas fa-chevron-left font-bold text-xl mr-4"
    ></i>
    <div v-for="i in pageCount" :key="i">
      <span
        @click="goAnotherPage('direct', i)"
        class="font-bold text-xl"
        :class="currentPage === i ? 'border px-2 border-gray-500' : ''"
        >{{ i }}</span
      >
    </div>
    <i
      @click="goAnotherPage('next')"
      class="fas fa-chevron-right font-bold text-xl ml-4"
    ></i>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageCount: Number,
    currentPage: Number,
  },
  methods: {
    goAnotherPage(type, dest = null) {
      if (type === "back" && this.currentPage !== 1) {
        this.$emit("go-another-page", "back");
      } else if (type === "next" && this.currentPage < this.pageCount) {
        this.$emit("go-another-page", "next");
      } else if (type == "direct") {
        this.$emit("go-another-page", "direct", dest);
      }
    },
  },
};
</script>
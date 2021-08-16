<template>
  <div
    class="p-3 flex justify-center relative"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    :class="isMouseOver ? 'border' : ''"
  >
    <div
      v-show="isMouseOver"
      class="absolute -right-2 -top-2"
    >
      <i @click="deleteLink(data)" class="fas fa-minus-circle text-4xl text-red-500"></i>
    </div>
    <div class="flex items-center gap-8">
      <div
        class="
          rounded
          border border-gray-200
          bg-gray-100
          h-24
          w-24
          flex flex-col
          items-center
          justify-center
        "
      >
        <p class="text-4xl font-bold">{{ data.points }}</p>
        <p>POINTS</p>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <p class="font-bold text-2xl">{{ data.name }}</p>
          <a :href="data.url" target="_blank">{{ data.url }}</a>
        </div>
        <div class="flex justify-between gap-4">
          <div class="flex gap-1 items-center">
            <i
              @click="vote('upvote', data.id)"
              class="fas fa-arrow-up text-gray-300"
            ></i>
            <p class="font-bold text-gray-500">Up Vote</p>
          </div>
          <div class="flex gap-1 items-center">
            <i
              @click="vote('downvote', data.id)"
              class="fas fa-arrow-down text-gray-300"
            ></i>
            <p class="font-bold text-gray-500">Down Vote</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Link",
  data() {
    return {
      isMouseOver: false,
    };
  },
  props: {
    data: Object,
  },
  created() {
    // console.log(this.data);
  },
  methods: {
    mouseOver() {
      this.isMouseOver = true;
    },
    mouseLeave() {
      this.isMouseOver = false;
    },
    vote(type, linkId) {
      if (type === "upvote") {
        this.$emit("vote-link", type, linkId);
      } else if (type === "downvote") {
        this.$emit("vote-link", type, linkId);
      }
    },
    deleteLink(data) {
      this.$emit("delete-link", data);
    },
  },
};
</script>
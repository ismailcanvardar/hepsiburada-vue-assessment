<template>
  <div
    class="
      absolute
      top-1/12
      left-1/2
      transform
      -translate-x-1/2 -translate-y-1/2
      py-2
      px-8
      bg-green-200
      rounded
      border border-green-500
      animate-pulse
    "
    v-show="isVisible"
  >
    <p class="text-3xl text-green-500"><b>{{name}}</b> {{operation}}</p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    isVisible: Boolean,
    name: String,
    operation: String
  },
};
</script>
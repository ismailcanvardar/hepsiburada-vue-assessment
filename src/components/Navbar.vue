<template>
  <div class="lg:px-48 md:px-12 px-4">
    <div class="pt-4 flex justify-between items-end">
      <img class="w-auto h-12" :src="require('../assets/hepsiburada-logo.png')">
      <p class="text-2xl"><b class="extrabold">Link</b>VOTE Challenge</p>
    </div>
    <Divider />
  </div>
</template>

<script>
import Divider from "../components/Divider.vue";
export default {
  name: "Navbar",
  components: {
    Divider,
  },
};
</script>
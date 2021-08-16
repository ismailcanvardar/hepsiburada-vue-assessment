<template>
  <div class="bg-gray-50 p-3 border rounded flex justify-center">
    <div class="flex items-center gap-8">
      <div class="rounded border border-gray-200 bg-gray-100 w-24 h-24 flex justify-center items-center">
        <i class="fas fa-plus text-4xl"></i>
      </div>
      <router-link class="font-bold text-3xl pr-4" to="/add-link"
        >SUBMIT A LINK</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Submit Link Button",
};
</script>
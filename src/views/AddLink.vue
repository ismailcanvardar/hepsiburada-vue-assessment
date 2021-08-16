<template>
  <Toast :isVisible="isToastVisible" :name="toastName" :operation="'saved.'" />
  <div class="flex justify-center">
    <div class="grid-cols-3 justify-center">
      <div class="py-4">
        <router-link to="/" class="font-bold"
          ><i class="fas fa-arrow-left"></i> Return to List</router-link
        >
      </div>
      <Header class="py-4" text="Add New Link" />
      <form @submit="onSubmit" class="py-4">
        <div class="mb-4">
          <label class="block text-black text-sm font-bold mb-2" for="name">
            Link Name:
          </label>
          <input
            class="border rounded md:w-96 w-full py-3 px-3 text-gray-700"
            id="name"
            v-model="name"
            type="text"
            placeholder="e.g Alphabet"
          />
        </div>
        <div class="mb-4">
          <label class="block text-black text-sm font-bold mb-2" for="url">
            Link URL:
          </label>
          <input
            class="border rounded md:w-96 w-full py-3 px-3 text-gray-700"
            id="url"
            v-model="url"
            type="text"
            placeholder="e.g. http://abc.xyz"
          />
        </div>
        <div class="flex justify-end py-4">
          <input
            type="submit"
            class="
              bg-black
              text-white
              font-bold
              text-xl
              py-3
              px-10
              rounded-full
            "
            value="ADD"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Toast from "../components/Toast.vue";
import { addLink } from "../helpers/linkDb";
export default {
  name: "Add Link",
  components: {
    Header,
    Toast,
  },
  data() {
    return {
      name: "",
      url: "",
      isToastVisible: false,
      toastName: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.name && !this.url) {
        alert("Please fill all the inputs");
        return;
      }

      const newLink = {
        name: this.name,
        url: this.url,
      };

      // console.log(newLink);
      addLink(newLink);

      this.toastName = newLink.name;
      this.isToastVisible = true;

      this.name = "";
      this.url = "";

      setTimeout(() => {
        console.log("Hi")
        this.isToastVisible = false;
      }, 1500);
    },
  },
};
</script>
<template>
  <div>
    <div
      v-if="showModal"
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
      "
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <!--header-->
          <div
            class="
              flex
              items-start
              justify-between
              p-5
              border-b border-solid border-blueGray-200
              rounded-t
              bg-black
            "
          >
            <h3 class="text-2xl font-semibold text-white">Remove Link</h3>
            <button
              class="
                p-1
                ml-auto
                bg-transparent
                border-0
                text-black
                opacity-5
                float-right
                text-3xl
                leading-none
                font-semibold
                outline-none
                focus:outline-none
              "
              v-on:click="toggleModal()"
            >
              <span
                class="
                  bg-transparent
                  text-black
                  opacity-5
                  h-6
                  w-6
                  text-2xl
                  block
                  outline-none
                  focus:outline-none
                "
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-4 flex-auto">
            <p class="font-bold text-xl text-gray-500 text-center">
              Do you want to remove:
            </p>
            <p class="font-bold text-3xl text-center">{{ link.name }}</p>
          </div>
          <!--footer-->
          <div
            class="
              flex
              gap-4
              items-center
              justify-center
              py-2
              px-6
              border-t border-solid border-blueGray-200
              rounded-b
            "
          >
            <div class="flex justify-end py-4">
              <button
                class="
                  bg-black
                  text-white
                  font-bold
                  text-xl
                  py-3
                  px-10
                  rounded-full
                "
                v-on:click="onClick"
              >
                OK
              </button>
            </div>
            <div class="flex justify-end py-4">
              <button
                class="
                  bg-black
                  text-white
                  font-bold
                  text-xl
                  py-3
                  px-10
                  rounded-full
                "
                v-on:click="toggleModal"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  name: "Remove Modal",
  props: {
    showModal: Boolean,
    onClick: Function,
    link: Object,
  },
  methods: {
    toggleModal() {
      this.$emit("toggle-modal");
    },
  },
};
</script>
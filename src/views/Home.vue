<template>
  <Toast
    :isVisible="isToastVisible"
    :name="toastName"
    :operation="'removed.'"
  />
  <div class="flex justify-center">
    <div class="grid-cols-4 pt-2">
      <SubmitLinkButton />
      <Divider />
      <Links
        :links="links"
        @delete-link="getConfirmationForDeletion"
        @order-by="fetchOrderedLinks"
        @vote-link="voteLink"
        @go-another-page="goAnotherPage"
      />
      <Modal
        :link="linkToDelete"
        :onClick="deleteSelectedLink"
        @toggle-modal="toggleModal"
        :showModal="showModal"
      />
    </div>
  </div>
</template>

<script>
import SubmitLinkButton from "../components/SubmitLinkButton.vue";
import Divider from "../components/Divider.vue";
import Links from "../components/Links.vue";
import Modal from "../components/Modal.vue";
import Toast from "../components/Toast.vue";
import { getFilteredLinks, vote, deleteLink } from "../helpers/linkDb";
export default {
  name: "Home",
  components: {
    SubmitLinkButton,
    Divider,
    Links,
    Modal,
    Toast,
  },
  data() {
    return {
      links: [],
      offset: 1,
      orderBy: "date",
      showModal: false,
      linkToDelete: null,
      toastName: null,
      isToastVisible: false,
    };
  },
  created() {
    console.log(getFilteredLinks(this.orderBy, this.offset));
    this.links = getFilteredLinks(this.orderBy, this.offset);
  },
  methods: {
    goAnotherPage(type, dest) {
      if (type === "next") {
        this.offset = this.offset + 1;
      } else if (type === "back") {
        this.offset = this.offset - 1;
      } else if (type === "direct") {
        this.offset = dest;
      }

      this.links = getFilteredLinks(this.orderBy, this.offset);
    },
    voteLink(type, linkId) {
      vote(linkId, type);
      this.links = getFilteredLinks(this.orderBy, this.offset);
    },
    fetchOrderedLinks(type) {
      this.orderBy = type;
      this.offset = 1;
      this.links = getFilteredLinks(this.orderBy, this.offset);
    },
    getConfirmationForDeletion(data) {
      this.linkToDelete = data;
      this.toggleModal();
    },
    deleteSelectedLink() {
      deleteLink(this.linkToDelete.id);
      this.links = getFilteredLinks(this.orderBy, this.offset);
      this.toastName = this.linkToDelete.name;
      this.toggleModal();
      this.linkToDelete = null;
      this.isToastVisible = true;
      setTimeout(() => {
        this.isToastVisible = false;
        this.toastName = null;
      }, 1500);
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
<template>
  <div class="card mt-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0"></h6>
        </div>
        <div class="col-6 text-end">
          <vmd-button color="dark" variant="gradient">
            <i class="fas fa-plus me-2"></i>
            Создать новый
          </vmd-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import VmdButton from "@/components/VmdButton.vue";
import img1 from "@/assets/img/logos/mastercard.png";
import img2 from "@/assets/img/logos/visa.png";

export default {
  name: "payment-card",
  components: {
    VmdButton,
  },
  data() {
    return {
      img1,
      img2,
    };
  },
};
</script>

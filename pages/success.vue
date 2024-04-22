<template>
  <div class="row p-5 my-5 ir-success-page">
    <div class="col-md-12 d-flex flex-column justify-content-center">
      <font-awesome-icon icon="check-circle" size="4x" class="text-success" />
      <div class="mt-3 d-flex justify-content-center flex-column text-center">
        <h1 class="fw-bold">{{ $t("Congratulations") }},</h1>
        <h2>{{ $t("Your order was placed successfully!") }}</h2>
        <p>
          {{
            $t(
              "We will email you a confirmation email with details of your order."
            )
          }}
        </p>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <NuxtLink
        class="btn btn-primary fw-bold mt-3"
        style="max-width: fit-content"
        to="/order"
      >
        {{ $t("Order More") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: "Success",
  head() {
    return {
      title: "Success",
      meta: [
        {
          name: "description",
          content: "Thank you for your order.",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
});
</script>

<style lang="scss">
.ir-success-page {
  padding-top: 120px !important;

  @media screen and (max-width: 768px) {
    padding-top: 100px !important;
    h1{
      font-size: 20px !important;
    }
    h2{
      font-size: 18px !important;
    }
  }
}
</style>

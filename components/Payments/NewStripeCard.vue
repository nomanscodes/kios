<template>
  <div class="payment-form-wrapper">
    <div id="payment-form"></div>

    <span class="loading" v-show="loading"><span class="spinner"></span> </span>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "~~/store/Settings";
const emit = defineEmits(["change", "error", "success"]);

const stripe_public_key = computed(
  () => useSettingStore()?.settings?.payments?.stripe?.public_key
);

// define props
const props = defineProps({
  client_secret: {
    type: String,
    required: true,
  },
});

const loading = ref(true);

const stripe = Stripe(stripe_public_key.value);
const clientSecret = computed(() => props.client_secret);

const appearance = {
  theme: "night",
  labels: "floating",
  variables: {
    colorBackground: "#4b4545",
  },
};
const options = {
  layout: "tabs",
};

onMounted(() => {
  const elements = stripe.elements({
    clientSecret: clientSecret.value,
    appearance,
  });

  // handle submit
  const handleSubmit = () => {
    loading.value = true;
    const { error } = stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
    });

    if (error) {
      emit("error", error.message);
      loading.value = false;
      return false;
    }

    loading.value = false;

    return true;
  };

  // check status
  const checkStatus = async (client_secret = false) => {
    const secret = client_secret ? client_secret : clientSecret.value;

    if (!secret) {
      return "failed";
    }

    const { paymentIntent } = await stripe.retrievePaymentIntent(secret);

    switch (paymentIntent.status) {
      case "succeeded":
        return "succeeded";
        break;
      case "processing":
        return "processing";
        break;
      case "requires_payment_method":
        return "requires_payment_method";
        break;
      default:
        return "failed";
        break;
    }
  };

  const paymentElement = elements.create("payment", options);
  paymentElement.mount("#payment-form");

  paymentElement.on("ready", () => {
    loading.value = false;
  });

  paymentElement.on("change", (event) => {
    emit("change", event);

    if (event.complete) {
      emit("success", {
        handleSubmit,
        checkStatus,
      });
    } else {
      loading.value = false;
    }
  });
});
</script>

<style lang="scss">
.payment-form-wrapper {
  position: relative;
  width: 100%;
  min-height: 100px;

  .loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;

    .spinner {
      border: 4px solid rgba(255, 255, 255, 0.1);
      border-left: 4px solid #ffffff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

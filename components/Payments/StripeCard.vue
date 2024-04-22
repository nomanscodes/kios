<template>
  <form id="payment-form">
    <div id="card-element">
      <!--data-will-be-injected-here-->
    </div>
    <span class="loading" v-show="loading"><span class="spinner"></span></span>
  </form>
</template>

<script lang="ts">
import { loadStripe } from "@stripe/stripe-js";
import { useSettingStore } from "~~/store/Settings";

export default defineNuxtComponent({
  name: "StripeCard",
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    public_key() {
      return this.settings.settings.payments.stripe.public_key;
    },
  },
  async mounted() {
    var stripe = await loadStripe(this.public_key);

    var elements = stripe.elements();

    var style = {
      base: {
        color: "#fff",
        fontFamily: '"Poppins", sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "14px",
        "::placeholder": {
          color: "#fff5",
        },
      },
      invalid: {
        color: "#dc3545",
        iconColor: "#dc3545",
      },
    };

    var card = elements.create("card", { style: style });
    card.mount("#card-element");

    card.on("ready", () => {
      this.loading = false;
    });

    card.on("change", (event) => {
      this.$emit("change", event);
      // if valid get token
      if (event.complete) {
        stripe
          .createToken(card)
          .then((result) => {
            if (result.error) {
              this.$emit("error", result.error.message);
            } else {
              this.$emit("success", result.token);
            }
          })
          .catch((error) => {
            this.$emit("error", error);
          });
      }
    });
  },
  setup() {
    const settings = useSettingStore();
    return {
      settings,
    };
  },
});
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid var(--bs-primary);
  border-radius: 50%;
  animation: spin 2s linear infinite;
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

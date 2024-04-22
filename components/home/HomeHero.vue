<template>
  <section class="fl-hero">
    <video width="100%" autoplay loop>
      <source src="/assets/hero-video.mp4" type="video/mp4" />
    </video>
    <div class="fl-hero__content fl-container">
      <span>Food Land</span>
      <h1>
        Bienvenue chez <br />
        Food Land !
      </h1>
      <p>Des plats délicieux préparés avec des ingrédients frais</p>
      <div class="fl-hero__btn-wrapper">
        <button class="active" @click="$router.push('/order')">
          Commander
        </button>
        <button @click="$router.push('/contact')">Contact</button>
      </div>
      <div class="fl-hero__location-select" v-if="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <g clip-path="url(#clip0_87_1341)">
            <path
              d="M14 2.33325C9.10002 2.33325 4.66669 6.08992 4.66669 11.8999C4.66669 15.6099 7.52502 19.9733 13.23 25.0016C13.6734 25.3866 14.3384 25.3866 14.7817 25.0016C20.475 19.9733 23.3334 15.6099 23.3334 11.8999C23.3334 6.08992 18.9 2.33325 14 2.33325ZM14 13.9999C12.7167 13.9999 11.6667 12.9499 11.6667 11.6666C11.6667 10.3833 12.7167 9.33325 14 9.33325C15.2834 9.33325 16.3334 10.3833 16.3334 11.6666C16.3334 12.9499 15.2834 13.9999 14 13.9999Z"
              fill="#F46801"
            />
          </g>
          <defs>
            <clipPath id="clip0_87_1341">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input type="text" placeholder="Select your location" />
        <button>Go</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// import { useCartStore } from "~/store/Cart.ts";
// const cart = useCartStore();

// console.log(cart);
</script>

<style lang="scss">
.fl-hero {
  height: 840px;
  background-position: center;
  background-size: cover;
  position: relative;
  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
  }
  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    z-index: 1;
    span {
      padding: 10px 20px;
      border-radius: 9999px;
      border: 1px solid var(--p-white-color);
      width: fit-content;
      color: var(--p-white-color);
      font-family: "Satisfy", cursive;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 20px */
      text-transform: capitalize;
      margin-bottom: 20px;
    }
    h1 {
      color: var(--p-white-color);
      font-size: var(--p-heading-font);
      font-style: italic;
      font-weight: 800;
      line-height: 120%; /* 75px */
      text-transform: capitalize;
      margin-bottom: 20px !important;
    }
    p {
      color: var(--p-white-color);
      font-size: var(--p-small-font);
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      max-width: 550px;
      margin-bottom: 40px !important;
    }
  }
  &__btn-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 500px;
    width: 100%;
    margin-bottom: 30px;
    button {
      box-sizing: border-box;
      width: 100%;
      border-radius: 9999px;
      border: 2px solid var(--p-white-color);
      height: 50px;
      color: var(--p-white-color);
      font-size: 16px;
      font-weight: 500;
      line-height: 100%; /* 18px */
      text-transform: capitalize;
      background: none;
    }
    .active {
      background: var(--p-white-color) !important;
      color: var(--fl-light-text);
    }
  }
  &__location-select {
    display: flex;
    align-items: center;
    max-width: 500px;
    width: 100%;
    height: 50px;
    border-radius: 9999px;
    background: var(--p-white-color);
    overflow: hidden;
    padding-left: 20px;
    input {
      box-sizing: border-box;
      border: none;
      width: 100%;
      color: var(--fl-text-light);
      font-size: var(--p-small-font);
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
      padding-left: 20px;
    }
    button {
      border: none;
      width: 106px;
      height: 100%;
      flex-shrink: 0;
      border-radius: 9999px;
      background: var(--fl-primary);
      color: var(--fl-text-light);
      font-size: var(--p-small-font);
      font-style: normal;
      font-weight: 600;
      line-height: 100%; /* 16px */
    }
  }

  @media screen and (max-width: 768px) {
    height: 700px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 60px;
    &__content {
      span {
        padding: 10px 15px;
        font-size: 14px;
        margin-bottom: 15px;
      }
      h1 {
        font-weight: 800;
        margin-bottom: 15px !important;
      }
      p {
        margin-bottom: 30px !important;
      }
    }
    &__btn-wrapper {
      gap: 10px;
      margin-bottom: 20px;
      button {
        height: 45px;
        border: 1px solid var(--p-white-color);
      }
      .active {
        background: var(--p-white-color) !important;
        color: var(--fl-light-text);
      }
    }
    &__location-select {
      height: 45px;
      padding-left: 15px;
      input {
        padding-left: 10px;
      }
      button {
        width: 90px;
      }
    }
  }
}
</style>

<template>
  <section
    class="fl-delivery-area"
    style="background-image: url('/img/location-bg.png')"
  >
    <div class="fl-delivery-area__content fl-container">
      <!-- heading  -->
      <div class="fl-delivery-area__heading">
        <h1>Livraison</h1>
        <p>
          Food Land propose la livraison à domicile pour les commandes de 15€ ou
          plus
        </p>
      </div>
      <!-- locations  -->
      <div class="fl-delivery-area__locations" :key="locations.length">
        <div
          v-for="(location, i) in locations"
          :key="i"
          @click="$router.push('/order')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clip-path="url(#clip0_159_220)">
              <path
                d="M12.5 2.08331C8.12499 2.08331 4.16666 5.43748 4.16666 10.625C4.16666 13.9375 6.71874 17.8333 11.8125 22.3229C12.2083 22.6667 12.8021 22.6667 13.1979 22.3229C18.2812 17.8333 20.8333 13.9375 20.8333 10.625C20.8333 5.43748 16.875 2.08331 12.5 2.08331ZM12.5 12.5C11.3542 12.5 10.4167 11.5625 10.4167 10.4166C10.4167 9.27081 11.3542 8.33331 12.5 8.33331C13.6458 8.33331 14.5833 9.27081 14.5833 10.4166C14.5833 11.5625 13.6458 12.5 12.5 12.5Z"
                fill="#F46801"
              />
            </g>
            <defs>
              <clipPath id="clip0_159_220">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>{{ location.city }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSettingStore } from "~/store/Settings.ts";

const settings = useSettingStore();
let locations = ref([]);
setTimeout(() => {
  locations.value = settings?.settings?.delivery_zones;
}, 2000);
</script>

<style lang="scss">
.fl-delivery-area {
  padding: 100px 0px;
  background: var(--p-white-color);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &__heading {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    h1 {
      color: var(--p-black-color);
      font-weight: 800;
      font-style: italic;
      margin-bottom: 10px;
      font-size: var(--p-sub-heading-font);
    }
    p {
      color: var(--p-black-color);
      max-width: 700px;
      font-weight: 500;
    }
  }
  &__locations {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border: 1px solid var(--fl-primary);
      padding: 10px 0px;
      border-radius: 99px;
      cursor: pointer;

      span {
        font-size: var(--p-small-font);
        font-weight: 500;
        color: var(--p-black-color);
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 60px 0px;
    &__heading {
      margin-bottom: 30px;
      h1 {
        font-weight: 700;
      }
    }
    &__locations {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      div {
        gap: 4px;
        padding: 0px;
        height: 50px;
        margin-bottom: 10px;
        span {
          white-space: normal;
          overflow: hidden;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    padding: 60px 0px;
    &__heading {
      margin-bottom: 20px;
      h1 {
        color: var(--p-black-color);
        font-weight: 800;
        font-style: italic;
        margin-bottom: 10px;
        font-size: var(--p-sub-heading-font);
      }
      p {
        color: var(--p-black-color);
        max-width: 700px;
        font-weight: 500;
      }
    }
    &__locations {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  }
}
</style>

<template>
  <KioskHeader heading="Choose Category"/>
  <div class="kiosk-categories">
    <div class="kiosk-categories__content kiosk-container">
      <div class="kiosk-categories__wrapper">
        <!-- category card  -->
        <NuxtLink :to="`/categories/${2}`" v-for="item in categories" class="kiosk-category-card">
          <div class="kiosk-category-card__img">
            <img :src="item.img" />
          </div>
          <div class="name">
            <p>{{ item?.name }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <KioskBottom :backLink="'/'"/>
</template>

<script setup>
import {ref} from 'vue'


const categories = ref([
  {
    name: 'Smash My Taco',
    img: '/img/p1.png'
  },
  {
    name: 'Street Tacos',
    img: '/img/p2.png'
  },
  {
    name: 'Real Burgers',
    img: '/img/p3.png'
  },
  {
    name: 'Authentic Sushi',
    img: '/img/p1.png'
  },
  {
    name: 'Gourmet Pizzas',
    img: '/img/p2.png'
  },
  {
    name: 'Spicy Wings',
    img: '/img/p1.png'
  },
  {
    name: 'Sizzling Steaks',
    img: '/img/p2.png'
  },
  {
    name: 'Fresh Salads',
    img: '/img/p3.png'
  },
  {
    name: 'Delicious Desserts',
    img: '/img/p2.png'
  },
  {
    name: 'Craft Cocktails',
    img: '/img/p1.png'
  },
]);
</script>

<style lang="scss">
.kiosk-categories {
  min-height: 100vh;
  background-color: #f5f5f5;
  &__content {
    padding: 100px 0px;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
  }
  .kiosk-category-card {
    width: 100%;
    min-height: 323px;
    border-radius: 11px;
    background-color: #ffffff;
    overflow: hidden;
    &__img {
      height: 248px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 11px;
    }
    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 22px 0px 0px 0px;
      p {
        font-size: 26px;
        font-weight: 600;
        line-height: 26px;
        text-align: center;
        color: #333333;
      }
    }
  }
}
</style>

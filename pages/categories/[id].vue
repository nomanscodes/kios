<template>
  <KioskHeader heading="Choose Item" />
  <div class="kiosk-single-category">
    <div class="kiosk-single-category__content kiosk-container">
      <!-- product card  -->
      <NuxtLink to="/product" v-for="item in product" class="kiosk-product-card">
        <div class="kiosk-product-card__img">
          <img :src="item.img" />
        </div>
        <div class="info">
          <p>{{ item?.name }}</p>
          <span>$07.00</span>
        </div>
        <div class="discount">%25</div>
      </NuxtLink>
    </div>
  </div>
  <KioskBottom />
</template>

<script setup>
import { ref } from "vue";

const product = ref([
  {
    name: "Smash My Taco",
    img: "/img/p1.png",
  },
  {
    name: "Street Tacos",
    img: "/img/p2.png",
  },
  {
    name: "Real Burgers",
    img: "/img/p3.png",
  },
  {
    name: "Authentic Sushi",
    img: "/img/p1.png",
  },
  {
    name: "Gourmet Pizzas",
    img: "/img/p2.png",
  },
  {
    name: "Spicy Wings",
    img: "/img/p1.png",
  },
  {
    name: "Sizzling Steaks",
    img: "/img/p2.png",
  },
  {
    name: "Fresh Salads",
    img: "/img/p3.png",
  },
  {
    name: "Delicious Desserts",
    img: "/img/p2.png",
  },
  {
    name: "Craft Cocktails",
    img: "/img/p1.png",
  },
]);
</script>

<style lang="scss">
.kiosk-single-category {
  min-height: 100vh;
  background: #f5f5f5;
  &__content {
    padding: 100px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
  }

  .kiosk-product-card {
    width: 100%;
    min-height: 323px;
    border-radius: 11px;
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0px;
    position: relative;
    &__img {
      max-width: 320px;
      width: 100%;
      height: 200px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 11px;
    }
    .info {
      width: 100%;
      padding: 25px;
      p {
        font-size: 26px;
        font-weight: 600;
        line-height: 26px;
        color: #222222;
      }
      span {
        font-size: 26px;
        font-weight: 600;
        line-height: 26px;
        text-align: left;
        color: #717b56;
      }
    }
    .discount {
      position: absolute;
      width: 99px;
      height: 53px;
      border-radius: 8px;
      background: #717b56;
      top: 0;
      right: 0;
      font-size: 30px;
      font-weight: 600;
      line-height: 30px;
      display:Flex;
      align-items:center;
      justify-content:center;
      color:#fff
    }
  }
}
</style>

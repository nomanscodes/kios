<template>
  <KioskHeader heading="Choose Item" />
  <div class="kiosk-single-category">
    <div class="kiosk-single-category__content kiosk-container">
      <!-- loading data   -->
      <div
        v-if="loading"
        v-for="item in loadingItems"
        class="kiosk-skeleton-product-card"
      >
        <Skeleton width="100%" height="250px"></Skeleton>
        <div class="kiosk-skeleton-product-card__info">
          <Skeleton width="100%" height="2rem"></Skeleton>
          <Skeleton width="100%" height="2rem"></Skeleton>
        </div>
      </div>
      <!-- product card  -->
      <NuxtLink
        v-else
        v-for="item in products"
        :key="item?.id"
        :to="`/product/${item?.id}`"
        class="kiosk-product-card"
      >
        <div class="kiosk-product-card__img">
          <img :src="`${useAppConfig().apiRoot}${item.image}`" />
        </div>
        <div class="info">
          <p>{{ item?.name }}</p>
          <span>
            {{ useAppConfig().currencySymbol
            }}{{ item.price.price_delivery }}</span
          >
        </div>
        <div class="discount">%25</div>
      </NuxtLink>
    </div>
  </div>
  <KioskBottom :backLink="'/categories'" />
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useMenuStore } from "~~/store/Menu";

const route = useRoute();
const menus = useMenuStore();

const categoryID = route?.params?.id;

const products = ref([]);
const allProducts = ref([]);
const loading = ref();
const loadingItems = ref(10);
watchEffect(() => {
  loading.value = menus._isLoading;

  if (menus && menus.products) {
    allProducts.value = menus.products;

    console.log("allProducts:", allProducts.value);

    const filteredItems = allProducts.value.filter(
      (item) => item?.category_id == categoryID
    );

    console.log("filteredItems:", filteredItems);

    products.value = filteredItems;
  }
});
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
      display: Flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}

.kiosk-skeleton-product-card {
  width: 100%;
  &__info {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>

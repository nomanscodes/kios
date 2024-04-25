<template>
  <KioskHeader heading="Customize Item" />
  <div class="kiosk-single-product">
    <div class="kiosk-single-product__content kiosk-container">
      <div v-if="loading" class="kiosk-loading-skleton">
        <Skeleton width="100%" height="450px"></Skeleton>
        <div class="kiosk-loading-skleton__name-and-price">
          <Skeleton width="30%" height="3rem"></Skeleton>
          <Skeleton width="30%" height="3rem"></Skeleton>
        </div>
        <div class="mt-4">
          <Skeleton width="30%" height="2rem"></Skeleton>
        </div>

        <div class="mt-5">
          <Skeleton width="30%" height="2rem"></Skeleton>
        </div>

        <div class="kiosk-loading-skleton__options">
          <div class="" v-for="item in loadingOptions">
            <Skeleton width="100%" height="150px"></Skeleton>
            <div class="mt-4">
              <Skeleton width="100%" height="2rem"></Skeleton>
            </div>
          </div>
        </div>
      </div>
      <!-- product info  -->
      <div v-else>
        <!-- product datails  -->
        <div  class="kiosk-single-product__details">
          <div class="banner-image">
            <img :src="`${useAppConfig().apiRoot}${product?.image}`" />
          </div>
          <div class="info">
            <!-- name and price  -->
            <div class="name-and-price">
              <h3>{{ product?.name }}</h3>
              <h3>
                {{ useAppConfig().currencySymbol
                }}{{ product?.price?.price_delivery }}
              </h3>
            </div>
            <!-- description -->
            <p>{{ product?.description }}</p>
          </div>
        </div>
        <!-- product options  -->
        <div class="product-options">
          <h4>Classic Comfort</h4>
          <div class="product-options__wrapper">
            <!-- options card  -->
            <div
              :class="{ selected: isSelected }"
              class="product-options__card"
            >
              <!-- options image  -->
              <div class="product-options__img">
                <img src="/img/p1.png" />
              </div>
              <!-- option name  -->
              <p>Queso</p>
              <!-- select button  -->
              <div
                @click="toggleSelected"
                :class="{ active: isSelected }"
                class="select-box"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="34"
                  viewBox="0 0 46 34"
                  fill="none"
                >
                  <path
                    d="M16.0859 33.1219C15.508 33.1219 14.9301 32.9007 14.4898 32.4605L0.662237 18.6325C-0.220746 17.7499 -0.220746 16.3229 0.662237 15.4403C1.54481 14.5578 2.97139 14.5578 3.85437 15.4403L16.0859 27.6719L42.1459 1.61231C43.0285 0.729736 44.455 0.729736 45.338 1.61231C46.2206 2.49529 46.2206 3.92187 45.338 4.80485L17.6824 32.4605C17.2421 32.9007 16.6638 33.1219 16.0859 33.1219Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <KioskBottom :backLink="`/categories/${2}`" :isCartBtn="true" />
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { useMenuStore } from "~~/store/Menu";

const isSelected = ref(false);

const toggleSelected = () => {
  isSelected.value = !isSelected.value;
};

const route = useRoute();
const menus = useMenuStore();

const productId = route?.params?.id;

const product = ref([]);
const allProducts = ref([]);
const loading = ref();
const loadingOptions = ref(10);
watchEffect(() => {
  loading.value = menus._isLoading;

  if (menus && menus.products) {
    allProducts.value = menus.products;

    console.log("allProduct:", allProducts.value);

    const filteredItem = allProducts.value.find(
      (item) => item?.id == productId
    );

    product.value = filteredItem;

    let options = menus.options;

    console.log("options:-", options);

    if (options.length) {
      const data = options.filter((option) =>
        option.items.includes(product?.id)
      );

      console.log("filterd options:-", data);
    }
  }
});
</script>

<style lang="scss">
.kiosk-single-product {
  min-height: 100vh;
  background-color: #f5f5f5;
  &__content {
    padding: 100px 0px;
  }
  &__details {
    .banner-image {
      height: 470px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
      }
    }
    .info {
      margin-top: 50px;
      padding-bottom: 50px;
      border-bottom: 2px solid #dddddd;
      P {
        font-size: 30px;
        font-weight: 400;
        line-height: 30px;
        text-align: left;
        color: #333333;
        margin-top: 20px;
      }
    }
    .name-and-price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 50px;
        font-weight: 700;
        line-height: 50px;
        color: #333333;
      }
    }
  }
  .product-options {
    margin-top: 80px;
    h4 {
      color: #333333;
      font-size: 36px;
      font-weight: 600;
      line-height: 36px;
      margin-bottom: 40px;
    }
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 20px;
      border-radius: 8px;
    }
    &__card {
      background: #fff;
      width: 100%;
      height: 237px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      P {
        font-size: 24px;
        font-weight: 600;
        line-height: 24px;
        text-align: center;
        color: #333333;
      }
    }
    &__img {
      width: 180px;
      height: 118px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .select-box {
      position: absolute;
      top: 0;
      // margin-top: -5px;
      // margin-right:-5px;
      right: 0;
      width: 61px;
      height: 58px;
      border-radius: 0px 8px 0px 8px;
      border: 1px solid #717b56;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .selected {
      background: #717b56 !important;
      p {
        color: #ffff;
      }
    }
    .active {
      background-color: #fff;
      svg {
        path {
          fill: #717b56;
        }
      }
    }
  }
}

.kiosk-loading-skleton {
  width: 100%;
  &__name-and-price {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__options {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
    border-radius: 8px;
  }
}
</style>

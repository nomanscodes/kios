<template>
  <section class="fl-our-menu">
    <div class="fl-our-menu__content fl-container">
      <!-- heading  -->
      <div class="fl-our-menu__heading">
        <h1>Notre menu</h1>
        <p>
          Food Land propose une large variété de plats délicieux, des hamburgers
          classiques aux salades fraîches et aux wraps savoureux. Nous avons
          également une sélection de friandises et de milkshakes
        </p>
      </div>
      <!-- category  -->
      <div class="fl-our-menu__category">
        <div>
          <span
            @click="tabAndCatHandeler(cat)"
            v-for="cat in filteredCategories"
            :key="cat.id"
            :class="{ active: cat.id === catName }"
          >
            {{ cat?.name }}
          </span>
        </div>
      </div>
      <!-- products  -->
      <div class="fl-our-menu__products" id="productWrapper">
        <!-- product card  -->
        <div
          v-for="item in visibleProducts"
          :key="item.id"
          class="fl-product-card"
          @click="
            (e) => {
              activeProduct = item;
              show = true;
            }
          "
        >
          <div class="fl-product-card__img">
            <img :src="`${useAppConfig().apiRoot}${item.image}`" alt="" />
          </div>
          <div class="fl-product-card__info">
            <h1>{{ item?.name }}</h1>
            <p>
              {{ item?.description }}
            </p>
            <div class="fl-product-card__bottom">
              <span>
                {{ useAppConfig().currencySymbol
                }}{{ item.price.price_delivery }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <CartModal
      v-if="activeProduct"
      v-model="show"
      :product="activeProduct"
      :show="show"
      @confirm="show = false"
      @cancel="show = false"
    >
    </CartModal>
  </section>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
import { useMenuStore } from "~~/store/Menu";
import { useSettingStore } from "~~/store/Settings";
import { useCartStore } from "~~/store/Cart";


const menus = useMenuStore();
const settings = useSettingStore();
const cart = useCartStore();

const show = ref(false);
const activeProduct = ref(null);

const filteredCategories = ref([]);
const visibleProducts = ref([]);
const catName = ref();
const allProducts = ref([]);

watchEffect(() => {
  const categories = menus?._categories;

  const shuffledArray = categories?.slice();

  if (shuffledArray) {
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    filteredCategories.value = shuffledArray.slice(0, 5);
    catName.value = filteredCategories?.value[0]?.id;
  }
});

watchEffect(() => {
  allProducts.value = menus?.products;

  if (catName) {
    // Sort and slice the products if the category is "all"

    const thisCatProduct = allProducts.value.filter(
      (item) => item?.category_id === catName?.value
    );

    visibleProducts.value = thisCatProduct.slice(1, 9);
  }
});

const tabAndCatHandeler = (cat: any) => {
  const productWrapper = document.getElementById("productWrapper");
  productWrapper.style.opacity = "0";

  setTimeout(() => {
    productWrapper.style.opacity = "1";

    if (cat) {
      catName.value = cat?.id;
      const thisCatProduct = allProducts.value
        .filter((item) => item?.category_id === cat?.id)
        .slice(0, 8);
      visibleProducts.value = thisCatProduct;
    }
  }, 300);
};

// category_id
</script>

<style lang="scss">
.fl-our-menu {
  padding: 100px;
  background: var(--fl-section-bg);
  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    h1 {
      font-size: var(--p-sub-heading-font);
      color: var(--p-black-color);
      font-weight: 600;
      font-style: italic;
      margin-bottom: 5px;
    }
    p {
      font-size: var(--p-small-font);
      color: var(--p-black-gray);
      padding: 0;
      margin: 0;
      font-weight: 500;
      text-align: center;
    }
  }
  &__category {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      span {
        border: 1px solid var(--fl-primary);
        color: var(--fl-primary);
        padding: 6px 20px;
        border-radius: 9999px;
        font-size: var(--p-small-font);
        font-weight: 500;
        cursor: pointer;
      }
      .active {
        background: var(--fl-primary);
        color: var(--p-white-color);
      }
    }
  }
  &__products {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 70px 0px;
    &__heading {
      margin-bottom: 25px;
    }
    &__category {
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
        span {
          padding: 4px 15px;
        }
      }
    }
    &__products {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    padding: 70px 0px;
    &__heading {
      margin-bottom: 25px;
    }
    &__category {
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
        span {
          padding: 4px 15px;
        }
      }
    }
    &__products {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }
  }
}

.fl-product-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  background: #3b3b3b;
  box-shadow: 2px 4px 6px rgb(236, 233, 233);
  &__img {
    img {
      height: auto;
      width: 100%;
      object-fit: cover;
    }
  }
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 15px 20px 15px;
    border: none;
    border-radius: 0px;
    h1 {
      font-size: var(--p-title-font);
      color: var(--p-white-color);
      font-weight: 700;
      text-align: left;
    }
    P {
      font-size: var(--p-small-font);
      color: var(--p-white-color);
      font-weight: 500;
      text-align: left;
    }
  }
  &__bottom {
    display: flex;
    align-items: center;
    width: 100%;
    span {
      color: var(--fl-primary);
      font-size: 25px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
    overflow: hidden;
    border-radius: 10px;

    &__img {
      width: 100%;
      height: 100%;
      img {
        border-top-left-radius: 10px !important;
        border-top-right-radius: 10px !important;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__info {
      padding: 10px;
      P {
        font-size: var(--p-small-font);
        margin-bottom: 0px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    padding: 0px;
    overflow: hidden;
    border-radius: 10px;

    &__img {
      width: 100%;
      height: 100%;
      img {
        border-top-left-radius: 10px !important;
        border-top-right-radius: 10px !important;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__info {
      padding: 10px;
      P {
        font-size: var(--p-small-font);
        margin-bottom: 0px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>

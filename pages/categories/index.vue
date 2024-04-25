<template>
  <KioskHeader heading="Choose Category" />
  <div class="kiosk-categories">
    <div class="kiosk-categories__content kiosk-container">
      <div class="kiosk-categories__wrapper">
        <div
          v-if="loading"
          v-for="item in loadingItems"
          class="border-round border-1 surface-border surface-card"
        >
          <Skeleton width="100%" height="250px"></Skeleton>
          <div class="flex justify-content-between mt-3">
            <Skeleton width="100%" height="2rem"></Skeleton>
          </div>
        </div>

        <!-- category card  -->
        <NuxtLink
          v-else
          v-for="item in allCategories"
          :to="`/categories/${item?.id}`"
          :key="item?.id"
          class="kiosk-category-card"
        >
          <div class="kiosk-category-card__img">
            <img
              :src="`${useAppConfig().apiRoot}${item.image}`"
              :alt="item?.name"
            />
          </div>
          <div class="name">
            <p>{{ item?.name }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <KioskBottom :backLink="'/'" />
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useMenuStore } from "~~/store/Menu";

const menuStore = useMenuStore();

const allCategories = ref([]);

const loading = ref();
const loadingItems = ref(10);

watchEffect(() => {
  loading.value = menuStore._isLoading;
  allCategories.value = menuStore?.categories;
  console.log("categories:-", allCategories);
});

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

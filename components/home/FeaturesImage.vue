<template>
  <section class="fl-features-img">
    <div class="fl-features-img__content fl-container">
      <!-- item  -->
      <div class="fl-features-img__item">
        <img src="/assets/img/naan-bread.avif" alt="" />
      </div>
      <div class="fl-features-img__item">
        <img src="/assets/img/plats-burger.jpg" alt="" />
      </div>
      <div class="fl-features-img__item">
        <img src="/assets/img/fresh-beef-tacos.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.fl-features-img {
  padding: 100px 0px;
  background: var(--p-white-color);
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  &__item {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    padding: 70px 0px;
    &__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    &__item {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
}
</style>

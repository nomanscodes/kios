<template>
  <div class="fl-product-card">
    <div class="fl-product-card__img">
      <img src="/img/p1.png" alt="" />
    </div>
    <div class="fl-product-card__info">
      <h1>Garden Fresh Salad</h1>
      <p>
        A delightful mix of crisp lettuce, cherry tomatoes, and cucumbers topped
        with balsamic vinaigrette.
      </p>
      <span>$25.00</span>
    </div>
    <button>+</button>
  </div>
</template>


<script setup>

</script>

<style lang="scss">
.fl-product-card {
  max-height: 440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  &__img {
    position: absolute;
    margin-top: -80px;
    img {
      max-width: 213px;
      max-height: 226px;
      width: 100%;
      object-fit: cover;
    }
  }
  &__info {
    height: 300px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 20px 35px 20px;
    border: 1px solid #d6d6d6;
    border-radius: 14px;
    h1 {
      font-size: var(--p-title-font);
      color: var(--p-black-color);
      font-weight: 600;
      font-style: italic;
    }
    P {
      font-size: 15px;
      line-height: 20px;
      margin-bottom: 10px;
      color: var(--p-black-gray);
      font-weight: 500;
      text-align: center;
    }
    span {
      color: var(--fl-primary);
      font-weight: 700;
      font-style: italic;
    }
  }
  button {
    position: absolute;
    bottom: 0;
    margin-bottom: -20px;
    height: 40px;
    width: 40px;
    border-radius: 9999px;
    border: none;
    color: var(--p-white-color);
    background: var(--fl-primary);
  }
  
  @media screen and (max-width: 768px) {
    max-height: fit-content;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    background: var(--p-white-color);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px 0px 20px 0px;
    &__img {
      position: static;
      margin-top: -0px;
      img {
        max-width: 213px;
        max-height: 200px;
        width: 100%;
        object-fit: cover;
      }
    }
    &__info {
      height: auto;
      background: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px 10px 10px 20px;
      border: none;
      border-radius: 0px;
      P {
        font-size: var(--p-small-font);
      }
    }
    button {
      position: static;
      margin-bottom: -0px;
      height: 36px;
      width: 36px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    max-height: fit-content;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    background: var(--p-white-color);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px 0px 20px 0px;
    &__img {
      position: static;
      margin-top: -0px;
      img {
        max-width: 213px;
        max-height: 200px;
        width: 100%;
        object-fit: cover;
      }
    }
    &__info {
      height: auto;
      background: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px 10px 10px 20px;
      border: none;
      border-radius: 0px;
      P {
        font-size: var(--p-small-font);
      }
    }
    button {
      position: static;
      margin-bottom: -0px;
      height: 36px;
      width: 36px;
    }
  }
}

</style>

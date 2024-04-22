<template>
  <div class="kiosk-home">
    <div class="kiosk-home__navigation">
      <p>Order Here</p>
      <NuxtLink to="/categories">
        <button>Start</button>
      </NuxtLink>
    </div>
    <div class="kiosk-home__bottom">
      <div class="kiosk-home__bottom-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          max-width="900"
          height="430"
          viewBox="0 0 1080 430"
          fill="none"
        >
          <ellipse cx="540" cy="540" rx="705" ry="540" fill="#717B56" />
        </svg>
      </div>
      <div class="kiosk-home__bottom-content">
        <div>
          <img class="big" src="/assets/img/home-bottom-burger.png" alt="" />
          <!-- <img class="small" src="/assets/img/home-bottom-2nd-img.png" alt="" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.kiosk-home {
  background: #f8ffe4;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  &__navigation {
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: fit-content;

    p {
      font-size: 120px;
      font-weight: 500;
      line-height: 120px;
      text-align: center;
      color: #222222;
    }
    button {
      width: 527px;
      height: 120px;
      top: 200px;
      left: 29px;
      gap: 0px;
      border-radius: 16px;
      opacity: 0px;
      border: none;
      font-size: 70px;
      font-weight: 500;
      line-height: 70px;
      text-align: center;
      background: #717b56;
      color: #ffffff;
    }
  }
  &__bottom {
    width: 100%;
    height: auto;
    bottom: 0;
    position: relative;
  }
  &__bottom-content {
    position: absolute;
    top: 0;
    margin-top: -100px;
    left: 50%;
    transform: translateX(-50%);
    div {
      display: flex;
      align-items: center;
    }
    .big {
      max-width: 728px;
      height: 510px;
      width: 100%;
    }
    .small {
      position: absolute;
      right: 0;
      bottom: 10%;
      width: 300px;
      height: 280px;
    }
  }
}
</style>

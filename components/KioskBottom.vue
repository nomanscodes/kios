<template>
  <div class="kiosk-bottom">
    <div class="kiosk-bottom__content kiosk-container">
      <nuxtLink to="#" class="back-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="40"
          viewBox="0 0 23 40"
          fill="none"
        >
          <path
            d="M1.07278 21.4275L19.0606 39.4094C19.8499 40.1967 21.1287 40.1967 21.92 39.4094C22.7092 38.6221 22.7092 37.3433 21.92 36.556L5.35892 20.0009L21.918 3.44585C22.7073 2.65855 22.7073 1.37977 21.918 0.590475C21.1287 -0.196825 19.8479 -0.196825 19.0586 0.590475L1.07079 18.5721C0.293618 19.3513 0.293618 20.6502 1.07278 21.4275Z"
            fill="#333333"
          />
        </svg>
        <span>Back</span>
      </nuxtLink>
      <nuxtLink to="#" class="next-btn">
        <button>Next</button>
      </nuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kiosk-bottom {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 110px;
  background-color: #fff;
  box-shadow: 0px -5px 46px 0px #0000000d;
  z-index:1000;
  &__content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .back-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      span {
        font-size: 50px;
        font-weight: 500;
        line-height: 50px;
        color: #333333;
      }
    }
    .next-btn {
      button {
        width: 366px;
        height: 102px;
        border-radius: 8px;
        background: #717b56;
        font-size: 50px;
        font-weight: 500;
        line-height: 50px;
        text-align: center;
        border: none;
        color: #fff;
      }
    }
  }
}
</style>

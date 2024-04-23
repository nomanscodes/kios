<template>
  <div class="kiosk-sidebar">
    <Sidebar v-model:visible="visible" position="right">
      <template #header>
        <div class="kiosk-sidebar__header">
          <h3>Your Order <span>(2 Item)</span></h3>
        </div>
      </template>

      <div class="kiosk-sidebar__content">
        <!-- cart item  -->
        <div class="kiosk-cart-item">
          <!-- name and description  -->
          <div class="kiosk-cart-item__info">
            <h2>Roast Chicken</h2>
            <p>Juicy tender roast.</p>
          </div>
          <!-- price and actions  -->
          <div class="kiosk-cart-item__right">
            <p>$25.00</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <g clip-path="url(#clip0_34_211)">
                <path
                  d="M18 0C8.0744 0 0 8.0744 0 18C0 27.9256 8.0744 36 18 36C27.9256 36 36 27.9256 36 18C36 8.0744 27.9256 0 18 0Z"
                  fill="#F44336"
                />
                <path
                  d="M24.6286 22.5075C25.215 23.0941 25.215 24.042 24.6286 24.6286C24.3361 24.9212 23.9522 25.0681 23.5679 25.0681C23.1839 25.0681 22.8 24.9212 22.5075 24.6286L18 20.1209L13.4926 24.6286C13.2001 24.9212 12.8161 25.0681 12.4322 25.0681C12.0479 25.0681 11.6639 24.9212 11.3714 24.6286C10.785 24.042 10.785 23.0941 11.3714 22.5075L15.8791 18L11.3714 13.4926C10.785 12.906 10.785 11.9581 11.3714 11.3714C11.9581 10.785 12.906 10.785 13.4926 11.3714L18 15.8791L22.5075 11.3714C23.0941 10.785 24.042 10.785 24.6286 11.3714C25.215 11.9581 25.215 12.906 24.6286 13.4926L20.1209 18L24.6286 22.5075Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_211">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <!-- cart amount  -->
        <div class="kiosk-cart-amount">
          <div class="kiosk-cart-amount__top">
            <div class="kiosk-cart-amount__entry">
              <h5>Sub Total</h5>
              <span>$50.00</span>
            </div>
            <div class="kiosk-cart-amount__entry">
              <h5>Tax</h5>
              <span>$02.00</span>
            </div>
          </div>
          <!-- total amount  -->
          <div class="kiosk-cart-amount__total">
            <h5>Total</h5>
            <span>$52.00</span>
          </div>
        </div>
        <!-- cart buttons  -->
        <div class="kiosk-cart-buttons">
          <button @click="visible = false">X Close</button>
          <button @click="successDialog = true">Place Order($52.00)</button>
          <!-- order processing modal  -->
          <Dialog v-model:visible="waitingDialog" modal>
            <div class="kiosk-waiting-modal">
              <h4>Waiting For Payment</h4>
              <p>Follow Instructions On Device</p>
              <button @click="waitingDialog = false">X Close</button>
            </div>
          </Dialog>
          <!-- success modal  -->
          <Dialog v-model:visible="successDialog" modal>
            <div class="kiosk-success-modal">
              <h4>Thank You</h4>
              <p>Order <span>(#2145 2478)</span></p>
              <h6>Wait 10 Minutes</h6>
              <NuxtLink to="/">
                <button>Again Order</button>
              </NuxtLink>
            </div>
          </Dialog>
        </div>
      </div>
    </Sidebar>
    <!-- sidebar open cart icon button  -->
    <div v-if="!addToCartBtn" @click="visible = true" class="cart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <g clip-path="url(#clip0_134_111)">
          <path
            d="M19.3314 38.7895H19.3341C19.3364 38.7895 19.3387 38.789 19.341 38.789H51.2109C51.9955 38.789 52.6854 38.2686 52.901 37.5142L59.9322 12.9048C60.0837 12.3743 59.9775 11.8039 59.6457 11.3635C59.3133 10.9232 58.7938 10.6641 58.2422 10.6641H15.2774L14.0208 5.00931C13.8419 4.20502 13.1287 3.63281 12.3047 3.63281H1.75781C0.786895 3.63281 0 4.41971 0 5.39062C0 6.36154 0.786895 7.14844 1.75781 7.14844H10.8948C11.1172 8.15048 16.9079 34.2091 17.2412 35.7083C15.3731 36.5204 14.0625 38.383 14.0625 40.5469C14.0625 43.4546 16.4282 45.8203 19.3359 45.8203H51.2109C52.1818 45.8203 52.9687 45.0334 52.9687 44.0625C52.9687 43.0916 52.1818 42.3047 51.2109 42.3047H19.3359C18.3668 42.3047 17.5781 41.5159 17.5781 40.5469C17.5781 39.5791 18.3641 38.7918 19.3314 38.7895ZM55.9117 14.1797L49.8848 35.2734H20.7458L16.0583 14.1797H55.9117Z"
            fill="#333333"
          />
          <path
            d="M17.5781 51.0937C17.5781 54.0015 19.9438 56.3672 22.8516 56.3672C25.7593 56.3672 28.125 54.0015 28.125 51.0937C28.125 48.186 25.7593 45.8203 22.8516 45.8203C19.9438 45.8203 17.5781 48.186 17.5781 51.0937ZM22.8516 49.3359C23.8206 49.3359 24.6094 50.1247 24.6094 51.0937C24.6094 52.0628 23.8206 52.8516 22.8516 52.8516C21.8825 52.8516 21.0937 52.0628 21.0937 51.0937C21.0937 50.1247 21.8825 49.3359 22.8516 49.3359Z"
            fill="#333333"
          />
          <path
            d="M42.4219 51.0937C42.4219 54.0015 44.7876 56.3672 47.6953 56.3672C50.603 56.3672 52.9687 54.0015 52.9687 51.0937C52.9687 48.186 50.603 45.8203 47.6953 45.8203C44.7876 45.8203 42.4219 48.186 42.4219 51.0937ZM47.6953 49.3359C48.6644 49.3359 49.4531 50.1247 49.4531 51.0937C49.4531 52.0628 48.6644 52.8516 47.6953 52.8516C46.7262 52.8516 45.9375 52.0628 45.9375 51.0937C45.9375 50.1247 46.7262 49.3359 47.6953 49.3359Z"
            fill="#333333"
          />
        </g>
        <defs>
          <clipPath id="clip0_134_111">
            <rect width="60" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p>$24.00</p>
    </div>
    <!-- sidebar open add to cart btn  -->
    <div @click="visible = true" v-else class="cart-btn">
      <button>Add to cart($24.00)</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["addToCartBtn"]);
const visible = ref(false);
const waitingDialog = ref(false);
const successDialog = ref(false);

const closeSidebar = () => {
  setTimeout(() => {
    visible.value = false;
    isDropdownOpen.value = -1;
  }, 500);
};
</script>

<style lang="scss" scope>
.kiosk-sidebar {
  font-family: "Kanit", sans-serif !important;
  &__header {
    width: 100%;
    background-color: #717b56;
    height: 102px;
    display: flex;
    align-items: center;
    h3 {
      font-size: 40px;
      font-weight: 600;
      line-height: 40px;
      margin-left: 54px;
    }
    span {
      font-weight: 400;
    }
  }
  &__content {
    padding: 0px !important;
  }
  .cart {
    display: flex;
    max-width: 150px;
    width: 100%;
    align-items: center;
    position: relative;
    cursor: pointer;
    p {
      margin-top: -15px;
      margin-left: -15px;
      background-color: #717b56;
      min-width: 104px;
      max-width: fit-content;
      height: 43px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .cart-btn {
    button {
      min-width: 466px;
      height: 102px;
      border-radius: 8px;
      background: #717b56;
      font-size: 40px;
      font-weight: 500;
      line-height: 50px;
      text-align: center;
      border: none;
      color: #fff;
      white-space: nowrap;
    }
  }
}

.kiosk-cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 140px;
  border-bottom: 1px solid #dddddd;
  padding: 0px 54px !important;
  &__info {
    h2 {
      font-size: 36px;
      font-weight: 700;
      line-height: 36px;
      color: #222222 !important;
    }
    p {
      font-size: 30px;
      font-weight: 400;
      line-height: 30px;
      color: #666666;
    }
  }
  &__right {
    display: flex;
    align-items: center;
    gap: 20px;
    P {
      padding: 0px !important;
      margin: 0px !important;
      font-size: 24px;
      font-weight: 500;
      color: #444444;
    }
  }
}

.kiosk-cart-amount {
  width: 100%;
  &__top {
    min-height: 140px;
    border-bottom: 1px solid #dddddd;
    padding: 0px 54px !important;
    color: red !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__entry {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h5 {
      font-size: 30px;
      font-weight: 500;
      line-height: 30px;
      color: #666666;
    }
    span {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      color: #555555;
    }
  }
  &__total {
    padding: 0px 54px !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    h5,
    span {
      font-size: 30px;
      font-weight: 700;
      line-height: 30px;
      color: #222222;
    }
  }
}

.kiosk-cart-buttons {
  margin-top: 100px;
  padding: 0px 54px !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :nth-child(1) {
    width: 215px;
    height: 81px;
    border-radius: 8px;
    border: 1px solid #999999;
    color: #f44336;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
  }
  :nth-child(2) {
    width: 388px;
    height: 81px;
    border-radius: 8px;
    background-color: #717b56;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
    color: #fff;
    border: none;
  }
}

.kiosk-waiting-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 100px;
  h4 {
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    color: #222222 !important;
  }
  p {
    font-size: 26px;
    font-weight: 500;
    line-height: 26px;
    color: #555555 !important;
  }
  button {
    width: 215px;
    height: 81px;
    border-radius: 8px;
    border: 1px solid #999999;
    color: #f44336;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
  }
}

.kiosk-success-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  gap: 20px;
  h4 {
    font-size: 80px;
    font-weight: 700;
    line-height: 80px;
    text-align: center;
    color: #717b56;
  }
  p {
    font-size: 40px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color: #000000;
    span {
      color: #717b56;
      font-weight: 400;
    }
  }
  h6 {
    font-size: 40px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color: #000000;
  }
  button {
    margin-top: 50px;
    width: 215px;
    height: 81px;
    border-radius: 8px;
    border: none;
    background: #717b56;
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
  }
}

.p-sidebar {
  font-family: "Kanit", sans-serif !important;
  max-width: 850px;
  width: 100%;
  border: none !important;
  .p-sidebar-close {
    display: none;
  }
  .p-sidebar-header {
    padding: 0px !important;
  }
  .p-sidebar-content {
    padding: 0px !important;
  }
}
</style>

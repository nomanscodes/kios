<template>
  <section class="fl-header">
    <div class="fl-header__content fl-container">
      <!-- logo  -->
      <div class="fl-header__logo">
        <nuxtLink to="/">Food <span>Land</span></nuxtLink>
      </div>
      <!-- navigation links  -->
      <div class="fl-header__links">
        <nuxt-link to="/">Accueil</nuxt-link>
        <nuxt-link to="/order">La carte</nuxt-link>
        <nuxt-link to="/about">A propos</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
      <!-- user and card  -->
      <div class="fl-header__right">
        <!-- cart item  -->
        <div @click="show = !show" class="fl-header__cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 31 30"
            fill="none"
          >
            <g clip-path="url(#clip0_87_1118)">
              <path
                d="M11.75 27.5C12.4404 27.5 13 26.9404 13 26.25C13 25.5596 12.4404 25 11.75 25C11.0596 25 10.5 25.5596 10.5 26.25C10.5 26.9404 11.0596 27.5 11.75 27.5Z"
                stroke="#F46801"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 27.5C26.1904 27.5 26.75 26.9404 26.75 26.25C26.75 25.5596 26.1904 25 25.5 25C24.8096 25 24.25 25.5596 24.25 26.25C24.25 26.9404 24.8096 27.5 25.5 27.5Z"
                stroke="#F46801"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.75 1.25H6.75L10.1 17.9875C10.2143 18.563 10.5274 19.0799 10.9844 19.4479C11.4415 19.8158 12.0134 20.0112 12.6 20H24.75C25.3366 20.0112 25.9085 19.8158 26.3656 19.4479C26.8226 19.0799 27.1357 18.563 27.25 17.9875L29.25 7.5H8"
                stroke="#F46801"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_87_1118">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <!-- cart item  -->
          <span>
            {{ cart.cart.length }}
          </span>
        </div>
        <!-- user icon  -->
        <div
          @click="
            auth.isAuthenticated
              ? (showProfile = true)
              : (auth._showLogin = true)
          "
          class="fl-header__user-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
          >
            <path
              d="M25.5 26.25V23.75C25.5 22.4239 24.9732 21.1521 24.0355 20.2145C23.0979 19.2768 21.8261 18.75 20.5 18.75H10.5C9.17392 18.75 7.90215 19.2768 6.96447 20.2145C6.02678 21.1521 5.5 22.4239 5.5 23.75V26.25"
              stroke="#F46801"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5 13.75C18.2614 13.75 20.5 11.5114 20.5 8.75C20.5 5.98858 18.2614 3.75 15.5 3.75C12.7386 3.75 10.5 5.98858 10.5 8.75C10.5 11.5114 12.7386 13.75 15.5 13.75Z"
              stroke="#F46801"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <!-- mobile menu toggle  -->
        <div class="fl-header__toogle-icon">
          <font-awesome-icon icon="bars" @click="sidebar = true" />
        </div>
      </div>
    </div>
    <Sidebar v-model:visible="sidebar" style="background: black !important">
      <div class="fl-header-sidebar">
        <div class="fl-header-sidebar__logo">
          <!-- <img src="/assets/logo.png" alt="" /> -->
          <div class="fl-header__logo">
            <p>Food <span>Land</span></p>
          </div>
        </div>
        <ul>
          <li>
            <nuxt-link @click="sidebar = false" to="/">Accueil</nuxt-link>
          </li>
          <li>
            <nuxt-link @click="sidebar = false" to="/order">La carte</nuxt-link>
          </li>
          <li>
            <nuxt-link @click="sidebar = false" to="/contact"
              >Contact
            </nuxt-link>
          </li>
          <li>
            <nuxt-link @click="sidebar = false" to="/about">
              A propos
            </nuxt-link>
          </li>
        </ul>
      </div>
    </Sidebar>
    <CartItems v-model="show" @confirm="show = false" @cancel="show = false" />
    <LoginModal v-model="auth._showLogin" />
    <ProfileModal v-if="showProfile" v-model="showProfile" />
  </section>
</template>

<script lang="ts">
import { useAuthStore } from "~~/store/Auth";
import { useCartStore } from "~~/store/Cart";

export default defineNuxtComponent({
  data() {
    return {
      show: false,
      showMenu: false,
      showProfile: false,
      sidebar: false,
    };
  },
  setup() {
    const cart = useCartStore();
    const auth = useAuthStore();

    return {
      cart,
      auth,
    };
  },
});
</script>

<style scoped lang="scss">
.fl-header {
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  z-index: 100;
  &__content {
    border-radius: 9999px;
    border-bottom: 0.6px solid var(--fl-primary);
    background: #222;
    box-shadow: 0px 4px 8px 0px rgba(34, 34, 34, 0.6);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    a {
      margin: 0;
      padding: 0;
      font-size: 30px;
      font-weight: 600;
      text-transform: uppercase;
      color:white;
      span {
        color: var(--fl-primary);
      }
    }
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 45px;
    a {
      color: #fff;
      font-size: var(--p-small-font);
      font-style: normal;
      font-weight: 600;
      line-height: 100%;
    }
  }
  &__right {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  &__cart {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      color: white;
      position: absolute;
      top: 0;
      margin-top: -12px;
      right: 0;
      margin-right: -7px;
      background: var(--fl-primary);
      height: 17px;
      width: 17px;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 600;
    }
  }
  &__user-icon {
    cursor: pointer;
  }
  &__toogle-icon {
    color: var(--fl-primary);
    font-size: 20px;
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__content {
      border-radius: 9999px;
      border-bottom: 0.6px solid var(--fl-primary);
      background: #222;
      box-shadow: 0px 4px 8px 0px rgba(34, 34, 34, 0.6);
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__logo {
      p {
        margin: 0;
        padding: 0;
        font-size: 30px;
        font-weight: 600;
        text-transform: uppercase;
        span {
          color: var(--fl-primary);
        }
      }
    }
    &__links {
      display: none;
    }
    &__right {
      gap: 20px;
    }
    &__cart {
      width: 26px;
      height: 26px;
      position: relative;
      display: flex;
      align-items: center;

      span {
        color: white;
        position: absolute;
        top: 0;
        margin-top: -12px;
        right: 0;
        margin-right: -7px;
        background: var(--fl-primary);
        height: 17px;
        width: 17px;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 600;
      }
    }
    &__toogle-icon {
      display: flex;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    top: 20px;

    &__content {
      padding: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__logo {
      p {
        margin: 0;
        padding: 0;
        font-size: 30px;
        font-weight: 600;
        text-transform: uppercase;
        span {
          color: var(--fl-primary);
        }
      }
    }
    &__links {
      gap: 25px;
      a {
        font-weight: 500;
      }
    }
    &__right {
      gap: 20px;
    }
    &__cart {
      span {
        margin-top: -7px;
        font-size: 13px;
        font-weight: 500;
      }
    }
    &__toogle-icon {
      color: var(--fl-primary);
      font-size: 20px;
      display: none;
    }
  }
}

.fl-header-sidebar {
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 130px;
    }
  }
  ul {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
.fl-header__links .router-link-exact-active {
  display: flex;
  padding: 10px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 9999px;
  border: 1px solid var(--fl-primary);
  color: var(--fl-primary) !important;
}
.p-sidebar {
  background-color: black !important;
  border: none !important;
  box-shadow: none !important;
}
</style>

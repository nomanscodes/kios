<template>
  <section
    class="fl-home-banner"
    style="background-image: url('/img/banner1.jfif')"
  >
    <div class="fl-home-banner__wrapper">
      <div class="fl-home-banner__content fl-container">
        <span>La meilleure nourriture </span>
        <h1>Passez votre commande en ligne dès aujourd'hui !</h1>
        <p>
          Des hamburgers et des wraps frais et savoureux préparés avec des
          ingrédients de qualité
        </p>
        <nuxt-link to="/order">
          <button>Commander en ligne</button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.fl-home-banner {
  height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &__wrapper {
    width: 100%;
    height: 100%;
    background: rgb(15, 15, 15, 0.8);
  }
  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    span {
      padding: 10px 20px;
      border-radius: 9999px;
      border: 1px solid var(--p-white-color);
      width: fit-content;
      color: var(--p-white-color);
      font-family: "Satisfy", cursive;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 20px */
      text-transform: capitalize;
      margin-bottom: 20px;
    }
    h1 {
      font-size: var(--p-sub-heading-font);
      text-align: center;
      max-width: 650px;
      font-weight: 700;
      font-style: italic;
      color: var(--p-white-color);
      margin-bottom: 15px !important;
    }
    p {
      font-size: var(--p-small-font);
      font-weight: 500;
      color: var(--p-light-white);
      margin-bottom: 25px !important;
    }

    button {
      border: none;
      font-size: var(--p-small-font);
      padding: 10px 50px;
      border-radius: 9999px;
      background: var(--fl-primary);
      color: var(--p-white-color);
    }
  }
}
</style>

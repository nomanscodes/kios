<template>
  <div class="container">
    <div class="pasta-about">
      <h1 class="pasta-about-title">A Propos</h1>

      <div class="row">
        <div class="col pasta-about-text">
          <p>
            Bienvenue chez Food Land, votre destination pour des repas rapides
            et délicieux à Livry-Gargan. Nous sommes une équipe passionnée,
            dédiée à vous offrir une expérience culinaire exceptionnelle à des
            prix abordables. Notre engagement est de créer des burgers, des
            wraps, des salades, et bien plus encore qui satisferont vos envies.
          </p>
          <p>
            Au cœur de Food Land se trouve la qualité. Nous sélectionnons
            soigneusement nos ingrédients pour garantir des plats frais et
            savoureux. De la viande tendre aux légumes croquants, nous veillons
            à ce que chaque bouchée soit une explosion de saveurs. Nous croyons
            que de bons repas commencent par de bons produits.
          </p>
          <p>
            Notre objectif est de rendre votre expérience aussi agréable que
            possible. Que vous optiez pour un repas sur place, à emporter ou une
            livraison à domicile, nous nous efforçons de vous fournir un service
            rapide et convivial. Chez Food Land, vous n'êtes pas seulement un
            client, vous faites partie de la famille.
          </p>
        </div>
        <div class="col">
          <img
            src="~/assets/img/storefront.jpg"
            height="300"
            style="height: 370px"
            alt="Pasta Pizza"
          />
        </div>
      </div>

      <div class="row pasta-numbers">
        <div class="col-4">
          <h2 class="pasta-numbers-count">01.</h2>
          <h3 class="pasta-numbers-title">
            Saveurs <span class="pasta-numbers-em">Italiennes</span>
          </h3>
          <p class="pasta-numbers-text">
            Explorez une expérience culinaire italienne authentique, élaborée
            avec des ingrédients frais et de qualité.
          </p>
        </div>
        <div class="col-4">
          <h2 class="pasta-numbers-count">02.</h2>
          <h3 class="pasta-numbers-title">
            Plaisirs <span class="pasta-numbers-em">Gourmands</span>
          </h3>
          <p class="pasta-numbers-text">
            Régalez-vous avec nos délicieuses pizzas et pâtes, accompagnées de
            desserts gourmands.
          </p>
        </div>
        <div class="col-4">
          <h2 class="pasta-numbers-count">03.</h2>
          <h3 class="pasta-numbers-title">
            <span class="pasta-numbers-em">Expérience </span> unique
          </h3>
          <p class="pasta-numbers-text">
            Immergez-vous dans une expérience unique en savourant notre cuisine
            italienne authentique et en bénéficiant de notre service chaleureux.
          </p>
        </div>
      </div>

      <div class="row pasta-box">
        <div class="col-8 pasta-box-content">
          <h3 class="pasta-box-title">Passez votre commande en un clic !</h3>
          <div class="pasta-box-buttons">
            <RouterLink to="/order" class="btn btn-primary btn-lg pickup">
              Click & Collect
            </RouterLink>
            <RouterLink to="/order" class="btn btn-primary btn-lg delivery">
              Livraison
            </RouterLink>
          </div>
        </div>
        <div class="col-4 pasta-box-image">
          <img src="~/assets/img/burger.png" alt="Pasta" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: "About",
  head() {
    return {
      title: "About - Food Land",
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      meta: [
        {
          name: "description",
          content:
            "Food Land: Le meilleur restaurant de la ville pour une cuisine délicieuse.",
        },
      ],
      links: [
        { rel: "icon", type: "image/x-icon", href: "~/assets/favicon.ico" },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.pasta-about {
  padding-top: 10rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin: 1rem;
    padding-top: 6rem;
  }

  .pasta-about-title {
    font-size: 3rem;
    font-weight: bold;
    color: var(--bs-primary);
    line-height: 1;
    width: 100%;
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 768px) {
      margin-bottom: 2.5rem;
      font-size: 2rem;
    }
  }

  p {
    font-size: 0.9rem;
    font-weight: normal;
    margin-bottom: 0.8rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .row {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .col {
    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
    }
  }

  img {
    width: 100%;
    height: -webkit-fill-available;
    border-radius: 2rem;
    object-fit: cover;
  }
}

.pasta-numbers {
  margin-top: 10rem;
  margin-bottom: 10rem;

  .col-4 {
    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
  }

  .pasta-numbers-count {
    font-size: 2.5;
    font-weight: bold;
    color: var(--bs-secondary);
    line-height: 1;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .pasta-numbers-title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 1rem;

    .pasta-numbers-em {
      color: var(--bs-primary);
    }
  }

  .pasta-numbers-text {
    font-size: 0.9rem;
    font-weight: normal;
    margin-bottom: 2rem;
  }
}

.pasta-box {
  background: var(--bs-primary);
  border-radius: 2rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 1rem;
    flex-direction: column-reverse;
  }

  .col-4,
  .col-8 {
    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
    }
  }

  .pasta-box-content {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    z-index: 1;

    .pasta-box-title {
      font-size: 2rem;
      font-weight: bold;
      color: var(--bs-body-bg);
      text-transform: capitalize;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 1.5rem;
      }
    }

    .pasta-box-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 2rem;
      width: 100%;

      @media (max-width: 768px) {
        justify-content: center;
      }

      .btn.delivery {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
        font-weight: bold;
        text-transform: capitalize;
        background-color: transparent;
        border: 2px solid var(--bs-body-bg);
        color: var(--bs-body-bg);
        transition: all 0.3s ease-in-out;
        border-radius: 5px;

        &:hover {
          background-color: var(--bs-body-bg);
          color: var(--bs-primary);
        }
      }

      .btn.pickup {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
        font-weight: bold;
        text-transform: capitalize;
        background-color: var(--bs-body-bg);
        border: 2px solid var(--bs-body-bg);
        color: var(--bs-primary);
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
        margin-right: 1rem;

        &:hover {
          background-color: var(--bs-primary);
          color: var(--bs-body-bg);
        }
      }
    }
  }

  .pasta-box-image {
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }

    img {
      position: absolute;
      width: 250px;
      margin-left: 0;
      margin-top: 0;
      right: 0;
      padding: 30px;

      @media (max-width: 768px) {
        position: relative;
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        margin-bottom: -5rem;
        right: 0;
      }
    }
  }
}
</style>

<template>
  <section class="fl-client-review">
    <div class="fl-client-review__content fl-container">
      <!-- heading  -->
      <div class="fl-client-review__heading">
        <h1>Client Reviews</h1>
        <p>
          Discover the heartfelt testimonials of our satisfied patrons, sharing
          their delightful experiences with Food Land's exceptional cuisine.
        </p>
      </div>
      <div class="fl-client-review__wrapper">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :pagination="{
            clickable: true
          }"
          :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '769': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '1200': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
          :autoplay="{ delay: 40000, disableOnInteraction: false }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(review,i) in clientReviews" :key="i" class="mySwiper-item">
            <div class="carousel__item">
              <div class="fl-reviews-card">
                <div class="fl-reviews-card__content">
                  <!-- top  -->
                  <div class="fl-reviews-card__top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="34"
                      viewBox="0 0 46 34"
                      fill="none"
                    >
                      <path
                        d="M41.25 2.75C43.75 5.5 45.25 8.5 45.25 13.5C45.25 22.25 39 30 30.25 34L28 30.75C36.25 26.25 38 20.5 38.5 16.75C37.25 17.5 35.5 17.75 33.75 17.5C29.25 17 25.75 13.5 25.75 8.75C25.75 6.5 26.75 4.25 28.25 2.5C30 0.75 32 0 34.5 0C37.25 0 39.75 1.25 41.25 2.75ZM16.25 2.75C18.75 5.5 20.25 8.5 20.25 13.5C20.25 22.25 14 30 5.25 34L3 30.75C11.25 26.25 13 20.5 13.5 16.75C12.25 17.5 10.5 17.75 8.75 17.5C4.25 17 0.75 13.25 0.75 8.75C0.75 6.5 1.75 4.25 3.25 2.5C5 0.75 7 0 9.5 0C12.25 0 14.75 1.25 16.25 2.75Z"
                        fill="#FFD9BC"
                      />
                    </svg>
                    <p>
                      Exceptional dining experience at Food Land! The Chicken
                      Grills were succulent, and the ambiance was delightful.
                      Highly recommend! Salads at Food Land are a revelation!
                      Fresh ingredients, vibrant flavors, and impeccable
                      presentation.
                    </p>
                  </div>
                  <!-- cilen info  -->
                  <div class="fl-reviews-card__client-info">
                    <img src="/img/client1.png" alt="" />
                    <p>Emrani Khan</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Controller, Navigation, Pagination } from 'swiper/modules'

const modules = [Autoplay, Controller, Navigation, Pagination]

const clientReviews = [
  {
    name: 'John Doe',
    img: '/img/client1.jpg',
    comment: `
      John Doe shared a remarkable experience with us. He expressed deep satisfaction with our services and gave us a glowing 5-star rating. According to him, the quality of our products exceeded his expectations.
      `,
    rating: 5
  },
  {
    name: 'Jane Smith',
    img: '/img/client2.jpg',
    comment: `
      Jane Smith, another satisfied customer, took the time to express her appreciation for our offerings. She commended our team for their professionalism and courtesy, stating that our staff went above and beyond to ensure her needs were met.
      `,
    rating: 4
  },
  {
    name: 'Bob Johnson',
    img: '/img/client3.png',
    comment: `
      Bob Johnson, a recent customer, shared his thoughts on our services. He praised the efficiency of our team, stating that his expectations were not only met but exceeded. Bob gave us a 3-star rating and provided constructive feedback.
      `,
    rating: 3
  },
  {
    name: 'Bob Johnson',
    img: '/img/client3.png',
    comment: `
      Bob Johnson, a recent customer, shared his thoughts on our services. He praised the efficiency of our team, stating that his expectations were not only met but exceeded. Bob gave us a 3-star rating and provided constructive feedback.
      `,
    rating: 3
  },
  {
    name: 'Bob Johnson',
    img: '/img/client3.png',
    comment: `
      Bob Johnson, a recent customer, shared his thoughts on our services. He praised the efficiency of our team, stating that his expectations were not only met but exceeded. Bob gave us a 3-star rating and provided constructive feedback.
      `,
    rating: 3
  },
]
</script>

<style lang="scss">
.fl-client-review {
  padding: 100px 0px;
  background: var(--fl-section-bg);

  &__heading {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    h1 {
      color: var(--p-black-color);
      font-weight: 800;
      font-style: italic;
      margin-bottom: 10px;
      font-size: var(--p-sub-heading-font);
    }
    p {
      color: var(--p-black-color);
      max-width: 700px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 30px 0px 10px 0px;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    padding: 50px 0px;
    &__heading {
      margin-bottom: 20px;
    }
  }
}

.fl-reviews-card {
  height: fit-content;
  box-sizing: border-box;
  &__top {
    background: #fff7f1;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 6px 4px 6px  rgb(202, 200, 200);

    p {
      color: var(--p-black-color);
      font-size: var(--p-small-font);
      font-weight: 500 !important;
    }
  }
  &__client-info {
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 9999px;
    }
    p {
      color: var(--p-black-color);
      font-weight: 700;
      font-size: var(--p-small-font);
    }
  }

  @media screen and (max-width: 768px) {
    &__top {
      padding: 15px;
    }
    &__client-info {
      margin-top: -15px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 9999px;
      }
      p {
        font-weight: 600;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    &__top {
      padding: 20px;
    }
    &__client-info {
      margin-top: -15px;
      img {
        width: 70px;
        height: 70px;
      }
      p {
        font-weight: 600;
      }
    }
  }
}


// swipper pagination style

.fl-client-review  .swiper-pagination-bullet {
  background: none;
  height: 14px;
  width: 14px;
  border: 2px solid  var(--fl-primary);
  opacity: 100;

  @media screen and (max-width: 768px) {
    height: 10px;
    width: 10px;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    height: 12px;
    width: 12px;
  }
}
.fl-client-review  .swiper-pagination-bullet-active {
  background: var(--fl-primary);
}

.fl-client-review  .mySwiper {
  height: fit-content !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 20px !important;
}
.fl-client-review  .swiper-pagination {
  position: static !important;
}
</style>

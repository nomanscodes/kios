<template>
  <div class="fl-map">
    <div class="fl-map__content fl-container">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1311.1617736170363!2d2.5180594509190235!3d48.90922763560437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613bcc76beeb7%3A0x61c4700b6ffc89a9!2zRk9PRCBMQU5EIChpbmRpYeC4geC5hyBtYXNh4bi6YSk!5e0!3m2!1sen!2sbd!4v1713457370103!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style="border: 0"
        loading="lazy"
      ></iframe>

    </div>
  </div>
</template>

<style lang="scss">
.fl-map {
  position: relative;
  height: 450px;
  background: var(--p-white-color);
  padding: 0px 0px;
  &__content {
    height: 100%;
  }
  iframe {
    border: 0;
    height: 100%;
    width: 100%;
  }
}
</style>

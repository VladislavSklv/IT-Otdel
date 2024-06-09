const swiper = new Swiper(".employee-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  allowTouchMove: false,
  slidesPerGroup: 1,
  slidesPerView: 4,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

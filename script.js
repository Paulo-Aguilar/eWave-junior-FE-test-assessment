const swiper = new Swiper('.swiper', {
    // Optional parameters
    breakpoints: {  
      '375': {
        slidesPerView: 1,
        spaceBetween: 40,},
      '600': {
        slidesPerView: 3,
        spaceBetween: 50, },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });







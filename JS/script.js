var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true, 
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev", 
    },
});

import Swiper from 'swiper';
import { Keyboard, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener( 'DOMContentLoaded', function() {
    new Swiper('.swiper', {
        modules: [Keyboard, Navigation, EffectCoverflow ],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 75,
        keyboard: {
            enabled: true,
        },
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener( 'DOMContentLoaded', function() {
    new Swiper('.swiper', {
        modules: [Keyboard, Navigation],
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
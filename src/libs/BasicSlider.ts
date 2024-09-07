
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener( 'DOMContentLoaded', function() {
    new Swiper('.swiper', {
        modules: [Keyboard, Mousewheel, Pagination],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 75,
        keyboard: {
            enabled: true,
        },
        mousewheel: true,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
import { Swiper } from "swiper";
import { Parallax } from "swiper/modules";
import { Mousewheel } from "swiper/modules";
import { Controller } from "swiper/modules";
import { Pagination } from "swiper/modules";
Swiper.use([ Parallax, Mousewheel, Pagination ])
document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img',{
	modules: [ Parallax ],
	loop: false,
    speed: 2400,
	parallax: true,
})

    const swiperText = new Swiper('.slider-text', {
	modules: [Controller],	
	loop: false,
	speed: 2400,
    mousewheel: {
		invert: false,
	},
	controller: {
		control: swiperIMG,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	speed: 2000, // медленная скорость перехода
    effect: 'fade', // плавное затухание
    fadeEffect: {
        crossFade: true
    },
    on: {
        transitionStart: function () {
            // Добавляем класс анимации для всех буллетов
            const bullets = document.querySelectorAll('.swiper-pagination-bullet');
            bullets.forEach(bullet => {
                bullet.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
        },
        transitionEnd: function () {
            // Возвращаем стандартную анимацию после перехода
            setTimeout(() => {
                const bullets = document.querySelectorAll('.swiper-pagination-bullet');
                bullets.forEach(bullet => {
                    bullet.style.transition = '';
                });
            }, 1200);
        }
    }
});
})

   swiperIMG.controller.control = swiperText;



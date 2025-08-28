import { Swiper } from "swiper";
import { Parallax } from "swiper/modules";
import { Mousewheel } from "swiper/modules";
import { Controller } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import { gsap, Power2 } from "gsap";
import MicroModal from 'micromodal'

Swiper.use([ Parallax, Mousewheel, Pagination, Scrollbar, Power2 ])


// slider


document.addEventListener('DOMContentLoaded', () => {

    //modal
MicroModal.init({
openTrigger:'data-micromodal-open'

})

	const swiperIMG = new Swiper('.slider-img',{
	modules: [ Parallax ],
	loop: false,
    speed: 2000,
	parallax: true,
    pagination: {
        el: '.slider-pagination-count .total',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `/0${total}`
        }
    }
});
    console.log('swiperIMG инициализирован:', swiperIMG);

    const swiperText = new Swiper('.slider-text', {
	modules: [Controller],	
	loop: false,
	speed: 2000,
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
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true        
    },

    // pagination 


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

// gear

let gear = document.querySelector('.slider-gear')

swiperText.on('slideNextTransitionStart', function() {
    gsap.to(gear, 2.8, {
        rotation: '+=60', 
        ease: Power2.easeOut
    })
})

swiperText.on('slidePrevTransitionStart', function() {
    gsap.to(gear, 2.8, {
        rotation: '-=60', 
        ease: Power2.easeOut
    })
})

let gear1 = document.querySelector('.slider-gear1')

swiperText.on('slideNextTransitionStart', function() {
    gsap.to(gear1, 2.8, {
        rotation: '-=120', 
        ease: Power2.easeOut
    })
})

swiperText.on('slidePrevTransitionStart', function() {
    gsap.to(gear1, 2.8, {
        rotation: '+=120', 
        ease: Power2.easeOut
    })
})

// slide change

let curnum = document.querySelector('.slider-pagination-count .current'),
    pagcur = document.querySelector('.slider-pagination-current__num')

    swiperText.on('slideChange', function() {
        let ind = swiperText.realIndex + 1
        console.log(ind)
        gsap.to(curnum, .2, {
            force3D: true,
            y: -10,
            opacity: 0,
            ease: Power2.easeOut,
        onComplete: function() {
            gsap.to(curnum, .1, {
                force3D: true,
                y: 10, 
            
        })
        curnum.innerHTML = `0${ind}`
        pagcur.innerHTML = `0${ind}`
        }
        })
        gsap.to(curnum, .2, { 
            force3D: true,
            y: 0,
            opacity: 1,
            ease: Power2.easeOut,
            delay: .3 
    })

} )

})
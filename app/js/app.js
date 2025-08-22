import { Swiper } from "swiper";
import { Parallax } from "swiper/modules";
import { Mousewheel } from "swiper/modules";
import { Controller } from "swiper/modules";
Swiper.use([ Parallax, Mousewheel ])
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
	}
})

   swiperIMG.controller.control = swiperText;

})

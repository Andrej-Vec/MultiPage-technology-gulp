
import "./popup.js";
import './hamburger-menu.js';
import './drop-down-menu.js';
import './rating.js';
import './spollers.js';


const slide = new Swiper('.attempt', {
	pagination: { //навигация: булеты, текущее положение
		el: '.swiper-pagination',
		clickable: true, //

	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	loop: true,
});


if (document.querySelector('.info-product__slider_mini')) {
	const slideProductMini = new Swiper('.info-product__slider_mini', {
		/* pagination: { //навигация: булеты, текущее положение
			el: '.swiper-pagination',
			clickable: true, //

		}, */

		slidesPerView: 3,


		breakpoints: {
			0: {
				direction: 'vertical',
				spaceBetween: 0,
				//slidesPerView: 2,
			},
			478: {
				direction: 'horizontal',
				//slidesPerView: 3,
				spaceBetween: 45,
			}
		}

		//loop: true,
	});

	const slideProduct = new Swiper('.info-product__slider', {
		/* pagination: { //навигация: булеты, текущее положение
			el: '.swiper-pagination',
			clickable: true, //

		}, */
		slidesPerView: 1,
		//loop: true,
		thumbs: {
			swiper: slideProductMini,
		},
	});
}


if (document.querySelector('.slider-product-mini')) {

	const slideProductMini = new Swiper('.slider-product-mini', {
		/* pagination: { //навигация: булеты, текущее положение
			el: '.swiper-pagination',
			clickable: true, //

		}, */

		slidesPerView: 3,
		spaceBetween: 30,

		loop: true,
	});

	const slideProduct = new Swiper('.slider-product', {
		/* pagination: { //навигация: булеты, текущее положение
			el: '.swiper-pagination',
			clickable: true, //

		}, */
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		loop: true,
		thumbs: {
			swiper: slideProductMini,
		},
	});

}



const markCardsBestseller = document.querySelectorAll('.mark-card__bestseller');

markCardsBestseller.forEach(item => {
	if (!item.previousElementSibling.classList.contains('mark-card__new')) {
		item.classList.add('exist');
	}
}); 






const rangeslider = document.getElementById('range-slider');

if (rangeslider) {
	noUiSlider.create(rangeslider, {
		start: [200, 5000],
		connect: true,
		step: 1,
		range: {
			'min': 200,
			'max': 5000,
		}
	});

	const input1 = document.getElementById('range-slider_1');
	const input2 = document.getElementById('range-slider_2');
	const inputs = [input1, input2];



	rangeslider.noUiSlider.on('update', (values, handle) => {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		rangeslider.noUiSlider.set(arr);
	}

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value)
		})
	})
};

const tabs = document.querySelectorAll('.tabs__item');
tabs.forEach((item, index) => {
	item.addEventListener('click', () => {
		//filterTabs();
		removeTabs(tabs, 'tabs-active');
		item.classList.add('tabs-active');
		contentTabs();
	})
});


function removeTabs(tabs, namaClass) {
	tabs.forEach(item => {
		//item.classList.contains()

		if (item.classList.contains(namaClass)) {
			item.classList.remove(namaClass);
		}

	})
}


function contentTabs() {
	const contentTabs = document.querySelectorAll('.tabs__body');
	
	removeTabs(contentTabs, 'tabs-active');
	for (let i = 0; i < tabs.length; i++) {
		if (tabs[i].classList.contains('tabs-active')) {
			contentTabs[i].classList.add('tabs-active');
		}
	}
}


const search = document.querySelector('.search-header__button');
search.addEventListener('click', (e) => {
	search.classList.toggle('search-active');
	search.classList.toggle('_icon-search');
	document.querySelector('.serch-input').classList.toggle('active-search');
});



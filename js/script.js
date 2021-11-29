// Webp converter
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
	else{
		document.querySelector('body').classList.add('no-webp');
	}
});
// /Webp converter

$(document).ready(function() {
	// Burger menu
	$('.icon-menu').click(function(event) {
		$('.icon-menu,.menu__body').toggleClass('_active');
		$('body').toggleClass('_lock');
	});
	// /Burger menu

	// Scroll to section
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset;
		if(blockId == "#header"){
			blockOffset = 0;
		}
		else {
			blockOffset = $(blockId).offset().top;
		}

		$(".menu a").removeClass("_active");
		$this.addClass("_active");

		if($("#nav").hasClass("_active")) {
			$("#nav_toggle").toggleClass("_active");
			$("#nav").toggleClass("_active");
		}

		$('body').removeClass("_lock");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});
	// /Scroll to section.

	// Slider 
	$('.products__content').slick({
		adaptiveHeight: true,
		speed: 700,
		easing: 'ease',
		infinite: false,
		slidesToShow: 2,
		rows: 2,
		appendArrows: $('#products__container'),
		responsive: [
	        {
	          breakpoint: 768,
	          settings: {
	            rows: 2,
	            slidesToShow: 1
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	          	rows: 2,
	            slidesToShow: 1
	          }
	        },
	      ]

	});
	$('.combo__content').slick({
		adaptiveHeight: true,
		speed: 700,
		easing: 'ease',
		infinite: false,
		slidesToShow: 3,
		appendArrows: $('#combo__container'),
		responsive: [
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 2
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1
	          }
	        },
	      ]
	});
	// /Slider
});

// Responsive
$(window).resize(function(event) {
	adaptive_function();
});

function adaptive_header (w, h) {
	var menu = $('.menu');
	var introLogo = $('.intro__logo');
	if(w<767.98) {
		if(!introLogo.hasClass('done')){
			introLogo.addClass('done').prependTo(menu);
		}
		
	}
	else {
		if(introLogo.hasClass('done')){
			introLogo.removeClass('done').appendTo($('.intro__column--1'));
		}
	}
}

function adaptive_function () {
	var w=$(window).outerWidth();
	var h=$(window).outerHeight();
	adaptive_header(w, h);
}

adaptive_function();
// /Responsive

// Tabs
const tabsBtn = document.querySelectorAll(".tabs__item");
const tabsItems = document.querySelectorAll(".giftset__item")

tabsBtn.forEach(function(item) {
	onTabClick(item);
});

function onTabClick (item) {
	item.addEventListener("click", function() {
		event.preventDefault();
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("href");
		let currentTab = document.querySelector(tabId);

		if(!currentBtn.classList.contains('_active')) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('_active');
			});

			tabsItems.forEach(function(item) {
				item.classList.remove('_active');
			});

			currentBtn.classList.add('_active');
			currentTab.classList.add('_active');
		}
	});
}

document.querySelector('.tabs__item:nth-child(1)').click();
// /Tabs
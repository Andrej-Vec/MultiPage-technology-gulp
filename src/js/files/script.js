let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (let i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        console.log(thisLink, thisArrow);

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}


const menuLinks = document.querySelectorAll('[data-goto]');
console.log(menuLinks);


const iconMenu = document.querySelector('.header__hamburger-menu');
if (iconMenu) {
    const menu = document.querySelector('.menu-header-body');
    iconMenu.addEventListener('click', () => {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
    })
}




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


const popapLinks = document.querySelectorAll('.popup-link');

if (popapLinks.length > 0) {
    for (let i = 0; i < popapLinks.length; i++) {
        const popapLink = popapLinks[i];
        popapLink.addEventListener('click', e => {
            const popupName = popapLink.getAttribute('href').replace('#', '');
            const currentPopap = document.getElementById(popupName);
            popupOpen(currentPopap);
            e.preventDefault();
        })
    }

}
//+



const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', e => {
            popupClose(el.closest('.popup'));
            console.log(el.closest('.popup'))
            e.preventDefault();
        })
    }
}


function popupOpen(currentPopap) {
    if (currentPopap) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive);
        }
        document.body.style.overflow = 'hidden';
    }

    currentPopap.classList.add('open');
    currentPopap.addEventListener('click', e => {
        if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
        }
    })
}

function popupClose(popupActive) {
    popupActive.classList.remove('open');
    document.body.style.overflow = 'visible';
}




//+
document.addEventListener('keydown', (e) => {
    if (e.which === 27) {
        if (document.querySelector('.popup.open')) {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);
        }

    }
})


/*
function bodyLock() {
	const lockPaddingValue = window.innerHTML - document.querySelector('.wrapper').offsetWidth + 'px';
} */
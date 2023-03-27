const hamburgerMenuBtn = document.querySelector('.banner__hamburger');
const bannerMenuMobile = document.querySelector('.banner__menu-mobile');

const handleOnClick = () => {
    hamburgerMenuBtn.classList.toggle('banner__hamburger--close');
    bannerMenuMobile.classList.toggle('banner__menu-mobile--show');

    if(hamburgerMenuBtn.classList.contains('banner__hamburger--close')) {
        hamburgerMenuBtn.src = "./assets/icon-close.svg";
    }
    else {
        hamburgerMenuBtn.src = "./assets/icon-hamburger.svg";
    }    
}

hamburgerMenuBtn.addEventListener('click', handleOnClick);
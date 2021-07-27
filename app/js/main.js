document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
  });


  //! tab-focus only

  document.body.addEventListener('mousedown', function () {
    document.body.classList.add('using-mouse');
  });

  document.body.addEventListener('keydown', function (e) {
    if (e.code === 'Tab') {
      document.body.classList.remove('using-mouse');
    }
  });

  //! form

  // const inputs = document.querySelectorAll('.form__input');

  // inputs.forEach(input => {
  //   input.addEventListener('focus', () => {
  //     input.classList.add('focused');
  //   });
  //   input.addEventListener('blur', () => {
  //     if (input.value.trim() === '') {
  //       input.classList.remove('focused');
  //       input.setAttribute('value', '');
  //       input.value.trim();
  //     }
  //   });

  // });

  //! menu

  //# wheel listener

  // const mediaQuery = window.matchMedia('(max-width: 930px)');
  // const header = document.querySelector('.header__menu');
  // const defaultOffset = 300;
  // const scrollPosition = () => document.documentElement.scrollTop || document.body.scrollTop;
  // const contain = (className) => header.classList.contains(className);
  // let lastScroll = 0;

  // window.addEventListener('scroll', () => {

  //   if ((scrollPosition() > lastScroll)) {
  //     if ((scrollPosition() > (header.clientHeight + defaultOffset))) {
  //       if (!contain('active')) {
  //         header.classList.add('active', 'active-show');
  //       }
  //       if (contain('active') && contain('active-hide')) {
  //         header.classList.remove('active-hide');
  //         header.classList.add('active-show');
  //       }
  //     }
  //   }
  //   if ((scrollPosition() < lastScroll)) {
  //     if (!burger.classList.contains('active') && contain('active-show') && !contain('active-hide')) {
  //       header.classList.remove('active-show');
  //       header.classList.add('active-hide');
  //     }
  //     if (scrollPosition() < (header.clientHeight + defaultOffset)) {
  //       if (!burger.classList.contains('active')) {
  //         header.classList.remove('active', 'active-hide');
  //       }
  //     }
  //   }

  //   lastScroll = scrollPosition();

  // });

  //# scrollspy

  // const links = document.querySelectorAll('.menu__header-link');
  // const sections = document.querySelectorAll('.scrollspy');
  // const dash = document.querySelector('.menu__dash');


  // const scrollspy = () => {
  //   sections.forEach((section) => {
  //     const sectionYPosition = section.offsetTop;

  //     if (scrollPosition() > sectionYPosition - 300) {
  //       links.forEach((link) => {
  //         if (link.dataset.target === section.id) {
  //           dash.style.left = `${link.offsetLeft}px`;
  //           dash.style.width = `${link.offsetWidth}px`;
  //           if ((link.dataset.target === section.id) && mediaQuery.matches) {
  //             dash.style.top = `${link.offsetTop + link.offsetHeight}px`;
  //           } else {
  //             dash.style.top = '';
  //           }
  //         }

  //       });
  //     }
  //   });
  // };
  // scrollspy();
  // функция-обработчик нескольких событий
  // function addListenerMulti(el, s, fn) {
  //   s.split(' ').forEach(e => el.addEventListener(e, fn));
  // }
  // addListenerMulti(window, 'scroll load resize', () => scrollspy());

  //# scrollTo

  // const delCalss = () => {
  //   header.classList.remove('active', 'active-hide', 'active-show');
  //   header.removeEventListener('transitionend', delCalss, false);
  // };

  // links.forEach((link) => {
  //   link.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     sections.forEach((section) => {
  //       if (link.dataset.target === section.id) {
  //         section.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         });
  //       }
  //       if ((link.dataset.target === 'home') && (!mediaQuery.matches)) {
  //         header.classList.add('active-hide');
  //         header.addEventListener('transitionend', delCalss, false);
  //       } else {
  //         header.classList.add('active');
  //         // header.classList.remove('active');
  //       }

  //     });
  //   });
  // });

  //# burger

  const burger = document.querySelector('.burger');
  const main = document.querySelector('.main');
  const menu = document.querySelector('.header__menu');
  const german = document.querySelector('.header__img');
  let closed = false;


  const addActive = (arr) => {
    arr.forEach(el => el.classList.add('active'));
  };
  const removeActive = (arr) => {
    arr.forEach(el => el.classList.remove('active'));
  };


  burger.addEventListener('click', () => {
    if (closed == true) {
      // document.addEventListener('mousemove', parallax);
      removeActive([burger, main, german, menu]); //строку js не поймет
      closed = false;
    } else {
      // document.removeEventListener('mousemove', parallax);
      addActive([burger, main, german, menu]);
      closed = true;
    }
  });
  console.log(document.documentElement.clientWidth);

  //# swiper

  // const swiper = new Swiper('.main__slider', {
  //   // Optional parameters
  //   // parallax: true,
  //   direction: 'horizontal',
  //   loop: true,
  //   // If we need pagination
  //   // pagination: {
  //   //   el: '.swiper-pagination',
  //   // },
  //   // autoplay: {
  //   //   delay: 4000,
  //   //   disableOnInteraction: false,
  //   //   pauseOnMouseEnter: true,
  //   // },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });

  // const swiper2 = new Swiper('.header__subtitle', {
  //   // parallax: true,
  //   direction: 'vertical',
  //   loop: true,
  // });

  // const parallax = (event) => {
  //   let layers = this.querySelectorAll('[data-speed]');
  //   for (let layer of layers) {
  //     // let layerSpeed = layer.dataset.speed; то же что и...
  //     let layerSpeed = layer.getAttribute('data-speed');
  //     if (layer.classList.contains('header__img') && !layer.classList.contains('active')) {
  //       layer.style.transform = `translate(-${event.clientX / layerSpeed}px, -${event.clientY / layerSpeed}px)`;
  //     }
  //     if (layer.classList.contains('main__parallax-bg') && !main.classList.contains('active')) {
  //       layer.style.transform = `translate(-${event.clientX / layerSpeed}px, -${event.clientY / layerSpeed}px)`;
  //     }




  //   }
  // };
  // const parallaxSection = document.querySelector('.header');
  // parallaxSection.addEventListener('mousemove', parallax);

  //! play

  // const playButton = document.querySelector('.play');
  // const video = document.querySelector('.about__video');
  // let play = false;

  // const playVideo = () => {
  //   if (play === false) {
  //     playButton.classList.add('paused');
  //     playButton.parentElement.classList.add('played');
  //     video.play();
  //     play = true;
  //   } else {
  //     playButton.classList.remove('paused');
  //     playButton.parentElement.classList.remove('played');
  //     video.pause();
  //     play = false;
  //   }
  // };
  // playButton.addEventListener('click', playVideo);

  // video.addEventListener('ended', () => {
  //   video.load();
  //   playVideo();
  // });

  //! drag

  const tape = document.querySelector('.film__tape-wrapper');
  tape.onmousedown = () => {
    let pageX = 0;
    tape.style.cursor = 'grabbing';
    document.onmousemove = e => {
      if (pageX !== 0) {
        tape.scrollLeft = tape.scrollLeft + (pageX - e.pageX);
      }
      pageX = e.pageX;
    };

    // заканчиваем выполнение событий
    tape.onmouseup = () => {
      document.onmousemove = null;
      tape.onmouseup = null;
      tape.style.cursor = 'grab';
    };

    // отменяем браузерный drag
    tape.ondragstart = () => {
      return false;
    };
  };


});

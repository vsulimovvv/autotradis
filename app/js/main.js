window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');
  $('.form__input--contract').mask('999 - 99 - 99 - 99 - 99 - 99');

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.tabs__content');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 19,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
        },
      });
    });
  })();

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      body.classList.toggle('no-scroll');
      menuBtn.classList.toggle('active');
    });
  })();

    //* Change Background Header
    function scrollHeader() {
      const nav = document.querySelector('header');
  
      if (this.scrollY >= 10) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);
  
    // ! Change
    (function changeBgHeader() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 10) {
        header.classList.add('scroll-header');
      }
    })();

  // // * ===== Modal
  // (function modals() {
  //   function bindModal(openBtn, modal, close) {
  //     const openBtnEl = document.querySelectorAll(openBtn);
  //     const modalEl = document.querySelector(modal);
  //     const closeEl = document.querySelectorAll(close);
  //     const body = document.querySelector('body');

  //     if (modalEl) {
  //       openBtnEl.forEach((el) => {
  //         el.addEventListener('click', (e) => {
  //           if (e.target) {
  //             e.preventDefault();
  //           }

  //           modalEl.classList.add('active');
  //           body.classList.add('no-scroll');
  //         });
  //       });

  //       closeEl.forEach((btn) => {
  //         btn.addEventListener('click', (e) => {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         });
  //       });

  //       modalEl.addEventListener('click', (e) => {
  //         if (e.target === modalEl) {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         }
  //       });
  //     }
  //   }
  //   bindModal('.download__btn', '.popup--download', '.popup__close');
  //   bindModal('.header__favorite', '.popup--card-object', '.popup__close');
  //   bindModal('.get-presentation', '.popup--get-info', '.popup__close');
  //   bindModal('.presentation__download', '.popup--get-info', '.popup__close');
  // })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    if (header) {
      hideTabContent();
      showTabContent();

      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }

      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }

      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs('.tabs', '.tabs__btn', '.tabs__content', 'tabs__btn--active');
});

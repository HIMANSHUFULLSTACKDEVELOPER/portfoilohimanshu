

const status = document.getElementById('status');
const fill = document.getElementById('progress-bar-fill');
const loader = document.getElementById('loader');
const main = document.getElementById('main-content');

let progress = 0;
const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
    loader.classList.add('hidden');
    main.style.display = 'block';
    document.body.style.overflow = 'auto';
  } else {
    progress++;
    status.textContent = `Loading... ${progress}%`;
    fill.style.width = `${progress}%`;
  }
}, 30);











(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });
// project
 // Improved filter functionality for projects
 document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');
  
  // Add active animation for cards when page loads
  cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
  });
  
  filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          // Remove active class from all buttons
          filterBtns.forEach(b => b.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          const filter = this.getAttribute('data-filter');
          
          // Show all cards if 'All' is selected
          if (filter === 'All') {
              cards.forEach((card, index) => {
                  card.style.display = 'block';
                  // Reset animation with sequential delays
                  card.style.animation = 'none';
                  setTimeout(() => {
                      card.style.animation = '';
                      card.style.animationDelay = `${index * 0.1}s`;
                  }, 10);
              });
              return;
          }
          
          // Filter cards based on tag content
          let visibleCount = 0;
          cards.forEach(card => {
              const tag = card.querySelector('.card-tag').textContent.trim();
              
              // Apply specific filtering logic based on filter value
              let shouldDisplay = false;
              
              if (filter === 'HTML' && tag === 'HTML') {
                  shouldDisplay = true;
              } else if (filter === 'CSS' && tag === 'CSS') {
                  shouldDisplay = true;
              } else if (filter === 'JavaScript' && tag === 'JavaScript') {
                  shouldDisplay = true;
              } else if (filter === 'Live Project' && tag === 'Live Project') {
                  shouldDisplay = true;
              } else if (filter === 'HTML / CSS' && tag === 'HTML / CSS') {
                  shouldDisplay = true;
              } else if (filter === 'Testing' && tag === 'Testing') {
                  shouldDisplay = true;
              }
              
              if (shouldDisplay) {
                  card.style.display = 'block';
                  // Reset animation with sequential delays for visible cards
                  card.style.animation = 'none';
                  setTimeout(() => {
                      card.style.animation = '';
                      card.style.animationDelay = `${visibleCount * 0.1}s`;
                  }, 10);
                  visibleCount++;
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });
  
  // Enhanced hover effect for images
  cards.forEach(card => {
      const image = card.querySelector('.card-image');
      
      // We'll use CSS for the hover effect instead of JavaScript
      // The hover effects are now defined in the CSS using .card-image:hover
  });
});

// 
  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


// skills// JS to pause scrolling when hovered
const scrollingText = document.getElementById('scrollingText');

scrollingText.addEventListener('mouseover', () => {
  scrollingText.style.animationPlayState = 'paused';
});

scrollingText.addEventListener('mouseout', () => {
  scrollingText.style.animationPlayState = 'running';
});

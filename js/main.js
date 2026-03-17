/**
 * Hellen Creations — main.js
 * Handles: sticky nav, counter animation, owl carousel init,
 *          donation amount buttons, smooth scroll
 */

(function ($) {
  'use strict';

  /* ---- Sticky Nav ---- */
  var $nav    = $('.main-nav');
  var $topBar = $('.top-bar');
  var topBarH = $topBar.length ? $topBar.outerHeight() : 0;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > topBarH) {
      $nav.addClass('sticky');
      $('body').css('padding-top', $nav.outerHeight());
    } else {
      $nav.removeClass('sticky');
      $('body').css('padding-top', 0);
    }
  });

  /* ---- Hero Slider (Owl Carousel) ---- */
  if ($('.hero-owl').length) {
    $('.hero-owl').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      smartSpeed: 800,
      dots: true,
      nav: false
    });
  }

  /* ---- Featured Products Carousel ---- */
  if ($('.products-owl').length) {
    $('.products-owl').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 600,
      dots: true,
      nav: false,
      responsive: {
        0:   { items: 1 },
        576: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  /* ---- Counter Animation (IntersectionObserver) ---- */
  function animateCounter($el) {
    var target = parseInt($el.data('count'), 10);
    var duration = 1800;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      $el.text(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else $el.text(target);
    }
    requestAnimationFrame(step);
  }

  var countersStarted = false;

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          $('.counter-number[data-count]').each(function () {
            animateCounter($(this));
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    var $counterArea = $('.counter_area');
    if ($counterArea.length) observer.observe($counterArea[0]);
  } else {
    // Fallback for older browsers
    $(window).on('scroll.counter', function () {
      if (countersStarted) return;
      var $ca = $('.counter_area');
      if (!$ca.length) return;
      var top = $ca.offset().top;
      if ($(window).scrollTop() + $(window).height() > top + 100) {
        countersStarted = true;
        $('.counter-number[data-count]').each(function () {
          animateCounter($(this));
        });
        $(window).off('scroll.counter');
      }
    });
  }

  /* ---- Donation Amount Buttons ---- */
  $(document).on('click', '.donation-amt-btn', function () {
    $('.donation-amt-btn').removeClass('active');
    $(this).addClass('active');
  });

  /* ---- Smooth scroll for in-page anchors ---- */
  $(document).on('click', 'a[href^="#"]:not([href="#"])', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600);
    }
  });

}(jQuery));

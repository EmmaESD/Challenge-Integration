//Animation-delay
ScrollReveal().reveal(".animation-delay-500 ", { delay: 500 });
ScrollReveal().reveal(".animation-delay-500", { reset: true });
ScrollReveal().reveal(".animation-delay-700 ", { delay: 700 });
ScrollReveal().reveal(".animation-delay-700", { reset: true });
ScrollReveal().reveal(".animation-delay-900 ", { delay: 900 });
ScrollReveal().reveal(".animation-delay-900", { reset: true });
ScrollReveal().reveal(".animation-delay-1000", { delay: 1000 });
ScrollReveal().reveal(".animation-delay-1000", { reset: true });

// Animation-Left
ScrollReveal().reveal(".animation-left", {
  duration: 1600,
  easing: "ease-in-out",
  scale: 1.0,
  distance: "40%",
  origin: "left",
});
ScrollReveal().reveal(".animation-left", { reset: true });

// Animation-Right
ScrollReveal().reveal(".animation-right", {
  duration: 2000,
  easing: "ease-in-out",
  scale: 1.0,
  distance: "40%",
  origin: "right",
});
ScrollReveal().reveal(".animation-right", { reset: true });

// Animation-Up
ScrollReveal().reveal(".animation-up", {
  duration: 1600,
  easing: "ease-in-out",
  scale: 1.0,
  distance: "40%",
  origin: "up",
});
ScrollReveal().reveal(".animation-up", { reset: true });

// Animation-bottom
ScrollReveal().reveal(".animation-bottom", {
  duration: 1600,
  easing: "ease-in-out",
  scale: 1.0,
  distance: "40%",
  origin: "bottom",
});
ScrollReveal().reveal(".animation-bottom", { reset: true });

// Caroussel Animation
$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    adaptiveWidth: true,
    arrows: false,
    centerMode: true,
  });
});

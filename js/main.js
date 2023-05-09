// hamburger menu
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');



hamburger.addEventListener('click', () => {
    sidebar.classList.toggle("sidebar--open");
    hamburger.classList.toggle("menu-close");
});


$('.services-wrapper').slick({
    dots: true,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint:900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


// scroll animation
ScrollReveal({
    reset:true,
    distance:'60px',
    duration:2500,
    delay:400
});

// targeting elements
ScrollReveal().reveal('#hero',{delay: 1000, origin: 'left'})

  




  




  









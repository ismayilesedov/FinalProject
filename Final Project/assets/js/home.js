$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
 
      slideSpeed : 2300,
      paginationSpeed : 2300,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      loop:true,
      itemsTablet: false,
      itemsMobile : false,
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true

  });
 
});

// $('.product_cards').owlCarousel({
//   loop:true,
//   margin:10,
//   responsiveClass:true,
//   responsive:{
//       0:{
//           items:1,
//           nav:true
//       },
//       600:{
//           items:3,
//           nav:false
//       },
//       1000:{
//           items:5,
//           nav:true,
//           loop:false
//       }
//   }
// })

// $('.product_cards').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });

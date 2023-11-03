// poplar Slider ========

$('.popular_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    centerMode:true,
  });
// Travel Counter =========
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// Menu Fixed =======
let main_menu = document.querySelector('.main_menu')

console.log(main_menu)

window.addEventListener('scroll', ()=>{
  let scrolling = this.scrollY

  if(scrolling > 100){
    // console.log(scrolling)
    main_menu.classList.add('fixed_menu')
  }
  else{
    main_menu.classList.remove('fixed_menu')
  }
})



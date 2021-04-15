$(function(){
    $('.slider-doc').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        speed: 3000,
      });  
});
$('.open-burger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('burger-active'); //бургер крутится
  $('openMenu').css('display', 'inline-block');// тут бля не пойму как его сделать нужно что б при нажатии кнопки паралельно бургеру отобразилась скрытая менюха
  $(this).toggleClass('openMneu-active')
  
  
});


function scrollHandler() {
  if ($(window).scrollTop() >= $('.about').position().top) {
    $('.navbar .menu-right button').css('color', '#4a4a4a');

    $('.bar').each(function () {
      let percent = $(this).find('.percentage').text();
      $(this).find('.inner-bar').animate({ 'opacity': '1', 'width': `${percent}` }, 800);
    });
  } else {
    $('.menu-right button').css('color', 'white');
  }

  $('section').each(function () {
    if ($(window).scrollTop() >= $(this).position().top) {
      $(this).find('.vertical-center').animate({ 'opacity': '1', 'top': '0px' }, 800);
    }
  });
}

$(window).on('scroll', scrollHandler);
scrollHandler();

$('#about-btn').on('click', function () {
  let setScrollTop = $('.about').offset().top;
  $('html, body').animate({ scrollTop: setScrollTop }, 1000);
});
$('#contact-btn').on('click', function () {
  let setScrollTop = $('.contact').offset().top;
  $('html, body').animate({ scrollTop: setScrollTop }, 1000);
});
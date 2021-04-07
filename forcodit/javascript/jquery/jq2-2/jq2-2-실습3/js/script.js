function scrollHandler() {
  let bottom = $(window).scrollTop() + $(window).height();
  // playlist의 꼭대기의 위치 : palylist.position().top
  // playlist의 높이 : playlist.outerHeight
  $('.playlist').each(function () {
    let palylist = $(this);
    let palylistHalf = palylist.position().top + palylist.outerHeight() / 2;

    if (palylistHalf < bottom) {
      palylist.animate({ 'opacity': '1' }, 1500);
    }
  });

  if (bottom == $(document).height()) {
    $('.to-top-btn').fadeIn();
  } else {
    $('.to-top-btn').fadeOut();
  }
}

$(window).on('scroll', scrollHandler);

scrollHandler();

$(".to-top-btn").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 1000)
});
$('#even-btn').on('click', checkEven);
$('#odd-btn').on('click', checkOdd);

function checkEven() {
  $('.card').removeClass('selected');
  $('.card').each(function () {
    let num = $(this).text()
    if (num % 2 == 0) {
      $(this).addClass('selected');
    }
  });
}

function checkOdd() {
  $('.card').removeClass('selected');
  $('.card').each(function () {
    let num = $(this).text()
    if (num % 2 != 0) {
      $(this).addClass('selected');
    }
  });
}
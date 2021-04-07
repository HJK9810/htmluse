// onclick event
$('#menu a').on('click', selectMenu);

// photo mouse event
$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLevePhoto);

// 키보드 이벤트
$(document).on('keydown', selectMenu);

function selectMenu(event) {
  let targetId = '';

  if (event.type === 'click') {
    targetId = event.currentTarget.id;
  } else if (event.type === 'keydown') {
    switch (event.key) {
      case '1':
        targetId = 'home';
        break;
      case '2':
        targetId = 'seoul';
        break;
      case '3':
        targetId = 'tokyo';
        break;
      case '4':
        targetId = 'paris';
        break;
      default:
        break;
    }
  }

  $('#photo').hide();
  $('#photo').attr('src', 'images/' + targetId + '.png');
  $('#photo').fadeIn(1000);
  $('#menu a').css('font-weight', 'normal');
  $('#' + targetId).css('font-weight', 'bold');
}

// 마우스 이벤트 핸들링
function mouseEnterPhoto() {
  $('#photo').css('box-shadow', '5px 10px');
}
function mouseLevePhoto() {
  $('#photo').css('box-shadow', 'none');
}
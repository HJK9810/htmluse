$('#send').on('click', sendMessage);

function sendMessage() {
  let message = $('#new-message').val();
  if(message) {
    $('.chatbox ').append(`<div class="my-bubble bubble">${message}</div>`);
  }
  $('#new-message').val('');
}

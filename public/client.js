(function main() {

function onButtonClick(event) {
  event.preventDefault();
  $('#file-input').trigger('click');
}

function displayFileSize() {
  var file = document.getElementById('file-input').files[0];
  if (file) {
    document.getElementById('file-name').innerHTML = file.name;
    document.getElementById('file-size').innerHTML = String(file.size) + ' bytes';
  }
}

function onSubmit() {
  var file = document.getElementById('file-input').files[0];
  if (!file) return;

  $('#upload-button').hide();
  $('#submit-button').hide();

  $('#file-size').show();
  $('#reset-button').show();
}


function reset() {
  document.getElementById('file-size').innerHTML = '';

  $('#upload-button').show();
  $('#submit-button').show();

  $('#file-size').hide();
  $('#reset-button').hide();
}

$('#file-size').hide();
$('#upload-button').on('click', onButtonClick);
$('#file-input').on('change', displayFileSize);
$('#submit-button').on('click', onSubmit);
$('#reset-button').hide().on('click', reset);

})();

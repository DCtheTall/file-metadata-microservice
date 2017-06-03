(function main() {

function onButtonClick(event) {
  event.preventDefault();
  $('#file-input').trigger('click');
}

function onInputClick(event) {
  const file = event.target.files[0];
  fr.readAsDataURL(file);
}

$('#upload-button').on('click', event => onButtonClick(event));
$('#file-input').on('change', event => setTimeout(() => onInputClick(fr, event), 500));

})();

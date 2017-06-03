(function main() {

var fileUrl;

function onButtonClick(event) {
  event.preventDefault();
  $('#file-input').trigger('click');
}

function displayFileName() {
  var file = document.getElementById('file-input').files[0];
  if (file) {
    var fr = new FileReader();
    fr.readAsDataURL(file);
    fr.addEventListener('load', function() {
      fileUrl = this.result;
      document.getElementById('file-name').innerHTML = file.name;
    });
  }
}

function onSubmit() {
  var file = document.getElementById('file-input').files[0];
  if (file) {
    document.getElementById('file-name').innerHTML = file.name;
    $.post('/api/file/size', { fileUrl: fileUrl })
     .success((data) => {
       window.location.href = `/api/file/size?name=${data.filename}`;
     })
     .error(err => console.log(err));
  }
}

$('#upload-button').on('click', onButtonClick);
$('#file-input').on('change', displayFileName);
$('#submit-button').on('click', onSubmit);

})();

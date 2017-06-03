(function main() {

var fileUrl;

function onButtonClick(event) {
  document.getElementById('error').innerHTML = '';
  event.preventDefault();
  $('#file-input').trigger('click');
}

function displayFileName() {
  var file = document.getElementById('file-input').files[0];
  if (file) {
    if (file.size > 1000000) {
      document.getElementById('error').innerHTML = 'File size too big.';
      return;
    }
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
     .error((err) => {
       document.getElementById('error').innerHTML = 'Oops, something went wrong.';
       console.log(err);
     });
  }
}

$('#upload-button').on('click', onButtonClick);
$('#file-input').on('change', displayFileName);
$('#submit-button').on('click', onSubmit);

})();

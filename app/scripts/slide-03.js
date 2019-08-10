/* global cegedim*/
$(function() {
  var btnInfo = document.getElementById('btn-info');
  var popupInfo = document.getElementById('popup-info');

  btnInfo.addEventListener('click', function() {
    popupInfo.classList.add('active');
  })

});

/* global cegedim*/
$(function() {
  var content = document.getElementById('content');
  var women1 = document.getElementById('women-1');
  var women2 = document.getElementById('women-2');

  content.addEventListener('click', function() {
    if (women1.classList.contains('active')) {
      women1.classList.remove('active');
      women2.classList.add('active');
    }
  })
});

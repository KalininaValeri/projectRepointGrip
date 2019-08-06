/* global cegedim*/
$(function() {
  var trigger = document.getElementById('trigger');
  var content = document.getElementById('content');

  console.log(trigger);

  trigger.addEventListener('click', function() {
    if (content.classList.contains('day')) {
      content.classList.remove('day');
      content.classList.add('night');
      return false;
    }

    content.classList.remove('night');
    content.classList.add('day');
  })
});

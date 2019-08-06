/* global cegedim*/
$(function() {
  var btnLeft = document.getElementById('btn-left');
  var btnRight = document.getElementById('btn-right');
  var wrapper = document.getElementById('wrapper');

btnLeft.addEventListener('click', function() {
  if (wrapper.classList.contains('position-1')) {
    wrapper.classList.remove('position-1')
    wrapper.classList.add('position-3')
    return false;
  }
  if (wrapper.classList.contains('position-2')) {
    wrapper.classList.remove('position-2')
    wrapper.classList.add('position-1')
    return false;
  }
    wrapper.classList.remove('position-3')
    wrapper.classList.add('position-2')
})

btnRight.addEventListener('click', function() {
  if (wrapper.classList.contains('position-1')) {
    wrapper.classList.remove('position-1')
    wrapper.classList.add('position-2')
    return false;
  }
  if (wrapper.classList.contains('position-2')) {
    wrapper.classList.remove('position-2')
    wrapper.classList.add('position-3')
    return false;
  }
    wrapper.classList.remove('position-3')
    wrapper.classList.add('position-1')
})

});

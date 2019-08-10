/* global cegedim*/
$(function() {
  var btnLeft = document.getElementById('btn-left');
  var btnRight = document.getElementById('btn-right');
  var wrapper = document.getElementById('wrapper');

  btnLeft.addEventListener('click', function() {
    var arrSliderItem = document.getElementsByClassName('slider__item');
    var arrTriggerItem = document.getElementsByClassName('trigger__item');

    wrapper.classList.remove('right');
    wrapper.classList.add('left');

    for (var i=0; i<arrSliderItem.length; i++) {
      if (arrSliderItem[i].classList.contains('left')) {
        arrSliderItem[i].classList.remove('left');
        arrSliderItem[i].classList.add('right');
        arrTriggerItem[i].classList.remove('left');
        arrTriggerItem[i].classList.add('right');
      } else if (arrSliderItem[i].classList.contains('active')) {
        arrSliderItem[i].classList.remove('active');
        arrSliderItem[i].classList.add('left');
        arrTriggerItem[i].classList.remove('active');
        arrTriggerItem[i].classList.add('left');
      } else {
        arrSliderItem[i].classList.remove('right');
        arrSliderItem[i].classList.add('active');
        arrTriggerItem[i].classList.remove('right');
        arrTriggerItem[i].classList.add('active');
      }
    }
  })

  btnRight.addEventListener('click', function() {
    var arrSliderItem = document.getElementsByClassName('slider__item');
    var arrTriggerItem = document.getElementsByClassName('trigger__item');

    wrapper.classList.remove('left');
    wrapper.classList.add('right');

    for (var i=0; i<arrSliderItem.length; i++) {
      if (arrSliderItem[i].classList.contains('left')) {
        arrSliderItem[i].classList.remove('left');
        arrSliderItem[i].classList.add('active');
        arrTriggerItem[i].classList.remove('left');
        arrTriggerItem[i].classList.add('active');
      } else if (arrSliderItem[i].classList.contains('active')) {
        arrSliderItem[i].classList.remove('active');
        arrSliderItem[i].classList.add('right');
        arrTriggerItem[i].classList.remove('active');
        arrTriggerItem[i].classList.add('right');
      } else {
        arrSliderItem[i].classList.remove('right');
        arrSliderItem[i].classList.add('left');
        arrTriggerItem[i].classList.remove('right');
        arrTriggerItem[i].classList.add('left');
      }
    }
  });
})

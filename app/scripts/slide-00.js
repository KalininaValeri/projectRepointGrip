/* global cegedim*/
$(function() {
  var x0 = 0;

  var imgKaps = document.getElementById('imgKaps');
  var imgSteak = document.getElementById('imgSteak');
  var imgDrink = document.getElementById('imgDrink');

  var btnKaps = document.getElementById('btnKaps');
  var btnSteak = document.getElementById('btnSteak');
  var btnDrink = document.getElementById('btnDrink');

  document.addEventListener('touchstart',function (e) {x0 = e.touches["0"].screenX;})
  document.addEventListener('touchmove',function (e) {
    if (x0 <= e.touches["0"].screenX) {
      // your code by swipe
    }
  })

  var resetArrs = function() {
    var arrImgs = document.getElementsByClassName('pack');
    var arrSliderItems = document.getElementsByClassName('slider__item');

    for (var i=0; i<arrImgs.length; i++) {
      arrImgs[i].classList.remove('active');
      arrSliderItems[i].classList.remove('active');
    }
  }

  imgKaps.addEventListener('click', function() {
    if (imgKaps.classList.contains('active')) {
      cegedim.navigation.go('01_1', 'swipeleft')
    } else {
      resetArrs();
      imgKaps.classList.add('active');
      btnKaps.classList.add('active');
    }
  })

  imgSteak.addEventListener('click', function() {
    if (imgSteak.classList.contains('active')) {
      cegedim.navigation.go('07_2', 'swipeleft')
    } else {
      resetArrs();
      imgSteak.classList.add('active');
      btnSteak.classList.add('active');
    }
  })

  imgDrink.addEventListener('click', function() {
    if (imgDrink.classList.contains('active')) {
      cegedim.navigation.go('13_3', 'swipeleft')
    } else {
      resetArrs();
      imgDrink.classList.add('active');
      btnDrink.classList.add('active');
    }
  })
});

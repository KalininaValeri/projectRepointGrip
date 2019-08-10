// custom global script
var btnMenu = document.getElementById('btn--menu');
var modalMenu = document.getElementById('menu');

var arrLogos = document.getElementsByClassName('header__image');
var popupInstr = document.getElementById('popup-instr')

for (var j=0; j<arrLogos.length; j++) {
  arrLogos[j].addEventListener('click', function() {
    popupInstr.classList.add('active');
  })
}


btnMenu.addEventListener('click', function(){
    modalMenu.classList.toggle('active');
})

var removeLogoHeaderClassActive = function() {
  var arrImgHeader = document.getElementsByClassName('header__logo');
  for (var i = 0; i<arrImgHeader.length; i++) {
    arrImgHeader[i].classList.remove('active')
  }
}

if (
  cegedim.slide.ID === '01_1' ||
  cegedim.slide.ID === '02_1' ||
  cegedim.slide.ID === '03_1' ||
  cegedim.slide.ID === '04_1' ||
  cegedim.slide.ID === '05_1' ||
  cegedim.slide.ID === '06_1'
) {
  removeLogoHeaderClassActive()
  document.getElementsByClassName('header__logo--kaps')[0].classList.add('active');
}

if (
  cegedim.slide.ID === '07_2' ||
  cegedim.slide.ID === '08_2' ||
  cegedim.slide.ID === '09_2' ||
  cegedim.slide.ID === '10_2' ||
  cegedim.slide.ID === '11_2' ||
  cegedim.slide.ID === '12_2' ||
  cegedim.slide.ID === '13_2'
) {
  removeLogoHeaderClassActive()
  document.getElementsByClassName('header__logo--steak')[0].classList.add('active');
}

if (
  cegedim.slide.ID === '13_3' ||
  cegedim.slide.ID === '14_3' ||
  cegedim.slide.ID === '15_3' ||
  cegedim.slide.ID === '16_3' ||
  cegedim.slide.ID === '17_3'
) {
  removeLogoHeaderClassActive()
  document.getElementsByClassName('header__logo--drink')[0].classList.add('active');
}

// console.log('test');

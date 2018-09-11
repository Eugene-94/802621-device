
var writeUsModal = document.querySelector('.modal-write-us'); //доступ к окну
var writeUsButton = document.querySelector('.write-us-btn'); //доступ к открыывающей кнопке
var closeModal = document.querySelector('.write-us-close-modal'); //доступ к закрывающей кнопке

var writeUsForm = document.querySelector('.write-us-form'); //доступ к форме
var formItems = writeUsForm.querySelectorAll('.form-item'); //доступ к полям формы

writeUsButton.addEventListener('click', function(evt) { //открываем окно по клику
    evt.preventDefault();
    writeUsModal.classList.add('active-modal');
    closeModal.classList.add('active-modal');
});

closeModal.addEventListener('click', function(evt) { //закрываем окно по клику
    evt.preventDefault();
    writeUsModal.classList.remove('active-modal');
    closeModal.classList.remove('active-modal');
});

writeUsForm.addEventListener('submit', function(evt) { //валидация формы
    for (var i = 0; i < formItems.length; i++) {
        if (!formItems[i].value) {
            evt.preventDefault();
            formItems[i].classList.add('invalid');
            writeUsModal.classList.add('modal-error');
        } else {
            formItems[i].classList.remove('invalid');
            writeUsModal.classList.remove('modal-error');
        }
    }
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (writeUsModal.classList.contains('active-modal')) {
        writeUsModal.classList.remove('active-modal');
      }
    }
});

var openMap = document.querySelector('.map');
var mapModal = document.querySelector('.modal-map');
var closeMap = mapModal.querySelector('.close-modal');

openMap.addEventListener('click', function(evt) { //открываем окно по клику
    evt.preventDefault();
    mapModal.classList.add('active-modal');
    closeMap.classList.add('active-modal');
});

closeMap.addEventListener('click', function(evt) { //закрываем окно по клику
    evt.preventDefault();
    mapModal.classList.remove('active-modal');
    closeMap.classList.remove('active-modal');
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapModal.classList.contains('active-modal')) {
            mapModal.classList.remove('active-modal');
        }
    }
});

// Встраиваем карту при помощи API Яндекс

ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.686980, 37.529654],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });

        var myPlacemark = new ymaps.Placemark([55.686980, 37.529654], {
            // Хинт показывается при наведении мышкой на иконку метки.
            hintContent: 'Улица Строителей, 15',
            // Балун откроется при клике по метке.
            balloonContent: 'Улица Строителей, 15'
        });

        // После того как метка была создана, ее
        // можно добавить на карту.
        myMap.geoObjects.add(myPlacemark);
    };

// Оживляем слайдер
var buttons = document.querySelectorAll('.slide-toggle');
var slides =  document.querySelectorAll('.slides');

var buttonClickHandler = function (e) {
	var buttonActive = document.querySelector('.toggle-active');

	if (!e.target.classList.contains('toggle-active')) {
  	e.target.classList.add('toggle-active');
    buttonActive.classList.remove('toggle-active');

    for (var j = 0; j < slides.length; j++) {
        if (buttons[j].classList.contains('toggle-active')) {
            slides[j].classList.add('active');
        } else {
            slides[j].classList.remove('active');
        }
    }
  }
}

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', buttonClickHandler);
}

// Оживляем инфо блок

var selectors = document.querySelectorAll('.info-selector');
var infoBlocks = document.querySelectorAll('.info-items');
var infoSection = document.querySelector('.info');
var infoLabels = infoSection.querySelectorAll('label');

var changeInfo = function(e) {
    var activeLabel = infoSection.querySelector('.active-label');

    if (!e.target.classList.contains('active-label')) {
        e.target.classList.add('active-label');
        activeLabel.classList.remove('active-label');
    }

    for (var i = 0; i < infoBlocks.length; i++) {
        if (infoLabels[i].classList.contains('active-label')) {
            infoBlocks[i].classList.add('active-info');
        } else {
            infoBlocks[i].classList.remove('active-info');
        }
    }
}

for (var i = 0; i < infoLabels.length; i++) {
	infoLabels[i].addEventListener('click', changeInfo);
}

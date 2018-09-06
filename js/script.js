
var writeUsModal = document.querySelector('.modal-write-us'); //доступ к окну
var writeUsButton = document.querySelector('.write-us-btn'); //доступ к открыывающей кнопке
var closeModal = document.querySelector('.write-us-close-modal'); //доступ к закрывающей кнопке

var writeUsForm = document.querySelector('.write-us-form'); //доступ к форме и ее полям
var formItems = writeUsForm.querySelectorAll('.form-item');

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
        } else {
            formItems[i].classList.remove('invalid');
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

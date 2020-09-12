var imgBig = document.getElementById('my-slides__big-picture');
var btnPrev = document.getElementById('prev-btn'); 
var btnNext = document.getElementById('next-btn');
var album = document.querySelector('.album');
var galleryItem = document.querySelector('.galleryItem').content;
var imgSmall = document.getElementById('imgThumb_imgid');

var currentImageId = 0;// dataset.id   маленькой активной картинки
var imgAll = [
  "img/background-0.jfif", 
  "img/background-1.jfif",
  "img/background-2.jfif",
  "img/background-3.jfif",
  "img/background-4.jfif",
  "img/background-5.jfif",
  "img/background-6.jfif",
  "img/background-7.jfif"];

//создаем галарею  - картинки снизу  */
var renderItems = function () {
  let newItem; // объявим новый элемент
  let roulette = document.createDocumentFragment (); 
  /* // создаем рулетку зависимость галереи от  количества изображений. Добавление элементов в рулетку */
  for (let i = 0; i < imgAll.length; i++) {
      
      newItem = galleryItem.cloneNode(true);
      //newItem.querySelector('.imgThumb').classList.add('gThumb');
      newItem.querySelector('.imgThumb').classList.add('thumb' + i);
      newItem.querySelector('.imgThumb__img').dataset.id = i;
      newItem.querySelector('.imgThumb__img').src = imgAll[i];
      roulette.appendChild(newItem);
  }
  album.appendChild(roulette);
};
renderItems();

//Функция смены главной картинки при клике кнопки Next
var changeSlidesNext = function () {
  newId = currentImageId;
  if (newId < 7) {
    changeMainPicture(newId + 1);
  } else {
    changeMainPicture(0);
  }
};

//Функция смены главной картинки при клике кнопки Prev
var changeSlidesPrev = function () {
  newId = currentImageId;
  if (newId > 0) {
    changeMainPicture(newId - 1);
  } else {
    changeMainPicture(7);
  }
};
//Смена большой картинки при нажатии на маленькую. 
var galleryApp = function (evt) {
  id = evt.target.dataset.id; //определяем id у маленькой картинки
  changeMainPicture(id);//  используем полученный ID для смены большой картинки
};
//
var changeMainPicture = function(id) {
  imgBig.src = getImageSrc(id);
  console.log(currentImageId);
  return currentImageId = id; 
};

var getImageSrc = function(id) {
  return 'img/background-' + id +'.jfif'
};

//Функция увеличения картинки при клике на маленькую снизу
//через target определяем у картинки путь evt.target.src и присваиваем к большой 
var galleryApp = function (evt) {
  imgBig.src = evt.target.src; 
};

//window.addEventListener ('click', function (evt) {console.log(evt);})
album.addEventListener ('click', galleryApp);
imgBig.addEventListener ('click', changeSlidesNext);
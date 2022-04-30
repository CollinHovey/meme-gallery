var gallery = document.querySelector('main');

var imageUrls = [
  'https://i.ytimg.com/vi/sSpDnIJxyXM/maxresdefault.jpg',
  'https://i.ytimg.com/vi/P0ADL0_-Cag/maxresdefault.jpg',
  'https://www.bu.edu/files/2021/12/21-Memes-That-Got-Us-Through-2021.png'
];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    // console.log(imageElement);
    gallery.appendChild(imageElement);
  }
}

updateGallery();

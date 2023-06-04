console.log('JS OK') 

//Recupero gli elementi dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const gallery = document.querySelector('.gallery');
const thumbnails = document.querySelector('.thumbnails');

//Preparo un array con le immagini
const sources = ['img/01.avif' , 'img/02.avif' , 'img/03.avif' , 'img/04.avif' , 'img/05.avif']

//preparo un collegamento per l'HTML
let imageElements = '';

//creo un tag img per ogni elemento di sources
for(let i = 0; i < sources.length; i++){
    imageElements += `<img src="${sources[i]}" alt="foto${i + 1}" class="">`;
}

//inserisco le immagini nel DOM
gallery.innerHTML = imageElements;
thumbnails.innerHTML = imageElements;

//recupero tutte le immagini
const images = document.querySelectorAll('.gallery img');
const thumbImages = document.querySelectorAll('.thumbnails img')

//preparo la gestione dell'indice
let currentIndex = 0;

//imposto la prima immagine come attiva (block)
images[currentIndex].classList.add('d-block');
thumbImages[currentIndex].classList.add('shade');

//metto in ascolto il next
nextButton.addEventListener('click', function (){
    if (currentIndex === images.length - 1) {
    images[currentIndex].classList.remove('d-block');
    thumbImages[currentIndex].classList.remove('shade');
    currentIndex = 0;
    images[currentIndex].classList.add('d-block');
    thumbImages[currentIndex].classList.add('shade');
    }
    else if (currentIndex < sources.length){
    //rimuovo la classe block all'immagine con indice corrente
    images[currentIndex].classList.remove('d-block');
    thumbImages[currentIndex].classList.remove('shade');
    
    //incremento l'indice corrente
    currentIndex++;
    
    //aggiungo la classe block alla nuova immagine corrente
    images[currentIndex].classList.add('d-block');
    thumbImages[currentIndex].classList.add('shade');
}
})

prevButton.addEventListener('click', function (){
if (!currentIndex) {
    images[currentIndex].classList.remove('d-block');
    thumbImages[currentIndex].classList.remove('shade');
    currentIndex = images.length - 1;
    images[currentIndex].classList.add('d-block');
    thumbImages[currentIndex].classList.add('shade');
}

else if (currentIndex > 0) {
    //rimuovo la classe block all'immagine con indice corrente
    images[currentIndex].classList.remove('d-block');
    thumbImages[currentIndex].classList.remove('shade');
    
    //decremento l'indice corrente
    currentIndex--;
    
    //aggiungo la classe block alla nuova immagine corrente
    images[currentIndex].classList.add('d-block');
    thumbImages[currentIndex].classList.add('shade');
}
})

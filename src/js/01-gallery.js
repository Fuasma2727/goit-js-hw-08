import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
console.log(galleryItems);

const containerGallery = document.querySelector(".gallery");
const galleryMarkup= galleryItems.map((element)=>
`
<li class="gallery__item">
<a class="gallery__link" href="${element.original}">
<img class="gallery__image" src ="${element.preview}" alt="${element.description}"
/>
</a>
</li>
`
)
.join("");
containerGallery.insertAdjacentHTML("afterbegin", galleryMarkup);
containerGallery.addEventListener("click",(event)=> event.preventDefault())

let lightbox= new SimpleLightbox(".gallery a",{
captionsData: "alt",
captionDelay: 250,

});


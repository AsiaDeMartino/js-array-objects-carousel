const immaginiSlider = [

    {
        immagine : 'img/01.jpg',
        titolo : 'Svezia',
        descrizione : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },

    {
        immagine : 'img/02.jpg',
        titolo : 'Svizzera',
        descrizione : 'Lorem ipsum',
    },

    {
        immagine : 'img/03.jpg',
        titolo : 'Gran Bretagna',
        descrizione : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },

    {
        immagine : 'img/04.jpg',
        titolo : 'Germania',
        descrizione : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },

    {
        immagine : 'img/05.jpg',
        titolo : 'Paradise',
        descrizione : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    }

]


//definisco le variabili
const ITEMWRAPPER = document.querySelector(".item-wrapper");
const SLIDEWRAPPER = document.querySelector(".slide-wrapper");



//ciclo for per inserire img slider

// for (let i = 0; i < immaginiSlider.length; i++) {
//     const ITEM = document.createElement("div");
//     ITEMWRAPPER.append(ITEM);
//     ITEM.classList.add("item-" + (i) , "item" );

//     let immagini = document.createElement("img");
//     immagini.src = immaginiSlider[i].immagine;
//     ITEM.append(immagini);
// }

// console.log(ITEMWRAPPER)

let i = 0;

immaginiSlider.forEach( () => {
    const ITEM = document.createElement("div");
    ITEMWRAPPER.append(ITEM);
    ITEM.classList.add("item-" + (i) , "item" );

    let immagini = document.createElement("img");
    immagini.src = immaginiSlider[i].immagine;
    ITEM.append(immagini);
    i++;
} );



//ciclo for per inserire img grande
// for (let i = 0; i < immaginiSlider.length; i++) {
//     const ITEM = document.createElement("div");
//     SLIDEWRAPPER.append(ITEM);
//     ITEM.classList.add("slide-" + (i) , "slide" );

//     let immagini = document.createElement("img");
//     immagini.src = immaginiSlider[i].immagine;
//     ITEM.append(immagini);

//     const TEXTWRAPPER = document.createElement("div");
//     ITEM.append(TEXTWRAPPER);
//     TEXTWRAPPER.classList.add("testo");
    
//     let titolo = document.createElement("h1");
//     TEXTWRAPPER.append(titolo);
//     titolo.innerHTML += immaginiSlider[i].titolo

//     let testo = document.createElement("h4");
//     TEXTWRAPPER.append(testo);
//     testo.innerHTML += immaginiSlider[i].descrizione;
// }

// console.log(SLIDEWRAPPER);

//reset variabile indice
i = 0;

immaginiSlider.forEach( () => {

    const ITEM = document.createElement("div");
    SLIDEWRAPPER.append(ITEM);
    ITEM.classList.add("slide-" + (i) , "slide" );

    let immagini = document.createElement("img");
    immagini.src = immaginiSlider[i].immagine;
    ITEM.append(immagini);

    const TEXTWRAPPER = document.createElement("div");
    ITEM.append(TEXTWRAPPER);
    TEXTWRAPPER.classList.add("testo");
    
    let titolo = document.createElement("h1");
    TEXTWRAPPER.append(titolo);
    titolo.innerHTML += immaginiSlider[i].titolo

    let testo = document.createElement("h4");
    TEXTWRAPPER.append(testo);
    testo.innerHTML += immaginiSlider[i].descrizione;

    i++;

} );


//reset variabile indice
i = 0;


//dare active alle prime immagini
let activeSlide = document.querySelector(`.slide-${i}`);
activeSlide.classList.add("active");

let activeItem = document.querySelector(`.item-${i}`);
activeItem.classList.add("active");


//rendere funzionante lo slider

    //aggiungere costanti per i pulsanti 
const NEXT = document.getElementById("next");
console.log(NEXT);

const PREV = document.getElementById("prev");
console.log(PREV);

    //Pulsate prev
PREV.addEventListener("click", function(){
    let activeItem = document.querySelector(`.item-${i}`);
    let activeSlide = document.querySelector(`.slide-${i}`);
    activeItem.classList.remove("active");
    activeSlide.classList.remove("active");

    if (i > 0) {
        i--;
        let activeItem = document.querySelector(`.item-${i}`);
        let activeSlide = document.querySelector(`.slide-${i}`);
        activeItem.classList.add("active");
        activeSlide.classList.add("active");
    } else {
        i = immaginiSlider.length-1;
        let activeItem = document.querySelector(`.item-${i}`);
        let activeSlide = document.querySelector(`.slide-${i}`);
        activeItem.classList.add("active");
        activeSlide.classList.add("active");
    }
    console.log(i);
})


    console.log(i)

    //Pulsante next
NEXT.addEventListener("click", function(){
    let activeItem = document.querySelector(`.item-${i}`);
    let activeSlide = document.querySelector(`.slide-${i}`);
    activeItem.classList.remove("active");
    activeSlide.classList.remove("active");

    if (i < immaginiSlider.length-1) {
        i++
        let activeItem = document.querySelector(`.item-${i}`);
        let activeSlide = document.querySelector(`.slide-${i}`);
        activeItem.classList.add("active");
        activeSlide.classList.add("active");
    } else {
        i = 0
        let activeItem = document.querySelector(`.item-${i}`);
        let activeSlide = document.querySelector(`.slide-${i}`);
        activeItem.classList.add("active");
        activeSlide.classList.add("active");
    }
    console.log(i);
})





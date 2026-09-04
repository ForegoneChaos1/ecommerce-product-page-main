// we want to be able to attach event listeners on the thumbnails
// we want to update the images on the product display
// the current index or position of the current product image


const thumbnails = document.querySelectorAll('.thumbnail-img img');
const productDisplay = document.querySelector('.product');
const productDisplayImgs = document.querySelectorAll('.product img');
const currentDisplay = document.querySelectorAll('.highlight')
const add = document.querySelector('.plus-icon')
const minus = document.querySelector('.minus-icon')
const quantity = document.querySelector('.quantity')
const cartItems = document.querySelector('.cart-img')
const cartOpen = document.querySelector('.cart-display')
const displayPort = document.getElementsByName('section')
let clickCount = 0;

add.addEventListener('click', increaseProduct )
minus.addEventListener('click', decreaseProduct )



cartItems.addEventListener('click', () => {
    clickCount++
    cartOpen.style.display = 'block'
    if (clickCount % 2 === 0 ) {
        cartOpen.style.display = 'none'
    }
})

const imgslide = [...thumbnails];
const productImgslide = [...productDisplayImgs];
const activeHighlight = [...currentDisplay];
const cartDisplay = document.querySelector('.cart-img span')

let counter = 0;

const addToCartButton = document.querySelector('.shop-cart')
addToCartButton.addEventListener('click', addToCart)


for (let i = 0; i < imgslide.length; i++) {
    const element = imgslide[i];
    element.addEventListener('click', (e) => {

        for (let j = 0; j < productImgslide.length; j++) {
            const item = productImgslide[j];
            //remove the current active state on the product slide 

            item.classList.remove('active')
            productImgslide[i].classList.add('active') 
        }
        for (let k = 0; k < activeHighlight.length; k++) {
            const current = activeHighlight[k];
            //remove the current active state on the product slide 

            current.classList.remove('current')
            activeHighlight[i].classList.add('current')
        }
    })
}
function increaseProduct (){
    counter = counter + 1
    quantity.textContent = counter;
}

function decreaseProduct (){
    counter = counter - 1
    if (counter < 0) {
        counter = 0;
    }
    quantity.textContent = counter;
}

function addToCart() {
    if (counter <= 0) {
        return;
    }
    cartDisplay.style.display = 'block';
    cartDisplay.textContent = counter;

}



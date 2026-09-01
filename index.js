// we want to be able to attach event listeners on the thumbnails
// we want to update the images on the product display
// the current index or position of the current product image


const thumbnails = document.querySelectorAll('.thumbnail-img img');
const productDisplay = document.querySelector('.product');
const productDisplayImgs = document.querySelectorAll('.product img');
const currentDisplay = document.querySelectorAll('.highlight')

const imgslide = [...thumbnails];
const productImgslide = [...productDisplayImgs];
const activeHighlight = [...currentDisplay];

// console.log(activeHighlight)


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



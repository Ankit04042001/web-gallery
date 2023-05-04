
const mainWrapper = document.querySelector('.wrapper');
const backButton = document.querySelector('.back-button');
const imageViewWrapper = document.querySelector('.view');
const viewImage = document.querySelector('.view .image');
const imageWrapper = document.querySelectorAll('.img1');
let currentImage;

function loadMainWrapper(){
    let count = 22;
    for(i=2; i<=count; i++){
        let cloneNode = imageWrapper[0].cloneNode(true);
        cloneNode.children[0].setAttribute('src', `images/image${i}.jpeg`);
        mainWrapper.append(cloneNode);    
        console.log(mainWrapper)    
    }
}

loadMainWrapper();


const imageWrapper2 = document.querySelectorAll('.img1');

imageWrapper2.forEach((image)=>{
    image.addEventListener('click', ()=>{
        mainWrapper.style.display = 'None';
        backButton.style.display = 'block';
        imageViewWrapper.style.display = 'block';
        currentImage = image.children;
        currentImage = currentImage[0].getAttribute('src');
        viewImage.children[0].setAttribute('src', currentImage);

    })
}
)


backButton.addEventListener('click', ()=>{
    mainWrapper.style.display = 'block';
        backButton.style.display = 'None';
        imageViewWrapper.style.display = 'None';
})
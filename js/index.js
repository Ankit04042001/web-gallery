
const heading = document.querySelector('.heading h1')
const backButton = document.querySelector('.back-button');

const imageWrapper = document.querySelectorAll('.img1');
let currentImage;


// Coding for Category Wrapper

const categoryWrapper = document.querySelector('.category-wrapper');

const categories = {
    'profile': 'My Photos',                     // Add category name with respective heading
    'coding': 'Coding Quotes'
}

const categoryCount = 2;


function loadCategoryWrapper() {
    for (i = 2; i <= categoryCount; i++) {
        let cloneNode = categoryWrapper.children[0].cloneNode(true);
        cloneNode.classList.remove('profile');
        cloneNode.classList.add(Object.keys(categories)[i - 1]);
        cloneNode.children[0].children[0].setAttribute('src', `images/${Object.keys(categories)[i - 1]}/image1.jpeg`);
        cloneNode.children[1].innerText = categories[Object.keys(categories)[i - 1]];
        categoryWrapper.append(cloneNode);
    }
}

loadCategoryWrapper();


// coding for category image wrapper


const categoryImageCounts = {
    'profile': 9,                     // Add all categories with their respective image counts in that category
    'coding': 22,
}

const categoryItems = document.querySelectorAll('.category');
const categoryItemsWrapper = document.querySelector('.category-image-wrapper');

categoryItems.forEach((item) => {
    item.addEventListener('click', () => {
        backButton.style.display = 'block';
        categoryWrapper.style.display = 'None';
        categoryItemsWrapper.style.display = 'block';
        heading.innerText = categories[item.getAttribute('class').split(' ')[1]];
        loadCategoryImageWrapper(item.getAttribute('class').split(' ')[1]);
    })
}
)

function loadCategoryImageWrapper(category) {
    /*
        Empty the wrapper first then add subsquent children.
        This is required for preventing recursive addition of child Items on loading Image Wrapper
    */
   const first_child = categoryItemsWrapper.children[0].cloneNode(true);
    categoryItemsWrapper.innerHTML = '';

    for (i = 1; i <= categoryImageCounts[category]; i++) {
        let cloneNode = first_child.cloneNode(true);
        cloneNode.children[0].setAttribute('src', `images/${category}/image${i}.jpeg`);
        categoryItemsWrapper.append(cloneNode);
    }


    populateViewWrapper();
}



// coding for single image view wrapper

function populateViewWrapper() {
    const imageViewWrapper = document.querySelector('.view');
    const viewImage = document.querySelector('.view .image');
    const allImages = document.querySelectorAll('.category-image');

    allImages.forEach((image) => {
        image.addEventListener('click', () => {
            categoryWrapper.style.display = 'None';
            categoryItemsWrapper.style.display = 'none';
            imageViewWrapper.style.display = 'block';
            imageViewWrapper.children[0].children[0].setAttribute('src', image.children[0].getAttribute('src') )
        })
    })
}


//coding for back button

backButton.addEventListener('click', () => {
    const imageViewWrapper = document.querySelector('.view');
    let categoryWrapperDisplay = categoryWrapper.style.display;
    let categoryItemsDisplay = categoryItemsWrapper.style.display;
    let imageViewWrapperDisplay = imageViewWrapper.style.display;

    if(imageViewWrapperDisplay === 'block'){
        imageViewWrapper.style.display = 'none';
        categoryItemsWrapper.style.display = 'block';
    }else if(categoryItemsDisplay === 'block'){
        categoryItemsWrapper.style.display = 'none';
        categoryWrapper.style.display = 'block';
        backButton.style.display = 'none';
        heading.innerText = 'Web Gallery';
    }
})



const catalogData = {
    "categories": [
        {
            "name": "Electronics",
            "image": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147",
            "products": [
                {
                    "name": "Laptop",
                    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                    "description": "A high-performance laptop for all your needs.",
                    "specs": "16GB RAM, 512GB SSD, 15.6-inch Display",
                    "shipping": "Weight: 5 lbs, Dimensions: 14x10x1 inches"
                },
                {
                    "name": "Smartphone",
                    "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505",
                    "description": "The latest smartphone with a stunning camera.",
                    "specs": "8GB RAM, 128GB Storage, 6.5-inch OLED Display",
                    "shipping": "Weight: 0.5 lbs, Dimensions: 6x3x0.3 inches"
                }
            ]
        },
        {
            "name": "Furniture",
            "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
            "products": [
                {
                    "name": "Sofa",
                    "image": "https://images.unsplash.com/photo-1540574163024-58ea3f3b1b58",
                    "description": "A comfortable and stylish sofa for your living room.",
                    "specs": "3-seater, linen fabric, solid wood frame",
                    "shipping": "Weight: 150 lbs, Dimensions: 84x36x34 inches"
                }
            ]
        },
        {
            "name": "Clothing",
            "image": "https://images.unsplash.com/photo-1445205170230-053b83016050",
            "products": []
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const mainCategoriesContainer = document.getElementById('main-categories');
    const subCategoriesContainer = document.getElementById('sub-categories');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-button');

    function displayMainCategories() {
        mainCategoriesContainer.innerHTML = '';
        subCategoriesContainer.classList.add('hidden');
        mainCategoriesContainer.classList.remove('hidden');

        catalogData.categories.forEach(category => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.style.backgroundImage = `url(${category.image})`;
            tile.innerHTML = `<h2>${category.name}</h2>`;
            tile.onclick = () => displaySubCategories(category);
            mainCategoriesContainer.appendChild(tile);
        });
    }

    function displaySubCategories(category) {
        mainCategoriesContainer.classList.add('hidden');
        subCategoriesContainer.classList.remove('hidden');
        subCategoriesContainer.innerHTML = '';

        const backButton = document.createElement('button');
        backButton.textContent = 'Back to Categories';
        backButton.onclick = displayMainCategories;
        subCategoriesContainer.appendChild(backButton);


        category.products.forEach(product => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.style.backgroundImage = `url(${product.image})`;
            tile.innerHTML = `<h2>${product.name}</h2>`;
            tile.onclick = () => showProductDetails(product);
            subCategoriesContainer.appendChild(tile);
        });
    }

    function showProductDetails(product) {
        modal.style.display = 'block';
        document.getElementById('modal-img').src = product.image;
        document.getElementById('modal-title').textContent = product.name;
        document.getElementById('modal-description').textContent = product.description;
        document.getElementById('modal-specs').textContent = product.specs;
        document.getElementById('modal-shipping').textContent = product.shipping;
    }

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    displayMainCategories();
});

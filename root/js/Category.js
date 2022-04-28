// NOTE: Global variable Arrays for Categories, catalog and cart;
var categories = [];
var catalogs = [];
var cart = []; // NOTE: Represents shopping cart, Add items here when user add it to the cart.

var productImagesFolder = 'images/productImages/image';



// NOTE: constructor function for Category
function Category(categoryID, categoryName, categoryDesc) {

    // Assigning parameter
    this.categoryID = categoryID;
    this.categoryName = categoryName;
    this.categoryDesc = categoryDesc;

    // DEBUG:
    this.Test = function () {
        return ('ID:' + this.categoryID + ' Name: ' + this.categoryName + ' desc:' + this.categoryDesc);
    }
}

// NOTE: constructor function for Item
function Item(id, title, description, brand, unitPrice, quantity, make, thumbnail, category) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.brand = brand;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.make = make;
    this.thumbnail = thumbnail;
    this.category = category;

    // DEBUG:
    this.Test = function () {
        return ('ID: ' + id + ' title: ' + title + ' price: ' + unitPrice + ' category ' + category.categoryID);
    }
}



// NOTE: Creates instances of Category
function initializeCategories() {

    const category1 = new Category('c1', 'Street', 'Documenting movement on the street');
    const category2 = new Category('c2', 'Urban', 'The beautiful sight of the city');
    const category3 = new Category('c3', 'Food', 'It looks good and it taste good');
    const category4 = new Category('c4', 'Graffiti', 'The amazing arts on the wall');
    const category5 = new Category('c5', 'Fashion', 'To look good, you have to know how to dress good');
    const category6 = new Category('c6', 'Silhouette', 'The art of imagination');
    const category7 = new Category('c7', 'Macro', 'Be amaze of the small things');
    const category8 = new Category('c8', 'Nature', 'Time to connect with Mother earth and disconnect yourself from stress');
    categories = [category1, category2, category3, category4, category5, category6, category7, category8];
    // DEBUG:
    console.log(categories[0].Test());
}

function initializeItems() {

    // NOTE: Creates instances of Items

    const item1 = new Item(1, 'Child Play', 'A child playing beside the fountain', 'Jeffrey Grospe', 250.00, 2, 'unsplash', `${productImagesFolder}`, categories[0]);
    const item2 = new Item(2, 'Gloomy Snow', 'A car stuck in the middle of a snow storm', 'Jeffrey Grospe', 200.00, 5, 'unsplash', `${productImagesFolder}`, categories[0]);
    const item3 = new Item(3, 'Match with Granny', 'An image full of matching pattern', 'Jeffrey Grospe', 300.00, 1, 'unsplash', `${productImagesFolder}`, categories[0]);
    const item4 = new Item(4, 'Old Italy', 'A street resembles the street of Italy', 'Jeffrey Grospe', 100.00, 2, 'unsplash', `${productImagesFolder}`, categories[1]);
    const item5 = new Item(5, 'Montreal Skyscrapers ', 'Be amaze of the futuristic look', 'Jeffrey Grospe', 120.00, 3, 'unsplash', `${productImagesFolder}`, categories[1]);
    const item6 = new Item(6, 'Bonsecour Market', 'A historical place in Montreal', 'Jeffrey Grospe', 10.00, 5, 'unsplash', `${productImagesFolder}`, categories[1]);
    const item7 = new Item(7, 'Healthy', 'Have a taste!', 'Broke Lark', 80.00, 2, 'unsplash', `${productImagesFolder}`, categories[2]);
    const item8 = new Item(8, 'Piece of Cake', 'Cant help my self but crave', 'Anna Tukhfatullina', 80.00, 5, 'unsplash', `${productImagesFolder}`, categories[2]);
    const item9 = new Item(9, 'Eggspectation', 'Serve with delight', 'Joseph Gonzalez', 80.00, 5, 'unsplash', `${productImagesFolder}`, categories[2]);
    const item10 = new Item(10, 'Mural and biker', 'A silhouette shot and a colorful background ', 'Jeffrey Grospe', 200.00, 2, 'unsplash', `${productImagesFolder}`, categories[3]);
    const item11 = new Item(11, 'Einstein', 'Mural art of Einstein', 'Jon Tyson', 150.00, 10, 'unsplash', `${productImagesFolder}`, categories[3]);
    const item12 = new Item(12, 'The Gf', 'Mural art, an image of a girl', 'Enzo Tommasi', 150.00, 5, 'unsplash', `${productImagesFolder}`, categories[3]);
    const item13 = new Item(13, 'Willo', 'The king of fashion', 'Jeffrey Grospe', 250.00, 4, 'unsplash', `${productImagesFolder}`, categories[4]);
    const item14 = new Item(14, 'Sam', 'The Queen of fashion', 'Jeffrey Grospe', 250.00, 4, 'unsplash', `${productImagesFolder}`, categories[4]);
    const item15 = new Item(15, 'Red', 'An image of a perfect girl', 'Jeffrey Grospe', 250.00, 4, 'unsplash', `${productImagesFolder}`, categories[4]);
    const item16 = new Item(16, 'Shadow Creature', 'This is a silhouette of someone walking in the tunnel', 'Jeffrey Grospe', 150.00, 2, 'unsplash', `${productImagesFolder}`, categories[5]);
    const item17 = new Item(17, 'Sun Set', 'My favorite capture of all time', 'Jeffrey Grospe', 2000.00, 1, 'unsplash', `${productImagesFolder}`, categories[5]);
    const item18 = new Item(18, 'Abstract', 'A reflected female silhouette', 'Jeffrey Grospe', 350.00, 6, 'unsplash', `${productImagesFolder}`, categories[5]);
    const item19 = new Item(19, 'Green Grass', 'Reconnect with the nature', 'Jeffrey Grospe', 350.00, 3, 'unsplash', `${productImagesFolder}`, categories[6]);
    const item20 = new Item(20, 'Pink flower', 'A bokeh shot of a flower', 'Jeffrey Grospe', 150.00, 7, 'unsplash', `${productImagesFolder}`, categories[6]);
    const item21 = new Item(21, 'Fast & Furious', 'A miniature cars', 'Jeffrey Grospe', 110.00, 8, 'unsplash', `${productImagesFolder}`, categories[6]);
    const item22 = new Item(22, 'White and Orange', 'Yellow leaves on a white canvas', 'Jeffrey Grospe', 150.00, 10, 'unsplash', `${productImagesFolder}`, categories[7]);
    const item23 = new Item(23, 'Fall colors', 'A calm and relaxing image', 'Jeffrey Grospe', 110.00, 7, 'unsplash', `${productImagesFolder}`, categories[7]);
    const item24 = new Item(24, 'Storm', 'This is a powerful image, a metaphor of destruction', 'Jeffrey Grospe', 450.00, 1, 'unsplash', `${productImagesFolder}`, categories[7]);

    catalogs = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11,
        item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24];

    // DEBUG:
    console.log(catalogs[0].Test());
}

// REFACTOR:
function clearContainer() {
    document.getElementById('divContainer').innerHTML = "";
}

// REFACTOR: A dummy function
function showListOfItems() {

    clearContainer();
    let mainContainer = document.getElementById('divContainer');

    for (let i = 1; i < catalogs.length; i++) {
        let item = catalogs[i - 1];
        let content = '<div class="col mb-5"><div class="card h-100">';
        content += `<img class="card-img-top" src="${item.thumbnail+i}.jpg" alt="..." />`;
        content += '<div class="card-body p-4 "><i class="fa fa-heart-o" aria-hidden="true"></i>';
        content += `<div class="text-center"><h5 class="fw-bolder">${item.title}</h5>$${item.unitPrice}`;
        content += '</div></div>';
        content += '<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">';
        content += '<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to Cart</a></div>';
        content += '</div><i class="bi-question-circle-fill px-2 align-self-end"></i>';
        content += '</div></div>'

        mainContainer.innerHTML += content;
    }
   
}

// REFACTOR: Displays alert based on user interaction
var timeOutForMsg = 5;
function showStatusMessage(cssClass, messageToDisplay) {
    //TODO:
}

// REFACTOR: Hides status alert
function hideStatusAlert() {
    // TODO:
}

// REFACTOR: Display the content of the shopping cart, Contains the list that has been added to the cart
function viewCart() {
    // TODO:
}

// REFACTOR: Find item using Id in the catalog array. Returns the matched item
function findItemById(itemId) {
    // TODO:
}

// REFACTOR: Takes item ID and display details of the matched item
function showItemDetails(itemId) {
    // TODO:
}

// REFACTOR: Takes item ID and add selected item to the cart
function addToCart(itemId) {
    // TODO:
}

// REFACTOR: Takes item ID and remove the selected item from the cart
function removeFromCart(itemId) {
    // TODO:
}

// REFACTOR: 
function searchByKeyWord() {
    // TODO:
}

// REFACTOR:

// NOTE: Sets up the webpage for the user: Used onLoad body event.
function setUpCart() {
    initializeCategories();
    initializeItems();
    showListOfItems();
}

// DEBUG: REFACTOR:
window.addEventListener("load", setUpCart());



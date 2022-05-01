// NOTE: Global variable Arrays for Categories, catalog and cart;
var categories = [];
var catalogs = [];
var cart = []; // NOTE: Represents shopping cart, Add items here when user add it to the cart.
// NOTE: increment or decrement number of items in the cart
var itemCounter = 0;
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
}

function initializeItems() {

    // NOTE: Creates instances of Items

    const item1 = new Item(1, 'Child Play', 'A child playing beside the fountain', 'Jeffrey Grospe', 250.99, 2, 'Unsplash', `${productImagesFolder}`, categories[0]);
    const item2 = new Item(2, 'Gloomy Snow', 'A car stuck in the middle of a snow storm', 'Jeffrey Grospe', 200.99, 5, 'Unsplash', `${productImagesFolder}`, categories[0]);
    const item3 = new Item(3, 'Match with Granny', 'An image full of matching pattern', 'Jeffrey Grospe', 300.99, 1, 'Unsplash', `${productImagesFolder}`, categories[0]);
    const item4 = new Item(4, 'Old Italy', 'A street resembles the street of Italy', 'Jeffrey Grospe', 100.99, 2, 'Unsplash', `${productImagesFolder}`, categories[1]);
    const item5 = new Item(5, 'Montreal Skyscrapers ', 'Be amaze of the futuristic look', 'Jeffrey Grospe', 120.99, 3, 'Unsplash', `${productImagesFolder}`, categories[1]);
    const item6 = new Item(6, 'Bonsecour Market', 'A historical place in Montreal', 'Jeffrey Grospe', 100.99, 5, 'Unsplash', `${productImagesFolder}`, categories[1]);
    const item7 = new Item(7, 'Healthy', 'Have a taste!', 'Broke Lark', 80.00, 2, 'Unsplash', `${productImagesFolder}`, categories[2]);
    const item8 = new Item(8, 'Piece of Cake', 'Cant help my self but crave', 'Anna Tukhfatullina', 80.00, 5, 'Unsplash', `${productImagesFolder}`, categories[2]);
    const item9 = new Item(9, 'Eggspectation', 'Serve with delight', 'Joseph Gonzalez', 80.00, 5, 'Unsplash', `${productImagesFolder}`, categories[2]);
    const item10 = new Item(10, 'Mural and biker', 'A silhouette shot and a colorful background ', 'Jeffrey Grospe', 200.99, 2, 'Unsplash', `${productImagesFolder}`, categories[3]);
    const item11 = new Item(11, 'Einstein', 'Mural art of Einstein', 'Jon Tyson', 150.99, 10, 'Unsplash', `${productImagesFolder}`, categories[3]);
    const item12 = new Item(12, 'The Gf', 'Mural art, an image of a girl', 'Enzo Tommasi', 150.99, 5, 'Unsplash', `${productImagesFolder}`, categories[3]);
    const item13 = new Item(13, 'Willo', 'The king of fashion', 'Jeffrey Grospe', 250.99, 4, 'Unsplash', `${productImagesFolder}`, categories[4]);
    const item14 = new Item(14, 'Sam', 'The Queen of fashion', 'Jeffrey Grospe', 250.99, 4, 'Unsplash', `${productImagesFolder}`, categories[4]);
    const item15 = new Item(15, 'Red', 'An image of a perfect girl', 'Jeffrey Grospe', 250.99, 4, 'Unsplash', `${productImagesFolder}`, categories[4]);
    const item16 = new Item(16, 'Shadow Creature', 'This is a silhouette of someone walking in the tunnel', 'Jeffrey Grospe', 150.99, 2, 'Unsplash', `${productImagesFolder}`, categories[5]);
    const item17 = new Item(17, 'Sun Set', 'My favorite capture of all time', 'Jeffrey Grospe', 2000.99, 1, 'Unsplash', `${productImagesFolder}`, categories[5]);
    const item18 = new Item(18, 'Abstract', 'A reflected female silhouette', 'Jeffrey Grospe', 350.99, 6, 'Unsplash', `${productImagesFolder}`, categories[5]);
    const item19 = new Item(19, 'Green Grass', 'Reconnect with the nature', 'Jeffrey Grospe', 350.99, 3, 'Unsplash', `${productImagesFolder}`, categories[6]);
    const item20 = new Item(20, 'Pink flower', 'A bokeh shot of a flower', 'Jeffrey Grospe', 150.99, 7, 'Unsplash', `${productImagesFolder}`, categories[6]);
    const item21 = new Item(21, 'Fast & Furious', 'A miniature cars', 'Jeffrey Grospe', 110.99, 8, 'Unsplash', `${productImagesFolder}`, categories[6]);
    const item22 = new Item(22, 'White and Orange', 'Yellow leaves on a white canvas', 'Jeffrey Grospe', 150.99, 5, 'Unsplash', `${productImagesFolder}`, categories[7]);
    const item23 = new Item(23, 'Fall colors', 'A calm and relaxing image', 'Jeffrey Grospe', 110.99, 7, 'Unsplash', `${productImagesFolder}`, categories[7]);
    const item24 = new Item(24, 'Storm', 'This is a powerful image, a metaphor of destruction', 'Jeffrey Grospe', 450.99, 1, 'Unsplash', `${productImagesFolder}`, categories[7]);

    catalogs = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11,
        item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24];

}

// REFACTOR:
function clearContainer() {
    //DEBUG:

    // NOTE: Using display to hide elements
    showOrHideContainer('none');
    console.log("cleared container")
}

function resetContainer(){
    document.getElementById('divContainer').innerHTML = "";
}

function showOrHideContainer(status){
    var container = document.getElementById('divContainer');
    container.style.display = status
    //showOrHideTable('none');

}

// REFACTOR: A dummy function
function showListOfItems() {
    clearCart();
    resetContainer();
    enabledSearchBtn();
    
    let mainContainer = document.getElementById('divContainer');

    for (let i = 1; i < catalogs.length; i++) {
        let item = catalogs[i - 1];
        let content = '<div class=" mb-5"><div class="card shadow p3 mb-5 bg-white rounded">';
        content += `<img class="card-img-top w-100 p-3" src="${item.thumbnail+item.id}.jpg" alt="..." />`;
        content += '<div class="card-body p-2 "><i class="fa fa-heart-o" aria-hidden="true"></i>';
        content += `<div class="text-center"><h5 id="priceTag${i}" class="fw-bolder">${item.title}</h5><p class="font-italic text-monospace p-0 m-0 mb-1">"${item.category.categoryName}"</p>$${item.unitPrice}`;
        content += `<p id="quantity${item.id}" class="small">Quantity: ${item.quantity} </p>`
        content += '</div></div>';
        content += '<div class="card-footer p-2 pt-0 border-top-0 bg-transparent">';
        content += `<div class="text-center"><button id="${item.id}" class="btn btn-outline-dark mt-auto" onclick="addToCart(${item.id})">Add to Cart</button></div></div>`;
        content += `<div id="moreDetails${i}" class="row"></div>`;
        content += '</div></div>'

        mainContainer.innerHTML += content;
        initDetails(`moreDetails${i}`,item);
        // DEBUG:
        //console.log(`moreDetails${i}`);     
    }
}

// NOTE: FIltered Items
function showListOfItemsFiltered(array) {

    resetContainer();

    let mainContainer = document.getElementById('divContainer');
    for (let i = 1, j = 0; j < array.length; i++, j++) {
        let item = array[i - 1];
        let content = '<div class="col mb-5"><div class="card shadow p3 mb-5 bg-white rounded ">';
        content += `<img class="card-img-top p-3" src="${item.thumbnail+item.id}.jpg" alt="..." />`;
        content += '<div class="card-body p-2 "><i class="fa fa-heart-o" aria-hidden="true"></i>';
        content += `<div class="text-center"><h5 id="priceTag${item.id}" class="fw-bolder">${item.title}</h5><p class="font-italic text-monospace p-0 m-0 mb-1">"${item.category.categoryName}"</p>$${item.unitPrice}`;
        content += `<p id="quantity${item.id}" class="small">Quantity: ${item.quantity} </p>`
        content += '</div></div>';
        content += '<div class="card-footer p-2 pt-0 border-top-0 bg-transparent">';
        content += `<div class="text-center"><button id="${item.id}" class="btn btn-outline-dark mt-auto" onclick="addToCart(${item.id})">Add to Cart</button></div></div>`;
        content += `<div id="moreDetails${i}" class="row"></div>`;
        content += '</div></div>'

        mainContainer.innerHTML += content;
        initDetails(`moreDetails${i}`,item);
           
    }
}

// NOTE: populate viewDetails and show's details, item is an object
function initDetails(htmlID, item){
    let currentItem = item;
    let mainContainer = document.getElementById(htmlID);
    let content = `<button type="button" class="text-right bg-transparent border-0" data-toggle="modal" data-target="#modalNum${currentItem.id}">`;
    content += ' <i class="bi-question-circle-fill px-2 "></i></button>';
    // NOTE: MODAL body
    content += `<div class="modal fade" id="modalNum${currentItem.id}" tabindex="-1" role="dialog"aria-labelledby="exampleModalCenterTitle" aria-hidden="true">`;
    content += '<div class="modal-dialog modal-dialog-centered" role="document">';
    content += '<div class="modal-content"><div class="modal-header">';
    content += `<h5 class="modal-title" id="exampleModalLongTitle">${currentItem.title}</h5>`;
    content += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    content += '<span aria-hidden="true">&times;</span></button></div>';
    content += '<div class="modal-body">';
    content += `<img src="${currentItem.thumbnail}${item.id}.jpg" class="card-img-top w-50 float-left" alt="">`
    content += '<div class="card-body text-center">';
    content += `<p class="card-text p-0 m-0">Artist:${currentItem.brand}</p>`;
    content += `<p class="card-text p-0 m-0">Description:${currentItem.description}</p>`;
    content += `<p class="card-text p-0 m-0">Publisher:${currentItem.make}</p>`;
    content += `<p class="card-text p-0 m-0">Category:${currentItem.category.categoryName}</p>`;
    //NOTE: RATING
    content += '<div class="d-flex justify-content-center small text-warning mb-2">';
    content += '<hr><p>Rating</p>';
    content += ' <div class="bi-star-fill"></div> <div class="bi-star-fill"></div> <div class="bi-star-fill"></div>';
    content += ' <div class="bi-star-fill"></div> <div class="bi-star-fill"></div></div>';
    content += '</div></div>';
    //NOTE: closing modal-body
    content += `<p class="text-left pl-2 ml-2 mb-0"> PRICE:$${currentItem.unitPrice}</p>`
    content += `<div id="alertModal${item.id}"></div>`;
    content += '<div class="modal-footer">'
    content += '<button type="button" class="btn btn-secondary"data-dismiss="modal">Close</button>';
    content += `<button  onclick="addToCart(${item.id})" type="button" class="btn btn-success ">Buy</button>`;
    content += '</div></div></div></div>';

    mainContainer.innerHTML += content;

}

// NOTE: Displays alert based on user interaction
var timeOutForMsg = 5000;
function showStatusMessage(cssClass, header, messageToDisplay, priceID) {

    let mainContainer = document.getElementById('priceTag'+priceID);
    let content = `<div id="alert" class="alert ${cssClass} alert-dismissible fade show h-auto small my-1 py-1" role="alert">`;
    content +=  `<strong>${header}</strong>${messageToDisplay}`;
    content += ' <button type="button" class="close" data-dismiss="alert" aria-label="Close"></div>';

    mainContainer.innerHTML = content;

   setTimeout(function(){
       $('.alert').alert('close')
   },timeOutForMsg);
   
}

// NOTE: alert box with close function
function showStatusMessageClosable(cssClass, header, messageToDisplay, idClass) {

    let container = document.getElementById(idClass);
    let content = `<div class="alert ${cssClass} alert-dismissible fade show p-1 m-0 d-flex justify-content-center" role="alert">`;
    content += `<strong>${header}!</strong><p class="text-center pr-5 pl-2 m-0">${messageToDisplay}</p>`;
    content += '<button type="button" class="close p-1" data-dismiss="alert" aria-label="Close">';
    content += '<span aria-hidden="true">&times;</span></button></div>';

    container.innerHTML += content;

    setTimeout(function(){
        $('.alert').alert('close')
    },3000);
  

}


// REFACTOR: Hides status alert
function hideStatusMessage() {
    // TODO: NOT WORKING!!
    let el = document.getElementById('alert');
    el.style.display = "none";

    // DEBUG:
    console.log("hide status");
}

// REFACTOR: Display the content of the shopping cart, Contains the list that has been added to the cart
function viewCart() {
    // TODO:
    clearCart();
    showItemInCart();
    disableButton('btnSearch');
}
// NOTE: SHORT item in cart
function showItemInCart(){
    resetContainer();
    let mainContainer = document.getElementById('tableContainer');
    let content = '<div id="cart-table"><table class="table table-striped">';
        content += '<thead><tr><th scope="col">Item ID</th><th scope="col">Title</th>';
        content += '<th scope="col">Description</th><th scope="col">Price</th><th scope="col" class="">Display</th>';
        content += '<th scope="col"></th></tr></thead><tbody id="tableBody"></tbody></div></div>';

    mainContainer.innerHTML += content;
    let tableBody = document.getElementById('tableBody');
    for (const item of cart){
        let table = `<tr><th scope="row">${item.id}</th><td>${item.title}</td>`;
        table += `<td>${item.description}</td><td>$${item.unitPrice}</td>`;
        table += `<td class="w-25 col-sm-"><img class="w-25 col-sm-" src="${item.thumbnail}${item.id}.jpg" alt=""></td>`;
        table += `<td id="moreDetails" class="w-25"><button class="btn btn-danger ">REMOVE</button>`;
        table += `<button   type="button" class="btn btn-info mx-2" data-toggle="modal" data-target="#modalNum${item.id}">`;
        table += 'DETAILS</button>';
        table += '</td></tr>';
        
        
        tableBody.innerHTML += table;
        // DEBUG:
        showItemDetails('moreDetails',item)
        console.log("this is inside the cart " + item.id);
    }
}
// NOTE: viewDEtails in cart
// REFACTOR: Takes item ID and display details of the matched item
function showItemDetails(htmlID,item) {
let currentItem = item;
    let mainContainer = document.getElementById(htmlID);
    // NOTE: MODAL body
    let content = `<div class="modal fade" id="modalNum${currentItem.id}" tabindex="-1" role="dialog"aria-labelledby="exampleModalCenterTitle" aria-hidden="true">`;
    content += '<div class="modal-dialog modal-dialog-centered" role="document">';
    content += '<div class="modal-content"><div class="modal-header">';
    content += `<h5 class="modal-title" id="exampleModalLongTitle">${currentItem.title}</h5>`;
    content += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    content += '<span aria-hidden="true">&times;</span></button></div>';
    content += '<div class="modal-body">';
    content += `<img src="${currentItem.thumbnail}${item.id}.jpg" class="card-img-top w-50 float-left" alt="">`
    content += '<div class="card-body text-center">';
    content += `<p class="card-text p-0 m-0">Artist:${currentItem.brand}</p>`;
    content += `<p class="card-text p-0 m-0">Description:${currentItem.description}</p>`;
    content += `<p class="card-text p-0 m-0">Publisher:${currentItem.make}</p>`;
    content += `<p class="card-text p-0 m-0">Category:${currentItem.category.categoryName}</p>`;
    // RATING
    content += '<div class="d-flex justify-content-center small text-warning mb-2">';
    content += '<hr><p>Rating</p>';
    content += ' <div class="bi-star-fill"></div> <div class="bi-star-fill"></div> <div class="bi-star-fill"></div>';
    content += ' <div class="bi-star-fill"></div> <div class="bi-star-fill"></div></div>';
    content += '</div></div>';
    // closing modal-body
    content += `<p class="text-left pl-2 ml-2 mb-0"> PRICE:$${currentItem.unitPrice}</p>`
    content += `<div id="alertModal${item.id}"></div>`;
    content += '<div class="modal-footer">'
    content += '<button type="button" class="btn btn-secondary"data-dismiss="modal">Close</button>';
    content += '</div></div></div></div>';

    mainContainer.innerHTML += content;
}

// NOTE: CLEAR CART
function clearCart(){
    document.getElementById('tableContainer').innerHTML = "";
}

// NOTE: Rmove items in cart
// REFACTOR: Takes item ID and remove the selected item from the cart
function removeFromCart(itemId) {
    
}

// NOTE: showOrHideTable
function showOrHideTable(status){
    var tableElement = document.getElementById('cart-table');
    tableElement.style.display = status;
}

// REFACTOR: Find item using Id in the catalog array. Returns the matched item
function findItemById(itemId) {
    // TODO:
    for (const element of catalogs){
        if(itemId == element.id){
            // DEBUG:
            console.log("ID: "+element.id+ " TITLE: " + element.title )
            return element;
        }
    }
}



// REFACTOR: Takes item ID and add selected item to the cart
function addToCart(itemId) {
    
    let currentItem = findItemById(itemId);
    // DEBUG:
    console.log("adding to cart " + currentItem.Test);
    console.log("current quantity " + currentItem.quantity);
    if (currentItem.quantity > 0){
        showStatusMessage('alert-success', 'SUCCESS', ' item added !',currentItem.id);
        cart.push(currentItem);
        --currentItem.quantity;
        // NOTE: updates the value
       document.getElementById('quantity'+currentItem.id).innerHTML = 'Quantity: '+currentItem.quantity;
       // NOTE: Update number in the cart
       updateItemsInCart('add');
    
    } else{
        let btnClass = document.getElementById(itemId);
        // DEBUG:
        btnClass.classList.add("disabled")
        showStatusMessage('alert-warning', 'FAILED', ' out of stock !',currentItem.id);
        

    }
}
// NOTE: function to reenable search button
function enabledSearchBtn(){
    document.getElementById('btnSearch').className = "btn btn-outline-success mx-2";
}
// NOTE: Function to disable button
function disableButton(idClass){
    document.getElementById(idClass).classList.add('disabled');
}
function updateItemsInCart(op){
    switch (op){
        case 'add':
            itemCounter++;
            break;
        case 'minus':
            itemCounter--;
            break; 
    }
    document.getElementById('numItemsInCart').textContent = itemCounter;
    
}



// REFACTOR: 
function searchByKeyWord() {
    // TODO:
    let input, value;
    input = document.getElementById('searchInput');
    value = input.value.toLowerCase();

    let filteredItems = catalogs.filter((items) => {
    
    return (items.category.categoryName.toLowerCase().includes(value) ||
        items.title.toLowerCase().includes(value) ||
        items.description.toLowerCase().includes(value))
    });

    if (filteredItems.length == 0){
    showStatusMessageClosable("alert-warning","Invalid",value+" doesn't exist!",'searchAlert');
    resetContainer();
    showListOfItems();
    }
    showListOfItemsFiltered(filteredItems);
    input.value = '';

}

// NOTE: disable ENTER key entry
$(function() {
    $('form').submit(function() {return false;});
})

// REFACTOR:
// NOTE: Sets up the webpage for the user: Used onLoad body event.
function setUpCart() {
    resetContainer();
    clearCart();
    initializeCategories();
    initializeItems();
    showListOfItems();
    initNumItemsInCart();

}

// NOTE: function to increment number of items in the cart icon
function initNumItemsInCart(){
    document.getElementById('numItemsInCart').textContent = itemCounter;
}

// DEBUG: REFACTOR:
window.addEventListener("load", setUpCart());
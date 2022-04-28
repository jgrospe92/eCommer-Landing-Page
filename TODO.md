<!-- TODO:  -->
# Problem Statement
1. Enable the user of the online store to browse the list of available items (that is the catalog of items for sale.)
2. Allow the user to search for an item contained in the catalog of items
3. Provide the user with features to add/remove an item to/from his/her shopping cart as well as view the list of items that are stored in his/her shopping cart.
4. Enable the user to see (that is visualize) the details about a specific item (for example, by clicking on view details button)

# Constructors to be implemented
- **Category**: a category object represents a specific category items.
  - ex. Laptops, Desktop PC, computer components, tables, etc.
  - This object must have the following properties:
    - category ID, category name, and description
- **Item**: an item object must be created using a constructor function. An item object must have the following properties:
  - **item ID**: an integer of your choice (must be unique when added to the array of items).
  - **item title**: short description of the item in question.
  - **description**: long description of the item.
  - **brand**: the name(s) of the author(s) (can be one or more).
  - **unit price**: the unit price of the item (float).
  - **quantity in stock**: how many items that are available (integer).
  - **make**: the name of the manufacturer
  - **thumbnail image**: a string that stores a path or the file name of the image
  - **category:**: an object that represents the category to which the current item belongs to. A "has a" relationship (between an item and a category) must be implemented in the Item constructor.

# Objects to be created
- 8 different category objects
  - Street, Urban, Food, Graffiti, Fashion, Wedding, Macro, Nature
- at least 20 items belonging to 8 different categories

# Arrays to be created
- **categories**: an array of **category** objects. This array represents the list of all the available categories items
- **catalog**: an array of **item** objects. This array represents the list of all the available items in the store.
- **cart**: an array of **item** objects. This array represents the **shopping cart**. It contains the items that might be added by the user of the online store.

# Function to be implemented
1. `initializeCategories()`: a parameterless function that creates at least 8 category objects and stores the global array names categories
2. `initializeItems()`: a parameterless function that creates at least 20 items belonging to different categories and stores them in a array named **catalog** 
3. `setUpCart()`: a parameterless function that must be called on page load. This function will use onLoad body event.
   - It calls `initializeCategories()`
   - It calls `initializeItems()`
   - It calls `showListOfItems()` in order to display the list of items the first time the user open the web page. At this point, you can write the `showListOfItems()` function and call it just for testing purposes.
4. `showStatusMessage(cssClass, messageToDisplay)`: when it is called, it shows a **Bootstrap Alerts** status message with the specified cssClass and the message to display as parameters.
   - NOTE: **The message should be shown for 5 seconds only.**
5. `hideStatusMessage()`: it hides the **Bootstrap Alerts** status message from the HTML document.
6. `showListOfItems()`: a parameterless function that processes the catalog. This function must be called only when the HTML document is loaded. The purpose of this function is to show the list of all the available items with the possibility to add an item to the shopping cart.
   -  HINT: when you are listing the items, you should add a button names add to the **Bootstrap Card**. Upon clicking on the add button, the selected item must be added to the cart and the content of the cart must be dynamically updated.
7. `viewCart()`: a parameterless function that displays the content of the shopping cart.
   -  List of items that have been added to the cart
   -  It should be called upon clicking on the view cart button
8. `findItemById(itemId)`: this function receives a item ID as a parameter and performs a search by item ID in the **catalog array** in order to find out any matching item if there is any. It returns matched item object otherwise it returns undefined. **NOTE that the search operation should be case insensitive**
9.  `showItemDetails(itemId)`:
10. `addToCart(itemId)`:
11. `removeFromCart(itemId)`:
12. `searchByKeyword(searchKeyword)`:
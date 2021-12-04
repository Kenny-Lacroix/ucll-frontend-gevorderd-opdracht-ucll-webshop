import { shoppingItem } from './shoppingItem.js';
/* ---"GLOBAL" VARIABLES--- */
let shoppingItems = [];
let shoppingCart = [];
const shippingFee = 5.50;

/* ---FUNCTIONS--- */
const generateItems = (shoppingItemNames) => {
    let cardsHTML = "";
    for (let item = 0; item < shoppingItemNames.length; item++) {
        let randomPrice = ((Math.random() * 10).toFixed(2));
        shoppingItems.push(new shoppingItem(shoppingItemNames[item], randomPrice, `discription ${item}`, `${shoppingItemNames[item]}.jpg`, "Promo Materiaal"));
        cardsHTML += shoppingItems[item].createHTML();
    }
    document.querySelector("#shoppingItems").innerHTML = cardsHTML;
    addEvents();
}

const addEvents = () => {
    shoppingItems.map((shopItem, i) => {
        let niceName = shopItem.ItemName.replace(/ /g, "_");
        document.querySelector(`#btn${niceName}`).addEventListener("click", () => { addToCart(shopItem) });
    })
}

const addToCart = (item) => {
    let niceName = item.ItemName.replace(/ /g, "_");
    let amount = document.querySelector(`#inp${niceName}`).value;
    //Verify if there are already items. if not add the first one
    //if there are already items verify if the one you want to add already exists
    //if not add it
    if (shoppingCart.length > 0) {
        let itemExists = false;
        shoppingCart.map((cartItem) => {
            if (cartItem.hasOwnProperty("item")) {
                if (cartItem.item.ItemName == item.ItemName) {
                    cartItem.amount = parseInt(cartItem.amount) + parseInt(amount);
                    itemExists = true;
                }
            }
        });
        if (!itemExists) {
            let obj = { "amount": parseInt(amount), "item": item };
            shoppingCart.push(obj)
        }
    }
    else {
        let obj = { "amount": parseInt(amount), "item": item };
        shoppingCart.push(obj)
    }
    updateShoppingCart();
}

const updateShoppingCart = () => {
    // calculate shopping amount
    let shoppingTotal = 0
    let articleTotal = 0;

    shoppingCart.map((cartItem) => {
        articleTotal += (cartItem.amount * cartItem.item.ItemPrice)
    });
    shoppingTotal = (shippingFee + articleTotal);

    //Round to 2 decimals
    articleTotal = articleTotal.toFixed(2);
    shoppingTotal = shoppingTotal.toFixed(2);

    //Create itemHTML
    let articles = "";
    shoppingCart.map((cartItem) => {
        articles += /*html*/`    
        <div class="d-flex align-items-center justify-content-between">
        <p>${cartItem.amount}</p>
        <p>${cartItem.item.ItemName}</p>
        <p>${cartItem.item.ItemPrice}</p>
        </div>`
    });

    //Update HTML
    let htmlString = /*html*/`
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Winkelwagen</h5>
                <div class="d-flex align-items-center justify-content-between">
                    <p>QT.</p>
                    <p>Artikel</p>
                    <p>Prijs</p>
                </div>
                <hr />
                ${articles}
                <h5 class="card-title">Te betalen</h5>
                <hr />
                <p id="artikelenPrijs">Artikelen: €${articleTotal}</p>
                <p id="verzendkosten">Verzendkosten: €${shippingFee}</p>
                <p id="totaalPrijs">Totaal prijs: €${shoppingTotal}</p>
                <button type="button" class="btn btn-danger">Checkout</button>
            </div>
        </div>
    `;

    document.querySelector("#ShoppingCart").innerHTML = htmlString;
}

/* ---CODE---*/

let itemNames = ["Paraplu", "Parker Pen", "A4 Notitieblok", "Dopper Drinkbus", "UCLL ballonnen", "Laser Pointer", "Brooddoos", "Koeltas"]
generateItems(itemNames);

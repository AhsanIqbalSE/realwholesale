let cart = document.querySelectorAll('.add_cart');
let products = [{
        name: 'jeans',
        tag: 'pant1',
        price: 1400,
        inCart: 0
    },
    {
        name: 'jeans',
        tag: 'pant2',
        price: 1400,
        inCart: 0
    },
    {
        name: 'jeans',
        tag: 'pant3',
        price: 1400,
        inCart: 0
    },
    {
        name: 'jeans',
        tag: 'pant4',
        price: 1400,
        inCart: 0
    },
    {
        name: 'pant',
        tag: 'pant5',
        price: 1400,
        inCart: 0
    },
    {
        name: 'jeans',
        tag: 'pant5',
        price: 1400,
        inCart: 0
    },
]

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNum(products[i]);
        totalCost(products[i]);
    })
}


function cartNum(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.ca span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.ca span').textContent = 1;

    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
//this for total cost
function totalCost(product) {
    // console.log("the product price is ", product.price);

    let cartCost = localStorage.getItem('totalCost');
    // console.log("the cart price is", cartCost);
    // console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);

    }
}


//this for when reload page cart number will same
function loadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.ca span').textContent = productNumbers;

    }
}
//this for cart page to display
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-items");
    let cartCost = localStorage.getItem('totalCost');

    // console.log(cartItems);

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class="cart-items">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src=" ./images/${item.tag}.JPG">
            <span style="margin-right:30px">${item.name}</span>

            <div class="cart-price"> RS ${item.price}</div>

            <div class="cart-quantity"> 
                <ion-icon name="caret-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
                RS ${item.inCart * item.price}
            </div>
        </div> `
        })
        productContainer.innerHTML += `
        <div class="totalAmountContainer">
            <h4 class="totalTitle">
                Total Amount
            </h4>
            <h4 class="totalAmount">
                RS${cartCost}
            </h4>
        </div>
        <button class="btn-purchase" type="button">PURCHASE</button>
        `
    }
}

loadCartNumbers();
displayCart();
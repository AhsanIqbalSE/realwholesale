    let cart = document.querySelectorAll('.add_cart');
    let products = [{
            name: ' shoes',
            tag: 'shoe1',
            price: 2000,
            inCart: 0
        },
        {
            name: 'shoes',
            tag: 'shoe2',
            price: 2000,
            inCart: 0
        },
        {
            name: 'shoes',
            tag: 'shoe3',
            price: 1200,
            inCart: 0
        },
        {
            name: 'shirt',
            tag: 'shirt1',
            price: 1200,
            inCart: 0
        },
        {
            name: 'shirt',
            tag: 'shirt2',
            price: 1200,
            inCart: 0
        },
        {
            name: 'shirt',
            tag: 'shirt3',
            price: 1200,
            inCart: 0
        },
        {
            name: 'tshirt',
            tag: 'tshirt1',
            price: 1200,
            inCart: 0
        },
        {
            name: 'tshirt',
            tag: 'tshirt2',
            price: 1200,
            inCart: 0
        },
        {
            name: 'tshirt',
            tag: 'tshirt4',
            price: 1200,
            inCart: 0
        },
        {
            name: 'Pant',
            tag: 'pant1',
            price: 1200,
            inCart: 0
        },
        {
            name: 'Wallet',
            tag: 'wallet1',
            price: 1200,
            inCart: 0
        },
        {
            name: 'Pant',
            tag: 'pant2',
            price: 1200,
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
            <img src=" ./images/${item.tag}.JPG">
            <span class="cartimg">${item.name}</span>

            <div style="width:fit-content" > RS ${item.price}</div>

            <div class="cart-quantity"> 
                <span>${item.inCart}</span>
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
        <a href="#" id="purchase" class="btn-purchase" onclick="document.getElementById('id2').style.display='block'">PURCHASE</a>
        <a href="cart.html" class="clear-list" onclick="clearCart()">CLEAR LIST </a>
        `
        }
    }

    loadCartNumbers();
    displayCart();


    function clearCart() {
        document.getElementById('cItem').style.display = 'none';
        localStorage.removeItem('productsInCart');
        localStorage.removeItem('totalCost');
        localStorage.removeItem('cartNumbers');
    }
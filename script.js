"use strict";


let products = [
    {
        name: "Product1",
        price: 150.00,
        picName: "",
    },
    {
        name: "Product2",
        price: 50.00,
        picName: "",
    },
    {
        name: "Product3",
        price: 75.00,
        picName: "",
    },
    {
        name: "Product4",
        price: 100.00,
        picName: "",
    },
    {
        name: "Product5",
        price: 55.00,
        picName: "",
    },
    {
        name: "Product6",
        price: 45.00,
        picName: "",
    },
    {
        name: "Product7",
        price: 200.00,
        picName: "",
    },
    {
        name: "Product8",
        price: 25.00,
        picName: "",
    },
    {
        name: "Product9",
        price: 80.00,
        picName: "",
    },
    {
        name: "Product10",
        price: 12.00,
        picName: "",
    },
];

let cart = [];

let productContainer = document.querySelector(".main-item-container");


let display = () => {
    productContainer.innerHTML = "";
    products.forEach((product, index) => {
        let option = document.createElement("div");
        option.classList.add("option");
        option.setAttribute("class", "optionStyle")
        let name = document.createElement("p");
        name.innerText = product.name;
        let price = document.createElement("p");
        price.innerText = product.price;
        let picName = document.createElement("img")
        let addToCart = document.createElement("button");
        addToCart.innerText = "Add To Cart";
        addToCart.classList.add("add");
        addToCart.setAttribute("data-index", index);


        // will work here//
        picName.setAttribute("src", product.picName)

        option.append(picName, name, price, addToCart);
        productContainer.append(option);
    });
};

display();

let cartContainer = document.querySelector(".cart-container");
let subtotal = 0.00;
let subtotalP = document.querySelector(".subtotal-p")


let cartDisplay = () => {
    cartContainer.innerHTML = "";
    cart.forEach((cart) => {
        let itemContainer = document.createElement("div")
        let itemName = document.createElement("p");
        itemName.innerText = cart.name;
        let itemPrice = document.createElement("p");

        // itemPrice.setAttribute("data-price", cart.price)
        // let price = parseFloat(cart.getAttribute("data-price"));

        itemPrice.innerText = cart.price;
        let itemPicName = document.createElement("img");
        itemPicName.setAttribute("src", cart.picName)
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add("delete");
        //deleteButton.setAttribute("data-index", index);
        itemContainer.append(itemName, itemPrice, itemPicName, deleteButton);
        cartContainer.append(itemContainer);

        // let subtotal = 0.00;
        // subtotal += price;
        // subtotalP.innerText = subtotal;

    });

};


productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        let index = e.target.getAttribute("data-index");
        cart.push(products[index]);
        // let cost = parseFloat(index.getAttribute("price"));
        // subtotal += cost;
        // subtotalP.innerText = subtotal;
        console.log(cart);
        cartDisplay();
    }
});




cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        let index = e.target.getAttribute("data-index");
        cart.splice(index, 1);
        console.log(cart);
        cartDisplay();
    }
})



// vendingButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         let price = parseFloat(button.getAttribute("data-price"));

//         total += price;

//         totalDisplay.innerText = (`Your total is: $${total}.00`);

//     });
// });




//sidenav Cart

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
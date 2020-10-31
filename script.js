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
let cashCheckout = [];
let creditCheckout = [];

let productContainer = document.querySelector(".main-item-container");


let display = () => {
    productContainer.innerHTML = "";
    products.forEach((item, index) => {
        let option = document.createElement("div");
        option.classList.add("option");
        option.setAttribute("class", "optionStyle")
        let name = document.createElement("p");
        name.innerText = item.name;
        let price = document.createElement("p");
        price.innerText = item.price;
        let picName = document.createElement("img")
        let addToCart = document.createElement("button");
        addToCart.innerText = "Add To Cart";
        addToCart.classList.add("add");
        addToCart.setAttribute("data-index", index);
        // will work here//
        picName.setAttribute("src", item.picName)

        option.append(picName, name, price, addToCart);
        productContainer.append(option);
    });
};

display();

let cartContainer = document.querySelector(".cart-container");
let subtotalP = document.querySelector(".subtotal-p")
let taxP = document.querySelector(".tax-p");
let totalP = document.querySelector(".total-p")
let formContainer = document.querySelector(".form-container");
let moneyForm = document.querySelector(".money-form");
let sideNav = document.querySelector(".sidenav");
let cashContainer = document.querySelector(".cash-container");
let creditItemContainer = document.querySelector(".credit-item-container")
let main = document.querySelector(".main1")
let cashTotal = document.querySelector(".cash-total")
let subtotalCashP = document.querySelector(".subtotal-cash-p")
let taxCashP = document.querySelector(".tax-cash-p");
let totalCashP = document.querySelector(".total-cash-p");
let changeCashP = document.querySelector(".change-cash-p");

let cartDisplay = () => {
    cartContainer.innerHTML = "";
    let subtotal = 0.00;
    
    cart.forEach((item, index) => {
        let itemContainer = document.createElement("div")
        let itemName = document.createElement("p");
        itemName.innerText = item.name;
        let itemPrice = document.createElement("p");
        itemPrice.innerText = item.price;
        let itemPicName = document.createElement("img");
        itemPicName.setAttribute("src", item.picName)
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add("delete");
        deleteButton.setAttribute("data-index", index);
        itemContainer.append(itemName, itemPrice, itemPicName, deleteButton);
        cartContainer.append(itemContainer);     
        
        subtotal += item.price;
    });

    let total = 0.00;
    subtotalP.innerText = `subtotal:$${subtotal}`;
    subtotalCashP.innerText = `subtotal:$${subtotal}`;
    let tax = subtotal *.06;
    taxP.innerText= `tax:$${tax}`;
    taxCashP.innerText =`tax:$${tax}`;
    total = subtotal += tax;
    totalP.innerText= `total:$${total}`;
    totalCashP.innerText= `total:$${total}`;
};


productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        let index = e.target.getAttribute("data-index");
        cart.push(products[index]);
        cashCheckout.push(products[index]);
        creditCheckout.push(products[index]);
        console.log(cart);
        cartDisplay();
    }
});


let creditCheckoutDisplay = ()=>{
    formContainer.classList.remove("hide")
        creditCheckout.forEach((item) => {
            let creditName = document.createElement("p");
            creditName.innerText = item.name;
            let creditPrice = document.createElement("p");
            creditPrice = item.price;
            creditItemContainer.append(creditName, creditPrice);
        })
        let closeFormBtn = document.createElement("button")
            closeFormBtn.innerText = "X";
            closeFormBtn.classList.add("close-form") 
            formContainer.append(closeFormBtn);
}



let cashCheckoutDisplay = ()=>{
    //cashContainer.innerHTML = "";
    cashContainer.classList.remove("hide")
        cashCheckout.forEach((item)=>{
            let cashPrice = document.createElement("p")
            cashPrice = item.price;
            let cashName= document.createElement("p");
            cashName.innerText = item.name;
        // let cartSubtotal = document.createElement("p")
        // cartSubtotal.innerText = subtotal;
            cashTotal.append(cashName, cashPrice);
            console.dir(cashPrice);
    });

};





sideNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        let index = e.target.getAttribute("data-index");
        cart.splice(index, 1);
        console.log(cart);
        cartDisplay();
    } else if(e.target.classList.contains("credit")){
        closeNav();
        creditCheckoutDisplay();
        console.log(creditCheckout);
    } else if(e.target.classList.contains("cash")){
        // let index = e.target.getAttribute("data-index");
        // cashCheckout.push(products[index]);
        closeNav();
        cashCheckoutDisplay();
        // console.log(cashCheckout);
    }
});

main.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-form")) {
        formContainer.classList.add("hide")
    }
})




//sidenav Cart

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
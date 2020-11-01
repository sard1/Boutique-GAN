"use strict";


let products = [
    {
        name: "Ripple Gator",
        price: 150.00,
        picName: "assets/ripple-gator.jpeg",
    },
    {
        name: "Pearlish Reversi",
        price: 50.00,
        picName: "assets/pearlish-reversi.jpeg",
    },
    {
        name: "Crawling Ocean",
        price: 75.00,
        picName: "assets/crawling-oceans.jpeg",
    },
    {
        name: "Snake Plissken",
        price: 240.00,
        picName: "assets/snake-plissken.jpeg",
    },
    {
        name: "Irredescent Trainer",
        price: 100.00,
        picName: "assets/irredescent-trainer.jpeg",
    },
    {
        name: "Ethereal Hi",
        price: 55.00,
        picName: "assets/ethereal-hi-top.jpeg",
    },
    {
        name: "Chem'd Out",
        price: 45.00,
        picName: "assets/chemd-out.jpeg",
    },
    {
        name: "Void Runner",
        price: 12.00,
        picName: "assets/void-runner.jpeg",
    },
    {
        name: "Jupiter Biscuit",
        price: 200.00,
        picName: "assets/jupiter-biscuit.jpeg",
    },
    {
        name: "OK Computer",
        price: 25.00,
        picName: "assets/ok-computer.jpeg",
    },
    {
        name: "Aurora Trainer",
        price: 80.00,
        picName: "assets/aurora-trainer.jpeg",
    },
   
    {
        name: "Void Stares Back",
        price: 666.00,
        picName: "assets/void-stares-back.jpeg",
    },
    
];

let cart = [];
let cashCheckout = [];
let creditCheckout = [];
let receiptArray = [];

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
        let picName = document.createElement("img");
        picName.classList.add("product-pic");
        picName.setAttribute("style", "width=150px")
        let addToCart = document.createElement("button");
        addToCart.innerText = "add to cart";
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
let cashPaymentForm = document.querySelector(".cash-payment-form");
let receiptButton = document.querySelector(".receipt-button")
let receiptButtonCredit = document.querySelector(".receipt-button-credit")
let receiptContainer = document.querySelector(".receipt-container")
let receiptItems = document.querySelector(".receipt-items")
let changeReceiptP = document.querySelector(".change-receipt-p")
let stp = document.querySelector(".stp")
let stp1 = document.querySelector(".stp1")
let stp2 = document.querySelector(".stp2")

let cartDisplay = () => {
    cartContainer.innerHTML = "";
    let subtotal = 0.00;

    cart.forEach((item, index) => {
        let itemContainer = document.createElement("div")
        itemContainer.classList.add("cartStyle")
        let itemName = document.createElement("p");
        itemName.innerText = item.name;
        let itemPrice = document.createElement("p");
        itemPrice.innerText = item.price;
        let itemPicName = document.createElement("img");
        itemPicName.classList.add("product-pic");
        itemPicName.setAttribute("src", item.picName)
        itemPicName.setAttribute("style", "width=10px")
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add("delete");
        deleteButton.setAttribute("data-index", index);
        itemContainer.append(itemName, itemPrice, itemPicName, deleteButton);
        cartContainer.append(itemContainer);

        subtotal += item.price;
    });

    let total = 0.00;
    let tax = subtotal * .06;
    subtotalP.innerText = `subtotal:$${subtotal}`;
    taxP.innerText = `tax:$${tax}`;
    total = subtotal += tax;
    totalP.innerText = `total:$${total}`;
    subtotalCashP.innerText = `subtotal:$${subtotal}`;
    taxCashP.innerText = `tax:$${tax}`;
    totalCashP.innerText = `total:$${total}`;
    stp.innerText= `subtotal:$${subtotal}`;
    stp1.innerText= `tax:$ ${tax}`;
    stp2.innerText= `total:$ ${total}`;
};




productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        let index = e.target.getAttribute("data-index");
        cart.push(products[index]);
        cashCheckout.push(products[index]);
        creditCheckout.push(products[index]);
        receiptArray.push(products[index]);
        console.log(cart);

        cartDisplay();
    }
});


let creditCheckoutDisplay = () => {
    formContainer.classList.remove("hide")
    creditCheckout.forEach((item) => {
        let creditName = document.createElement("p");
        creditName.innerText = item.name;
        let creditPrice = document.createElement("p");
        creditPrice = item.price;
        creditItemContainer.append(creditName, creditPrice);
    })
}



let cashCheckoutDisplay = () => {
    //cashContainer.innerHTML = "";
    cashContainer.classList.remove("hide")
    cashCheckout.forEach((item) => {
        let cashPrice = document.createElement("p")
        cashPrice = item.price;
        let cashName = document.createElement("p");
        cashName.innerText = item.name;
        // let cartSubtotal = document.createElement("p")
        // cartSubtotal.innerText = subtotal;
        cashTotal.append(cashName, cashPrice);
        console.dir(cashPrice);
    });

};


let receiptDisplay = () => {
    receiptArray.forEach((item) =>{
        let receiptName = document.createElement("p");
        receiptName.innerText = item.name;
        let receiptPrice = document.createElement("p");
        receiptPrice = item.price;
        receiptItems.append(receiptName, receiptPrice);
        // moneyForm.append(receiptItems);
    })
    // let closeFormBtn = document.createElement("button")
    // closeFormBtn.innerText = "X";
    // closeFormBtn.classList.add("close-form")
    // receiptContainer.append(closeFormBtn);
}


main.addEventListener("submit", (e) => {
    e.preventDefault();
    let snapshot = new FormData(cashPaymentForm);
    let amountTendered = snapshot.get("cash-amount");
    console.log(amountTendered);
    let totalCash = document.getElementById("tcp").textContent;
    let totalCashNum = totalCash.replace("total:$", "");
    console.log(totalCashNum);
    let change = amountTendered - totalCashNum;
    changeCashP.innerText = `Change: $${change}`;
    changeReceiptP.innerText = `Change: $${change}`;
    receiptButton.classList.remove("hide");
    receiptButtonCredit.classList.remove("hide");
});

// receiptButton.addEventListener("click", (e)=>{
//     cashContainer.classList.add("hide");

//     receiptContainer.classList.remove("hide");
//     receiptDisplay();
// })



sideNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        let index = e.target.getAttribute("data-index");
        cart.splice(index, 1);
        creditCheckout.splice(index, 1);
        cashCheckout.splice(index, 1);
        console.log(cart);
        cartDisplay();
    } else if (e.target.classList.contains("credit")) {
        closeNav();
        creditCheckoutDisplay();
        console.log(creditCheckout);
    } else if (e.target.classList.contains("cash")) {
        // let index = e.target.getAttribute("data-index");
        // cashCheckout.push(products[index]);
        closeNav();
        cashCheckoutDisplay();
        // console.log(cashCheckout);
    }
});

function refreshPage(){
    window.location.reload();
}


main.addEventListener("click", (e) => {
    if(e.target.classList.contains("refresh-page")){
        refreshPage();
    }else if (e.target.classList.contains("close-form")) {
        formContainer.classList.add("hide")
        cashContainer.classList.add("hide")
        receiptContainer.classList.add("hide")
    } else if(e.target.classList.contains("receipt-button-credit" )){
        changeReceiptP.classList.add("hide")
        formContainer.classList.add("hide");
        receiptContainer.classList.remove("hide");
        receiptDisplay();
    }else if(e.target.classList.contains("receipt-button" )){
        cashContainer.classList.add("hide");
        receiptContainer.classList.remove("hide");
        receiptDisplay();
    }else if(e.target.classList.contains("refresh-page")){
        refreshPage();
    }
})




//sidenav Cart

//experimenting with animation--when you click add to cart, cart icon wiggles
// wiggleCart = document.getElementById("header-cart")

// wiggleCart.addEventListener("click", function(e){
//     if(e.target.classList.contains("add"))
//     e.preventDefault;
//     wiggleCart.classList.remove("wiggle")
//     void wiggleCart.OffsetWidth;
//     wiggleCart.classList.add("wiggle")
// })

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
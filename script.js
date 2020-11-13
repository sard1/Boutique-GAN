"use strict";


let products = [
    {
        name: "Ripple Gator",
        price: 220.00,
        desc: "\"florida without the man\"",
        picName: "assets/ripple-gator.jpeg",
    },
    {
        name: "Pearlish Reversi",
        price: 280.00,
        desc: "\"be the diver\"",
        picName: "assets/pearlish-reversi.jpeg",
    },
    {
        name: "Crawling Ocean",
        price: 370.00,
        desc: "\"see you on the beach\"",
        picName: "assets/crawling-oceans.jpeg",
    },
    {
        name: "Iroquois Pliskin",
        price: 240.00,
        desc: "\"call me Snake\"",
        picName: "assets/snake-plissken.jpeg",
    },
    {
        name: "Irredescent Shock",
        price: 210.00,
        desc: "\"race to the finish\"",
        picName: "assets/irredescent-trainer.jpeg",
    },
    
    {
        name: "Aurora Trainer",
        price: 180.00,
        desc: "\"can I see it?\"\"...no.\"",
        picName: "assets/aurora-trainer.jpeg",
    },
    {
        name: "OK Computer",
        price: 425.00,
        desc: "\"...we're that band...\"",
        picName: "assets/ok-computer.jpeg",
    },
    {
        name: "Ethereal Hi",
        price: 155.00,
        desc: "\"on it, not of it\"",
        picName: "assets/ethereal-hi-top.jpeg",
    },
    {
        name: "Chem Doctor",
        price: 245.00,
        desc: "\"prepare for fallout\"",
        picName: "assets/chemd-out.jpeg",
    },
    {
        name: "Null Runner",
        price: 333.00,
        desc: "\"this is the exit\"",
        picName: "assets/void-runner.jpeg",
    },
    {
        name: "Jupiter Biscuit",
        price: 200.00,
        desc: "\"the gravy's on Europa\"",
        picName: "assets/jupiter-biscuit.jpeg",
    },   
    {
        name: "Void Stares Back",
        price: 666.00,
        desc: "\"don't look too hard...\"",
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
        let desc = document.createElement("p");
        desc.classList.add("description")
        desc.innerText = item.desc;
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

        option.append(picName, name, desc, price, addToCart);
        productContainer.append(option);
    });
};

display();

let cartContainer = document.querySelector(".cart-container");
let subtotalP = document.querySelector(".subtotal-p")
let taxP = document.querySelector(".tax-p");
let totalP = document.querySelector(".total-p")
let formContainer = document.querySelector(".form-container");
let popupDiv = document.querySelector(".popup-div");
let moneyForm = document.querySelector(".money-form");
let sideNav = document.querySelector(".sidenav");
let cashContainer = document.querySelector(".cash-container");
let creditItemContainer = document.querySelector(".credit-item-container")
let cardAccepted = document.querySelector(".card-accepted")
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
let cstp = document.querySelector(".cstp")
let cstp1 = document.querySelector(".cstp1")
let cstp2 = document.querySelector(".cstp2")
let rstp = document.querySelector(".rstp")
let rstp1 = document.querySelector(".rstp1")
let rstp2 = document.querySelector(".rstp2")


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
        deleteButton.innerText = "x";
        deleteButton.classList.add("delete");
        deleteButton.setAttribute("data-index", index);
        itemContainer.append(itemPicName, deleteButton, itemName, itemPrice, );
        cartContainer.append(itemContainer);

        subtotal += item.price;
    });

   
    let tax = subtotal * .06;
    let total = subtotal + tax;
    
    console.log(total);
    //subtotalP.innerText = `subtotal:$${subtotal}`;
    //taxP.innerText = `tax:$${tax}`;
   
    //totalP.innerText = `total:$${total}`;
    subtotalCashP.innerText = `subtotal:$${subtotal}`;
    taxCashP.innerText = `tax:$${tax.toFixed(2)}`;
    totalCashP.innerText = `total:$${total.toFixed(2)}`;
    cstp.innerText = `subtotal:$${subtotal}`;
    cstp1.innerText = `tax:$${tax.toFixed(2)}`;
    cstp2.innerText = `total:$${total.toFixed(2)}`;
    stp.innerText= `subtotal:$${subtotal}`;
    stp1.innerText= `tax:$${tax.toFixed(2)}`;
    stp2.innerText= `total:$${total.toFixed(2)}`;
    rstp.innerText = `subtotal:$${subtotal}`;
    rstp1.innerText = `tax:$${tax.toFixed(2)}`;
    rstp2.innerText = `total:$${total.toFixed(2)}`;
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
    creditItemContainer.innerHTML="";
    creditCheckout.forEach((item) => {
        let creditName = document.createElement("p");
        creditName.innerText = item.name;
        let creditPrice = document.createElement("p");
        creditPrice = item.price;
        creditItemContainer.append(creditName, creditPrice);
    })
}



let cashCheckoutDisplay = () => {
    cashTotal.innerHTML = "";
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
    cardAccepted.classList.remove("hide");
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
        formContainer.classList.remove("hide")
        creditCheckoutDisplay();
        console.log(creditCheckout);
    } else if (e.target.classList.contains("cash")) {
        cashContainer.classList.remove("hide")
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

//hide
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
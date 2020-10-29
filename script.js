"use strict";


let products = [
    {
        name:"Product1",
        price:150.00,
        picName: "" ,
    },
    {
        name:"Product2",
        price:50.00,
        picName: "" ,
    },
    {
        name:"Product3",
        price:75.00,
        picName: "" ,
    },
    {
        name:"Product4",
        price:100.00,
        picName: "" ,
    },
    {
        name:"Product5",
        price:55.00,
        picName: "" ,
    },
    {
        name:"Product6",
        price:45.00,
        picName: "" ,
    },
    {
        name:"Product7",
        price:200.00,
        picName: "" ,
    },
    {
        name:"Product8",
        price:25.00,
        picName: "" ,
    },
    {
        name:"Product9",
        price:80.00,
        picName: "" ,
    },
    {
        name:"Product10",
        price:12.00,
        picName: "" ,
    },
];

let productContainer= document.querySelector(".main-item-container");
 

let display =()=>{
    productContainer.innerHTML="";
    products.forEach((product, index)=>{
        let option = document.createElement("div");
        option.classList.add("option");
        let name = document.createElement("p");
        name.innerText = product.name;
        let price = document.createElement("p");
        price.innerText= product.price;
        let picName= document.createElement("img")
        let addToCart = document.createElement("button");
        addToCart.innerText="Add To Cart";
        addToCart.setAttribute("data-index", index);
        // will work here//
        picName.setAttribute("src", product.picName)
        option.append(picName,name,price,addToCart);
        productContainer.append(option);
    });
};

display();
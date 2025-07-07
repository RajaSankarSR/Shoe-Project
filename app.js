const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")






                //   here is the product change color Area
   const products =[ 
     {
    id: 1,
    title: "Air Force",
    price: 2999,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 3500,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 1999,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 2999,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 3499,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];


let choosenProduct = products[0]
const currentProductPrice = document.querySelector(".productPrice");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductImg = document.querySelector(".productImg");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

              // name click slider show area//
menuItems.forEach((item,index)=>{
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform =`translateX(${-100 * index}vw)`;

        //change the choosen the product
        choosenProduct = products[index]

   // change text of curentproduct
   currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = "₹" + choosenProduct.price;
   currentProductImg.src = choosenProduct.colors[0].img;

         //assing new colors for shoes
       currentProductColors.forEach((color,index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
       });

    });
});

 
currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
  })
})

//sizes slection

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) =>{
    size.style.backgroundColor = "white";
    size.style.color = "black";
  });
    size.style.backgroundColor = "black";
    size.style.color = "white";

    });
});
//buy now open details

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
});
close.addEventListener("click",()=>{
  payment.style.display="none"
})

// cart funtions

const cartcount = document.querySelector(".cartItemCount");
const cartIcon = document.getElementById("cartIcon");
const sidebar = document.querySelector(".cartItems");
const closebtn = document.querySelector(".closeButton");
const cartlist = document.querySelector(".cartItems ul");
const totalamount = document.querySelector(".TotalItemsCart span");

cartIcon.addEventListener("click",() => {
  sidebar.classList.toggle("active")
});
   closebtn.addEventListener("click",()=> {
    sidebar.classList.toggle("active");
   });

var productbox = document.querySelector(".product")
let showitem = items.map((item,key)=>{

  return `<div class="product">
   <img src="${item.img}">
   <P>${item.title}</p>
   <span class="price">₹${item.price}</span>
   <button class="cartButton" onClick="tocart(${key})">
   </button>
   </div>`
}).join("")

productbox.innerHTML=showitem

let storeproduct = [];{
if(storeproduct[id]=null){
  storeproduct[id]=items[id]
  storeproduct[id].cartcount=1
}
else{
  storeproduct[id].cartcount += 1
}
reloadproduct()
}
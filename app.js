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

cartIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
closebtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

let cart = [];

// Add to cart from product page
const addToCartBtn = document.querySelector(".cartButton");


function renderCart() {
  cartlist.innerHTML = cart.length === 0 ? "<li>Cart is empty</li>" : cart.map((item, idx) => `
    <li style="display: flex; align-items: center; gap: 10px;">
      <img src="${item.colors[0].img}" style="width:50px;height:50px;">
      <span style="flex:1;">${item.title}  ₹${item.price}</span>
      <div style="display: flex; align-items: center; gap: 7px;">
        <button class="decrement" data-idx="${idx}">-</button>
        <span style="min-width: 30px; text-align: center; display: inline-block;">${item.quantity}</span>
        <button class="increment" data-idx="${idx}">+</button>
      </div>
      <button class="remove" data-idx="${idx}">X</button>
    </li>
  `).join("");
  totalamount.textContent = "₹" + cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    // Store the currently selected product in cart
    addToCart({
      ...choosenProduct,
    });
  });
}

function addToCart(product) {
  const found = cart.find(item => item.id === product.id);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  cartcount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

cartlist.addEventListener("click", function (e) {
  const idx = parseInt(e.target.getAttribute("data-idx"));
  if (e.target.classList.contains("increment")) {
    cart[idx].quantity += 1;
    renderCart();
    updateCartCount();
  }
  if (e.target.classList.contains("decrement")) {
    if (cart[idx].quantity > 1) {
      cart[idx].quantity -= 1;
    } else {
      cart.splice(idx, 1);
    }
    renderCart();
    updateCartCount();
  }
  if (e.target.classList.contains("remove")) {
    cart.splice(idx, 1);
    renderCart();
    updateCartCount();
  }
});

const cartBuyBtn = document.querySelector(".buy");

cartBuyBtn.addEventListener("click",() => {
  payment.style.display = "flex";
}) ;

var alert=document.querySelector(".alert")
var s=document.querySelector(".payment")
function alertmsg(){
  
alert.style.display=("flex");
setTimeout(()=>{
    alert.style.display=("none")
  },1000)
payment.style.display=("none")
}
renderCart();
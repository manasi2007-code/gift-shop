const products=[
{name:"Teddy Bear",price:499,img:"https://i.imgur.com/6X4X9yC.jpg"},
{name:"Chocolate Box",price:399,img:"https://i.imgur.com/YZ6F9yS.jpg"},
{name:"Flower Bouquet",price:699,img:"https://i.imgur.com/9Xn4F7F.jpg"},
{name:"Gift Hamper",price:999,img:"https://i.imgur.com/TkIrScD.jpg"},
{name:"Perfume",price:1499,img:"https://i.imgur.com/UM3mrju.jpg"},
{name:"Watch",price:1999,img:"https://i.imgur.com/e0TnL0K.jpg"},
{name:"Photo Mug",price:299,img:"https://i.imgur.com/UR2WmQp.jpg"},
{name:"Lamp",price:799,img:"https://i.imgur.com/kPz4K8H.jpg"}
]

let cart=JSON.parse(localStorage.getItem("cart"))||[]

const productContainer=document.getElementById("products")

function displayProducts(list){

productContainer.innerHTML=""

list.forEach((p,i)=>{

productContainer.innerHTML+=`

<div class="card">

<img src="${p.img}">

<h3>${p.name}</h3>

⭐ ⭐ ⭐ ⭐

<p>₹${p.price}</p>

<button onclick="addCart(${i})">Add to Cart</button>

</div>

`

})

}

displayProducts(products)

function addCart(index){

cart.push(products[index])

localStorage.setItem("cart",JSON.stringify(cart))

updateCart()

}

function updateCart(){

let items=document.getElementById("cartItems")

let total=0

items.innerHTML=""

cart.forEach((p,i)=>{

total+=p.price

items.innerHTML+=`<li>${p.name} ₹${p.price}
<button onclick="removeItem(${i})">X</button>
</li>`

})

total+=50

document.getElementById("total").innerText=total

}

function removeItem(i){

cart.splice(i,1)

localStorage.setItem("cart",JSON.stringify(cart))

updateCart()

}

function toggleCart(){

let c=document.getElementById("cart")

c.style.display=(c.style.display=="block")?"none":"block"

updateCart()

}

function applyCoupon(){

let code=document.getElementById("coupon").value

if(code=="GIFT10"){

alert("10% Discount Applied")

}

}

document.getElementById("search").addEventListener("input",function(){

let text=this.value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(text))

displayProducts(filtered)

})

document.getElementById("priceFilter").addEventListener("change",function(){

let val=this.value

if(val=="all") return displayProducts(products)

let filtered=products.filter(p=>p.price<=val)

displayProducts(filtered)

})
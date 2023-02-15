// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}


// //cart page
// if(document.reasyState == "loading"){
//     document.addEventListener("DOMContentLoaded",ready);
// }else{
//     ready();
// }

// //fundtions
// function ready(){
//     var removeCartButtons = document.getElementsByClassName('cart-remove')
//     console.log(removeCartButtons)
//     for(var i =0; i< removeCartButtons.length; i++){
//         var button = removeCartButtons[i]
//         button.addEventListener('click',removeCartItem)
//     }
// }

// //quantity changes
// var quantityInputs = document.getElementsByClassName('cart-quantity')
// for (var i =0; i< quantityInputs.length; i++) {
//     var input = quantityInputs[i];
//     input .addEventListener("change", quantityChanged);
// }
// //add to cart

// var addCart = document.getElementsByClassName('add-cart')
// for (var i =0; i< addCart.length; i++) {
//     var button = addCart[i];
//     button.addEventListener("click", addCartClicked);

// }

// function removeCartItem(event){
//     var buttonClicked =event.target
//     buttonClicked.parentElement.remove()
//     updatetotal()
// }

// //quantity changes
// function quantityChanged(event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value<=0){
//         input.value = 1;
//     }
//     updatetotal();
// }

// //add To card function
// function addCartClicked(event){
//     var button = event.target
//     var shopProducts = button.parentElement
    
// }

// //update total

// function updatetotal(){
//     var cartContent = document.getElementsByClassName('cart-content')[0]
//     var cartBoxes = cartContent.getElementsByClassName('cart-box')
//     var total = 0;
//     for(var i =0; i< cartBoxes.length; i++){
//         var cartBox=cartBoxes[i];
//         var priceElement = cartBox.getElementsByClassName('cart-price')[0];
//         var price = parseFloat(priceElement.innerText.replace("$",""));
//         var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
//         var quantity = quantityElement.value;
//         total = total + (price * quantity);

//         document.getElementsByClassName('total-price')[0].innerText = "$"+ total;
     
//     }
// }
let formBtn = document.getElementById("close-form");
let form = document.querySelector("form");

formBtn.addEventListener('click', toggler);

function toggler(){
    form.classList.toggle('hide');
    formBtn.innerText === "X" ? formBtn.innerText = "+" : formBtn.innerText = "X";
   
}

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let emailList = [];

form.addEventListener('submit', event => {
    event.preventDefault();
    validateForm();
});

function validateForm(){
    if(!nameInput.value && !emailInput.value){
        alert("Enter your name and email.");
        if(!nameInput.value) {
            nameInput.style.border = "2px solid red";
        }

        if(!emailInput.value)
        {
            emailInput.style.border = "2px solid red";
        }
    }
    else{
        emailList.push({name: nameInput.value, email: emailInput.value});
        displayThankYou();
    }
}

function displayThankYou(){
    let formContainer = document.querySelector(".form-container");
    formContainer.innerText = "Thank you for subscribing!";

    
}

function removeMessage(){
    setTimeout(function(){
        formContainer.remove();
    }, 3000);
}

nameInput.addEventListener('change', event => {
    nameInput.style.border = "none";
});

emailInput.addEventListener('change', event => {
    emailInput.style.border = "none";
});

let cart = document.createElement("div");
let main = document.querySelector(".hero");
let cartItems = 0;

function addToCart(){
    if(cartItems === 0)
    {
        cartItems++;
        cart.setAttribute("class", "cart-display");
        // cart.classList.add("cart-display");
        cart.innerText = `Your Cart: ${cartItems} item`;
    }
    else {
        cartItems++;
        cart.innerText = `Your Cart: ${cartItems} items`;
    }
    main.appendChild(cart);
}
let formBtn = document.getElementById("close-form");
let form = document.querySelector("form");

let emailList = [];
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");

let cart = document.createElement("div");
let main = document.querySelector(".hero");
let cartItems = 0;

let toggler = () => {
    form.classList.toggle('hide');
    formBtn.innerText === "X" ? formBtn.innerText = "+" : formBtn.innerText = "X";
   
}

formBtn.addEventListener('click', toggler);




form.addEventListener('submit', event => {
    event.preventDefault();
    validateForm();
});

function validateForm(){
    if(!nameInput.value || !emailInput.value){
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

let displayThankYou =() => {
    let formContainer = document.querySelector(".form-container");
    formContainer.innerText = "Thank you for subscribing!";
    removeMessage();
}

let removeMessage =() => {
    let formContainer = document.querySelector(".form-container");
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

let addToCart = () =>{
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
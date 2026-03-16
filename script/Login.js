
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click',function(event){

    event.preventDefault();

    const number = document.getElementById('inputNumber').value;

    const pin = document.getElementById('inputPin').value;

    if(number.length===11){
        console.log("yeas")
        if(pin.length===4){
            window.location.href="main.html";
            console.log("thik pin")
        }else{
            console.log("Try again.");
        }
    }else{
        console.log("Input Valid Number.")
    }

});


// commen used in background

// bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500


// common used in text color 
// bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent
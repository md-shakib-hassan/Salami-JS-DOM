
document.getElementById('addMoneyBtn').addEventListener('click', function(event){
     
    event.preventDefault();

    const number = document.getElementById('inputNumber').value;

    const pin = document.getElementById('inputPin').value;

    const mainBalance = document.getElementById("mainBalance");

    const addMoney = document.getElementById('addMoney').value;


    if(number.length===11){
        console.log("yeas")
        if(pin.length===4){
            
            mainBalance.innerText = addMoney;
            
        }else{
            console.log("Try again.");
        }
    }else{
        console.log("Input Valid Number.")
    }
});

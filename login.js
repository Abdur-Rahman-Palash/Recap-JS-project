document.getElementById('btn-logged').addEventListener('click', function(event){
    event.preventDefault();
    const input = document.getElementById('mobile-number').value;
    const inputNumber1 = parseFloat(input);
    const inputPin = document.getElementById('pin-number').value;
    const inputNumber2 = parseFloat(inputPin)
    if(inputNumber1 === 123456 && inputNumber2 === 123){
        console.log("successfully logged in")
        window.location.href = "./home.html"
    }else{
        alert('wrong pin or number')
    }
    
    })
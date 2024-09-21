document.getElementById('btn-cash-out-money').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = getInputValueById('input-cash-money');
    console.log(cashOut)
    const inputPin = getInputValueById('input-pin1');
    console.log(inputPin)
    if(inputPin === 123){
        console.log('successfully done')
        const mainBalance = getTextValueById('main-balance');
        console.log(mainBalance)
        const newBalance = mainBalance - cashOut;
        console.log(newBalance)
        document.getElementById('main-balance').innerText = newBalance;
    }else{
        alert('Failed to cash out')
    }
})
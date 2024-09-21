document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    const payBill = getInputValueById('input-pay-bill');
    const pinNumber = getInputValueById('input-pin3');
    if(pinNumber === 123){
        const balance = getTextValueById('main-balance');
        const newBalance = balance - payBill;
        document.getElementById('main-balance').innerText = newBalance;
    }
})
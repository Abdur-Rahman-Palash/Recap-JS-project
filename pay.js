document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    const payBill = getInputValueById('input-pay-bill');
    const pinNumber = getInputValueById('input-pin3');
    if(pinNumber === 123){
        const balance = getTextValueById('main-balance');
        const newBalance = balance - payBill;
        document.getElementById('main-balance').innerText = newBalance;



        const p = document.createElement('p');
        p.style.backgroundColor = 'yellow';
        p.innerText = `Added:${addMoneyNumber}tk . New Balance ${newBalance}`;
        const transactionContainer =document.getElementById('Transaction-forms');
        transactionContainer.appendChild(p);
    }
    else{
        alert('try again')
    }
})
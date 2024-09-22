document.getElementById('btn-transfer').addEventListener('click', function(event){
    event.preventDefault();
    const transferMoney = getInputValueById('input-transfer');
    const inputPin = getInputValueById('input-pin2');
    if(inputPin === 123){
        console.log('successfully transfer money');
        const balance = getTextValueById('main-balance');
        const newBalance = balance-transferMoney;
        document.getElementById('main-balance').innerText = newBalance;


        const p = document.createElement('p');
        p.style.backgroundColor = 'yellow';
        p.innerText = `Added:${addMoneyNumber}tk . New Balance ${newBalance}`;
        const transactionContainer =document.getElementById('Transaction-forms');
        transactionContainer.appendChild(p);
    }
    else{
        alert('Failed to transfer')
    }
})
document.getElementById('btn-cash-out-money').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = getInputValueById('input-cash-money');
    const inputPin = getInputValueById('input-pin1');
    if(isNaN(cashOut)){
        alert('no')
      }
    if(inputPin === 123){
        console.log('successfully done')
        const mainBalance = getTextValueById('main-balance');
        console.log(mainBalance)
        const newBalance = mainBalance - cashOut;
        console.log(newBalance)
        document.getElementById('main-balance').innerText = newBalance;

        const p = document.createElement('p');
        p.style.backgroundColor = 'yellow';
        p.innerText = `Added:${addMoneyNumber}tk . New Balance ${newBalance}`;
        const transactionContainer =document.getElementById('Transaction-forms');
        transactionContainer.appendChild(p);
    }
    else{
        alert('Failed to cash out')
    }
})
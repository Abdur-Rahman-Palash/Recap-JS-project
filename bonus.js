document.getElementById('btn-bonus').addEventListener('click', function(event){
    event.preventDefault();
const addMoneyNumber = getInputValueById('input-bonus');
 const inputPin = getInputValueById('input-pin4');
 if(inputPin === 123 && addMoneyNumber === 800){
    console.log('successfully get bonus')
    const mainBalance = getTextValueById('main-balance');
    const newBalance = mainBalance + addMoneyNumber;
    document.getElementById('main-balance').innerText = newBalance;


    //
    const p = document.createElement('p');
    p.style.backgroundColor = 'yellow';
    p.innerText = `Added:${addMoneyNumber}tk . New Balance ${newBalance}`;
    const transactionContainer =document.getElementById('Transaction-forms');
    transactionContainer.appendChild(p);
 }
 else{
    alert('failed to get bonus')
 }
})






document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
const addMoneyNumber = getInputValueById('input-add-money');
 const inputPin = getInputValueById('input-pin');
 if(inputPin === 123){
    console.log('successfully add money')
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
    alert('failed to add money')
 }
})






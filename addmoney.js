//basic part
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
const addMoneyNumber = getInputValueById('input-add-money');
 const inputPin = getInputValueById('input-pin');
 if(inputPin === 123){
    console.log('successfully add money')
    const mainBalance = getTextValueById('main-balance');
    const newBalance = mainBalance + addMoneyNumber;
    document.getElementById('main-balance').innerText = newBalance;
 }
 else{
    alert('failed to add money')
 }
})




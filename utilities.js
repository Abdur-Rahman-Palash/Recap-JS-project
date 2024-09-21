function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}
function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}
function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('Transfer-Money-form').classList.add('hidden');
    document.getElementById('Get-Bonus-form').classList.add('hidden');
    document.getElementById('Pay-Bill-form').classList.add('hidden');
    document.getElementById('Transaction-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
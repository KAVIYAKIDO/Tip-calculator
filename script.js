function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter a valid number of people.");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / numberOfPeople;
    const totalAmount = (billAmount + billAmount * tipPercentage) / numberOfPeople;

    document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}
let displayValue = "";

function appendToDisplay(value) {
    if (value === '') {
        // Focus on the hidden input for 'Other Service'
        document.getElementById('hiddenInput').focus();
    } else {
        displayValue += "+" + value;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function calculate() {
    try {
        // Remove the leading '+' before evaluating
        let result = eval(displayValue.substring(1));
        displayValue = result.toString();
        updateDisplay();
        alert("Total ₹: " + displayValue); // Display total in an alert
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

// Event listener for the Enter key on the hidden input
document.getElementById('hiddenInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        appendToDisplay(this.value);
        this.value = ''; // Clear the hidden input after appending
    }
});

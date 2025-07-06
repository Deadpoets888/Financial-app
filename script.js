function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const result = document.getElementById('result');

    if (isNaN(income) || isNaN(expenses)) {
        result.textContent = "Please enter valid numbers for both income and expenses.";
        return;
    }

    const savings = income - expenses;

    if (savings < 0) {
        result.textContent = `You're overspending by $${Math.abs(savings).toFixed(2)}. Consider reducing your expenses.`;
        result.style.color = "red";
    } else {
        result.textContent = `You can save $${savings.toFixed(2)} this month. Great job!`;
        result.style.color = "green";
    }
}

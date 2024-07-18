//your code here
document.addEventListener("DOMContentLoaded", function() {
    const priceElements = document.querySelectorAll('[data-ns-test="prices"]');
    let total = 0;
    priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent);
    });
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.setAttribute('colspan', 2); 
    newCell.setAttribute('data-ns-test', 'grandTotal');
    newCell.textContent = `Total: $${total.toFixed(2)}`;
    newRow.appendChild(newCell);
    const table = document.getElementById('grocery-list');
    table.appendChild(newRow);
});

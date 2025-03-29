document.addEventListener('DOMContentLoaded', () => {
    const validCodes = ['CODE123', 'DISCOUNT2025', 'FREESHIP']; // Add your valid codes here
    const redeemButton = document.getElementById('redeemButton');
    const redeemInput = document.getElementById('redeemInput');
    const message = document.getElementById('message');

    redeemButton.addEventListener('click', () => {
        const enteredCode = redeemInput.value.trim();
        if (validCodes.includes(enteredCode)) {
            message.textContent = 'Success!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Invalid code';
            message.style.color = 'red';
        }
    });
});

let balance = 0;
let verificationCode = ''; // This should come from the backend

function verifyCode() {
    const inputCode = document.getElementById('verificationCode').value;
    if (inputCode === verificationCode) {
        document.getElementById('verification').classList.add('hidden');
        document.getElementById('game').classList.remove('hidden');
    } else {
        alert('Verification code is incorrect.');
    }
}

document.getElementById('coin').addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 51) + 50; // Generates a number between 50 and 100
    balance += randomNumber;
    document.getElementById('balanceAmount').innerText = balance;
    document.getElementById('result').innerText = `Hurray! You have won ${randomNumber}`;
});

function showWithdrawal() {
    document.getElementById('withdrawal').classList.remove('hidden');
}

function processWithdrawal() {
    const withdrawAmount = Number(document.getElementById('withdrawAmount').value);
    const mpesaMessage = document.getElementById('mpesaMessage').value;

    if (withdrawAmount > balance) {
        document.getElementById('withdrawResult').innerText = 'Insufficient balance.';
        return;
    }

    if (mpesaMessage.includes('confirmed, paid to account')) {
        balance -= withdrawAmount;
        document.getElementById('balanceAmount').innerText = balance;
        document.getElementById('withdrawResult').innerText = 'Withdrawal successful!';
    } else {
        document.getElementById('withdrawResult').innerText = 'Invalid M-Pesa message. Please try again.';
    }
        }

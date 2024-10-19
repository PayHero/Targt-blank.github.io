let balance = 0;

// Event listener for signup - add bonus of Ksh 50 upon signup
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    // Perform basic validation
    if (phoneNumber === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate successful signup/login and add the bonus
    alert("Signup/Login successful! You have received a Ksh 50 bonus.");
    balance = 50;
    updateBalance();
    showMainContent();
});

// Function to update the displayed balance
function updateBalance() {
    document.getElementById('userBalance').innerText = balance.toFixed(2);
}

// Function to handle deposit
function deposit() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);

    if (isNaN(depositAmount) || depositAmount < 10) {
        alert("Minimum deposit amount is Ksh 10.");
    } else {
        balance += depositAmount;
        updateBalance();
        alert(`Deposit of Ksh ${depositAmount} was successful.`);
        document.getElementById('depositAmount').value = ''; // Clear the input
    }
}

// Function to handle withdrawal
function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);

    if (isNaN(withdrawAmount) || withdrawAmount < 100) {
        alert("Minimum withdrawal amount is Ksh 100.");
    } else if (withdrawAmount > balance) {
        alert("Insufficient balance.");
    } else {
        balance -= withdrawAmount;
        updateBalance();
        alert(`Withdrawal of Ksh ${withdrawAmount} was successful.`);
        document.getElementById('withdrawAmount').value = ''; // Clear the input
    }
}

function showMainContent() {
    document.getElementById('authPage').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('profilePage').style.display = 'none';
}

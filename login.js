let savedUsername = "";
let savedPassword = "";

function showLogin() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
}

function showSignup() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
}

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('signupUsername').value;
    let password = document.getElementById('signupPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let passwordError = document.getElementById('passwordError');
    let termsCheckbox = document.getElementById('termsCheckbox');
    let termsError = document.getElementById('termsError');

    if (password !== confirmPassword) {
        passwordError.innerText = "Passwords do not match!";
        return;
    } else {
        passwordError.innerText = "";
    }

    if (!termsCheckbox.checked) {
        termsError.innerText = "You must agree to the Terms & Conditions!";
        return;
    } else {
        termsError.innerText = "";
    }

    savedUsername = username;
    savedPassword = password;

    alert("Signup Successful! Now login with the same credentials.");
    showLogin();
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;
    let loginError = document.getElementById('loginError');

    if (username === savedUsername && password === savedPassword) {
        alert("Login Successful!");
    } else {
        loginError.innerText = "Invalid username or password!";
    }
});


function generatePassword() {
    const letters = ['a','b','c','d','e','f','g','h'];
    const symbols = ['$', '&', '%', '#', '!', '^'];
    const numbers = ['1','2','3','4','5','6','7','8','9','0'];

    const nLetters = parseInt(document.getElementById("letters").value);
    const nSymbols = parseInt(document.getElementById("symbols").value);
    const nNumbers = parseInt(document.getElementById("numbers").value);

    let passwordArray = [];

    for (let i = 0; i < nLetters; i++) {
        passwordArray.push(letters[Math.floor(Math.random() * letters.length)]);
    }

    for (let i = 0; i < nSymbols; i++) {
        passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    for (let i = 0; i < nNumbers; i++) {
        passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    // Shuffle the password
    passwordArray = passwordArray.sort(() => Math.random() - 0.5);

    const password = passwordArray.join('');
    document.getElementById("output").textContent = "Generated Password: " + password;

    // Check password strength
    if (password.length > 8) {
        document.getElementById("strength").textContent = "Strong Password";
        document.getElementById("strength").style.color = "green";
    } else {
        document.getElementById("strength").textContent = "Weak Password";
        document.getElementById("strength").style.color = "red";
    }
}

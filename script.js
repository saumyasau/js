let calcValue = '';

function appendToCalc(value) {
    calcValue += value;
    document.getElementById('calcDisplay').value = calcValue;
}

function clearCalculator() {
    calcValue = '';
    document.getElementById('calcDisplay').value = '';
}

function backspace() {
    calcValue = calcValue.slice(0, -1);
    document.getElementById('calcDisplay').value = calcValue;
}

function calculate() {
    try {
        const result = eval(calcValue);
        document.getElementById('calcDisplay').value = result;
        calcValue = result.toString();
    } catch (e) {
        document.getElementById('calcDisplay').value = 'Error';
        calcValue = '';
    }
}

// Name Editor functions
function saveName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        localStorage.setItem('savedName', name);
        document.getElementById('nameDisplay').textContent = `Saved: ${name}`;
        document.getElementById('nameDisplay').style.color = 'var(--success)';
    } else {
        document.getElementById('nameDisplay').textContent = 'Please enter a name first';
        document.getElementById('nameDisplay').style.color = 'var(--danger)';
    }
}

function showSavedName() {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
        document.getElementById('nameDisplay').textContent = `Saved Name: ${savedName}`;
        document.getElementById('nameDisplay').style.color = 'var(--primary)';
    } else {
        document.getElementById('nameDisplay').textContent = 'No name saved yet';
        document.getElementById('nameDisplay').style.color = 'var(--dark)';
    }
}

// Other existing functions
function add() {
    let a = +document.getElementById('a1').value;
    let b = +document.getElementById('a2').value;
    document.getElementById('aRes').textContent = `Result: ${a + b}`;
}

function multiply() {
    let a = +document.getElementById('m1').value;
    let b = +document.getElementById('m2').value;
    document.getElementById('mRes').textContent = `Result: ${a * b}`;
}

function checkEvenOdd() {
    let n = +document.getElementById('eo').value;
    let result = n % 2 === 0 ? 'Even' : 'Odd';
    document.getElementById('eoRes').textContent = `The number is ${result}`;
    document.getElementById('eoRes').style.color = n % 2 === 0 ? 'var(--primary)' : 'var(--accent)';
}

function checkAge() {
    let age = +document.getElementById('age').value;
    let eligible = age >= 18;
    const badge = eligible ? 
        '<span class="eligibility-badge eligible">Eligible to vote</span>' : 
        '<span class="eligibility-badge not-eligible">Not eligible to vote</span>';
    document.getElementById('ageRes').innerHTML = badge;
}

function printPrimes() {
    let limit = +document.getElementById('primeLimit').value;
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    document.getElementById('primeRes').textContent = primes.length > 0 ? 
        `Primes up to ${limit}:\n${primes.join(', ')}` : 
        'No primes found in this range';
}

let colorIndex = 0;
function changeColor() {
    const colors = ['#fd79a8', '#6c5ce7', '#00b894', '#e17055', '#0984e3'];
    const circle = document.getElementById('circle');
    circle.style.background = colors[colorIndex % colors.length];
    colorIndex++;
}

function calcGrade() {
    let marks = [95, 85, 75, 65, 55, 45];
    let grades = marks.map(m => {
        if (m >= 90) return 'A+';
        if (m >= 80) return 'A';
        if (m >= 70) return 'B+';
        if (m >= 60) return 'B';
        if (m >= 50) return 'C';
        return 'F';
    });
    
    document.getElementById('gradeOutput').innerHTML = 
        `<strong>Sample Grades:</strong> ${grades.join(', ')}`;
    
    let tableBody = '';
    marks.forEach((mark, index) => {
        tableBody += `<tr>
            <td>${mark}</td>
            <td style="font-weight:bold;color:${
                grades[index] === 'A+' ? '#00b894' : 
                grades[index] === 'F' ? '#d63031' : 
                '#6c5ce7'}">${grades[index]}</td>
        </tr>`;
    });
    document.getElementById('gradeTableBody').innerHTML = tableBody;
}

function mix() {
    let r = +document.getElementById('r').value;
    let g = +document.getElementById('g').value;
    let b = +document.getElementById('b').value;
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.getElementById('rgbValue').textContent = `RGB(${r}, ${g}, ${b})`;
}

function showCustomAlert() {
    alert('Operation completed successfully!');
}

function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const rollNo = document.getElementById('rollNo').value.trim();
    
    if (!name || !email || !contact || !rollNo) {
        document.getElementById('formResponse').textContent = 'Please fill in all fields';
        document.getElementById('formResponse').style.color = 'var(--danger)';
        return;
    }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById('formResponse').textContent = 'Please enter a valid email';
        document.getElementById('formResponse').style.color = 'var(--danger)';
        return;
    }
    
    document.getElementById('formResponse').textContent = 
        `Form submitted successfully! We'll contact ${name} at ${email}`;
    document.getElementById('formResponse').style.color = 'var(--success)';
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('rollNo').value = '';
}

// Initialize color mixer on load
window.onload = function() {
    mix();
};
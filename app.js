let patients = JSON.parse(localStorage.getItem('patients')) || [];
let doctors = JSON.parse(localStorage.getItem('doctors')) || [];

// Check if user is already logged in
window.onload = function() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        loadTables();
    }
};

// Save Data to Local Storage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Login Function
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem("isLoggedIn", "true");
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        loadTables();
    } else {
        alert('Invalid Credentials!');
    }
}

// Logout Function
function logout() {
    localStorage.removeItem("isLoggedIn");
    location.reload();
}

// Add Patient
function addPatient() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let disease = document.getElementById('disease').value;
    if (!name || !age || !disease) {
        alert("All fields are required!");
        return;
    }
    patients.push({ name, age, disease });
    saveData('patients', patients);
    loadTables();
}

// Add Doctor
function addDoctor() {
    let name = document.getElementById('doctorName').value;
    let specialization = document.getElementById('specialization').value;
    if (!name || !specialization) {
        alert("All fields are required!");
        return;
    }
    doctors.push({ name, specialization });
    saveData('doctors', doctors);
    loadTables();
}

// Load Tables
function loadTables() {
    document.getElementById('patientTable').innerHTML = `<tr><th>Name</th><th>Age</th><th>Disease</th></tr>`;
    patients.forEach(p => {
        document.getElementById('patientTable').innerHTML += `<tr><td>${p.name}</td><td>${p.age}</td><td>${p.disease}</td></tr>`;
    });

    document.getElementById('doctorTable').innerHTML = `<tr><th>Name</th><th>Specialization</th></tr>`;
    doctors.forEach(d => {
        document.getElementById('doctorTable').innerHTML += `<tr><td>${d.name}</td><td>${d.specialization}</td></tr>`;
    });
}

// Generate Report
function generateReport() {
    document.getElementById('reportOutput').innerText = `Patients: ${patients.length}\nDoctors: ${doctors.length}`;
}

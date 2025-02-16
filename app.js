let patients = JSON.parse(localStorage.getItem('patients')) || [];
let doctors = JSON.parse(localStorage.getItem('doctors')) || [];
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin123') {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        loadTables();
    } else {
        alert('Invalid Credentials!');
    }
}

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

function addAppointment() {
    let patient = document.getElementById('appointmentPatient').value;
    let doctor = document.getElementById('appointmentDoctor').value;
    if (!patient || !doctor) {
        alert("All fields are required!");
        return;
    }
    appointments.push({ patient, doctor });
    saveData('appointments', appointments);
    loadTables();
}

function loadTables() {
    let patientTable = document.getElementById('patientTable');
    let doctorTable = document.getElementById('doctorTable');
    let appointmentTable = document.getElementById('appointmentTable');

    patientTable.innerHTML = '<tr><th>Name</th><th>Age</th><th>Disease</th></tr>';
    patients.forEach(p => {
        let row = patientTable.insertRow();
        row.innerHTML = `<td>${p.name}</td><td>${p.age}</td><td>${p.disease}</td>`;
    });

    doctorTable.innerHTML = '<tr><th>Name</th><th>Specialization</th></tr>';
    doctors.forEach(d => {
        let row = doctorTable.insertRow();
        row.innerHTML = `<td>${d.name}</td><td>${d.specialization}</td>`;
    });

    appointmentTable.innerHTML = '<tr><th>Patient</th><th>Doctor</th></tr>';
    appointments.forEach(a => {
        let row = appointmentTable.insertRow();
        row.innerHTML = `<td>${a.patient}</td><td>${a.doctor}</td>`;
    });
}

function generateReport() {
    let report = `
        Patients: ${patients.length}
        Doctors: ${doctors.length}
        Appointments: ${appointments.length}
    `;
    document.getElementById('reportOutput').innerText = report;
}

document.addEventListener("DOMContentLoaded", loadTables);


let patients = JSON.parse(localStorage.getItem('patients')) || [];
let doctors = JSON.parse(localStorage.getItem('doctors')) || [];
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
let bills = JSON.parse(localStorage.getItem('bills')) || [];
let medicines = JSON.parse(localStorage.getItem('medicines')) || [];
let staff = JSON.parse(localStorage.getItem('staff')) || [];

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}


function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username === 'admin' && password === 'admin123') {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
    } else {
        alert('Invalid Credentials!');
    }
}
function addPatient() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let disease = document.getElementById('disease').value;
    if(name && age && disease) {
        patients.push({ name, age, disease });
        saveData('patients', patients);
    }
}

function addDoctor() {
    let name = document.getElementById('doctorName').value;
    let specialization = document.getElementById('specialization').value;
    if(name && specialization) {
        doctors.push({ name, specialization });
        saveData('doctors', doctors);
    }
}

function addAppointment() {
    let patient = document.getElementById('appointmentPatient').value;
    let doctor = document.getElementById('appointmentDoctor').value;
    if(patient && doctor) {
        appointments.push({ patient, doctor });
        saveData('appointments', appointments);
    }
}

function addBill() {
    let patient = document.getElementById('billingPatient').value;
    let amount = document.getElementById('amount').value;
    if(patient && amount) {
        bills.push({ patient, amount });
        saveData('bills', bills);
    }
}

function addMedicine() {
    let name = document.getElementById('medicineName').value;
    let stock = document.getElementById('medicineStock').value;
    if(name && stock) {
        medicines.push({ name, stock });
        saveData('medicines', medicines);
    }
}

function addStaff() {
    let name = document.getElementById('staffName').value;
    let role = document.getElementById('staffRole').value;
    if(name && role) {
        staff.push({ name, role });
        saveData('staff', staff);
    }
}

function generateReport() {
    let report = `Patients: ${patients.length}\nDoctors: ${doctors.length}\nAppointments: ${appointments.length}\nBills: ${bills.length}\nMedicines: ${medicines.length}\nStaff: ${staff.length}`;
    document.getElementById('reportOutput').innerText = report;
}

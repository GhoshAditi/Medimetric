import React, { useState } from 'react';

function PrescriptionForm() {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [duration, setDuration] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send data to a server or handle it as per your requirement
    console.log({
      patientName,
      age,
      gender,
      address,
      date,
      doctor,
      medication,
      dosage,
      duration,
      specialInstructions
    });
  };

  return (
    <div className="prescription-form">
      <h1>Prescription Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="patient-info">
          <h2>Patient Information</h2>
          <input type="text" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
          <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="prescription-details">
          <h2>Prescription Details</h2>
          <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="text" placeholder="Doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
          <input type="text" placeholder="Medication" value={medication} onChange={(e) => setMedication(e.target.value)} />
          <input type="text" placeholder="Dosage" value={dosage} onChange={(e) => setDosage(e.target.value)} />
          <input type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
          <input type="text" placeholder="Special Instructions" value={specialInstructions} onChange={(e) => setSpecialInstructions(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PrescriptionForm;

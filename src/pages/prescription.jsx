import { useState } from "react";
import styles from './prescription.module.css'
import BasicTimePicker from "../Components/DateRange/time";
import axios from 'axios';


function Prescription({ togglePrescription }) {

  const BACKEND_URL = 'http://localhost:3000';
  const [prescription, setPrescription] = useState({
    name: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    time: "",
    note: "",
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setError(false);  
    setPrescription((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTimeChange = (selectedTime) => {
    setPrescription((prev) => ({
      ...prev,
      time: selectedTime.format('HH:mm'),
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(prescription).some(value => value === "")) {
      setError(true);
      console.log("Empty fields:", prescription);
      return;
    }
    

    try {
      // Make POST request to backend
      const response = await axios.post(`${BACKEND_URL}/medicine`, prescription);
      console.log(response.data); // Log the response data
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(prescription);
    // togglePrescription();
  };

  return (
    <div className={styles.container}>

      <h1 className={styles.heading}>PESCRIPTION</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.flex}>
          <label htmlFor="name"
            className={styles.labels}>Name</label>
          <input
            type="text"
            name="name"
            className={styles.inputs}
            value={prescription.name}
            onChange={handleChange}
          />
        </div>

        <div
          className={styles.flex}
        >
          <label htmlFor="dosage"
            className={styles.labels}>Dosage</label>
          <input
            type="text"
            name="dosage"
            value={prescription.dosage}
            onChange={handleChange}
            className={styles.inputs}
          />
        </div>

        <div
          className={styles.flex}
        >
          <label htmlFor="frequency"
            className={styles.labels}>Frequency</label>
          <input
            type="number"
            name="frequency"
            value={prescription.frequency}
            onChange={handleChange}
            className={styles.inputs}
          />
        </div>
        <div className={styles.flex}>

          <label htmlFor="startDate" className={styles.labels}>Start date </label>

          <input
            type="date"
            name="startDate"
            value={prescription.startDate}
            onChange={handleChange}
            className={styles.inputs}
          />
        </div>
        <div className={styles.flex}>
          <label htmlFor="endDate" className={styles.labels}>End date </label>
          <input
            type="date"
            name="endDate"
            value={prescription.endDate}
            onChange={handleChange}
            className={styles.inputs}
          />
        </div>
        <BasicTimePicker  onChange={handleTimeChange}/>
        <div className={styles.flex}>
          <label htmlFor="note"
            className={styles.labels}>Note</label>
          <input
            type="text"
            name="note"
            value={prescription.note}
            onChange={handleChange}
            className={styles.inputs}
          />
        </div>
        <div className={styles.flex}>
          <div className={styles.btn}>
            <button type="submit"
              className={styles.button}
            >Submit</button>
          </div>
            <div className={styles.flex}>
              {error ? <p className={styles.error}>Please fill all the fields</p> : null}
            </div>
        </div>
      </form>
    </div>
  );
}

export default Prescription;
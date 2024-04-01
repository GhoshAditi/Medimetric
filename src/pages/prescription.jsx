import React, { useState } from "react";
import "./styles.css";

const MedicineComponent = () => {
  const [medicine, setMedicine] = useState({
    name: "",
    dosage: "",
    timings: "",
    startDate: "",
    endDate: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({
      ...medicine,
      [name]: value
    });
  };

  const handleSave = () => {
    if (
      medicine.name.trim() === "" ||
      medicine.dosage.trim() === "" ||
      medicine.timings.trim() === "" ||
      medicine.startDate.trim() === "" ||
      medicine.endDate.trim() === "" ||
      medicine.notes.trim() === ""
    ) {
      alert("Please fill in all fields!");
    } else {
      const tasksContainer = document.querySelector("#tasks");
      tasksContainer.innerHTML += `
        <div class="task">
          <span id="taskname">
            ${medicine.name}
          </span>
          <button class="delete">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      `;
  
      const currentTasks = document.querySelectorAll(".delete");
      currentTasks.forEach((task) => {
        task.onclick = function () {
          this.parentNode.remove();
        };
      });
  
      setMedicine({
        name: "",
        dosage: "",
        timings: "",
        startDate: "",
        endDate: "",
        notes: ""
      });
    }
  };
  
  return (
    <div className="container">
      <div className="header">
        <h1>Medicine</h1>
        <button className="dropdown-arrow">&#9660;</button>
      </div>
      <div id="newtask">
        <div id="medname">
          <h4>Name:</h4>
          <input
            type="text"
            name="name"
            placeholder="eg.Paracetamol 650"
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              border: "3px solid #af8ad1",
              borderRadius: "10px",
              padding: "5px"
            }}
            value={medicine.name}
            onChange={handleChange}
          />
        </div>
        <div id="meddose">
          <h4>Dosage:</h4>
          <input
            type="text"
            name="dosage"
            placeholder="eg. Once a fortnight"
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              border: "3px solid #af8ad1",
              borderRadius: "10px",
              padding: "5px"
            }}
            value={medicine.dosage}
            onChange={handleChange}
          />
        </div>
        <div id="medtime">
          <h4>Timing:</h4>
          <input
            type="text"
            name="timings"
            placeholder="eg. 2pm and 9pm"
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              border: "3px solid #af8ad1",
              borderRadius: "10px",
              padding: "5px"
            }}
            value={medicine.timings}
            onChange={handleChange}
          />
        </div>
        <div className="date-container">
          <div id="medstart">
            <h4>Start Date:</h4>
            <input
              type="date" // Changed to date input for better user experience
              name="startDate"
              style={{
                marginTop: "15px",
                marginBottom: "15px",
                border: "3px solid #af8ad1",
                borderRadius: "10px",
                padding: "5px"
              }}
              value={medicine.startDate}
              onChange={handleChange}
            />
          </div>
          <div id="medend">
            <h4>End Date:</h4>
            <input
              type="date" // Changed to date input for better user experience
              name="endDate"
              style={{
                marginTop: "15px",
                marginBottom: "15px",
                border: "3px solid #af8ad1",
                borderRadius: "10px",
                padding: "5px"
              }}
              value={medicine.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="mednotes">
          <h4>Notes:</h4>
          <input
            type="text"
            name="notes"
            placeholder="Any specifications"
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              border: "3px solid #af8ad1",
              borderRadius: "10px",
              padding: "5px"
            }}
            value={medicine.notes}
            onChange={handleChange}
          />
        </div>
        <button id="push" onClick={handleSave}>
          Save
        </button>
      </div>
      <div id="tasks"></div>
    </div>
  );
};

export default MedicineComponent;

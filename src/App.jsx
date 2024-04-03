import { useState } from 'react'
import './App.css'
import Prescription from './pages/prescription';
function App() {
  const [showPrescription, setShowPrescription] = useState(false);

  const togglePrescription = () => {
    setShowPrescription((prev) => !prev);
  };

  return (
    <>
      
      <div >
        {showPrescription ? (
          <Prescription togglePrescription={togglePrescription} />
        ) : (
          <button onClick={togglePrescription}>Add Prescription</button>
        )}
      </div>
    </>
  );
}

export default App;
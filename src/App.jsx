import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prescription from './pages/prescription';
function App() {
  const [count, setCount] = useState(0);
  const [showPrescription, setShowPrescription] = useState(false);

  const togglePrescription = () => {
    setShowPrescription((prev) => !prev);
  };

  return (
    <>
      
      <button onClick={togglePrescription}>
        {showPrescription ? ' ' : 'Show Prescription'}
      </button>
      {showPrescription && <Prescription />}
    </>
  );
}

export default App;
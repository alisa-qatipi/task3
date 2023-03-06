import './App.css';
import Modal from './Components/Modal';
import { useState } from 'react';
function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
     <div className="container-fluid">
      <div className="container">
        <div className="buttonContainer d-flex justify-content-end mt-3">
        <button className="btn btn-secondary" onClick={()=>setOpenModal(true)}>show popup</button>
      {/* it means that if the openModal is true it will display the modal component */}
      {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;

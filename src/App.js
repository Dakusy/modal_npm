import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  //Allow us to initiate the state of the modal to true (already open).
  const [openModal, setOpenModal] = useState(true)
  return (
    //Simply allow us to send an information to the modal component to change the state when we close it.
    openModal && <Modal closeModal={setOpenModal} />
  );
}

export default App;

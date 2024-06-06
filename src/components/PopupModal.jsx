import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to set appElement
Modal.setAppElement('#root');

const PopupModal = ({ isOpen, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  const modalStyles = {
    content: {
      width: '50%',
      height: '50%',
      margin: 'auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    },
    closeButton: {
      backgroundColor: 'yellow',
      color: '#000000',
      border: 'none',
      borderRadius: '2rem',
      padding: '8px 16px',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Booking Confirmation Modal"
      style={modalStyles}
    >
      <h2>Booking Confirmed!</h2>
      <p>Your booking has been registered. Please check your email for confirmation.</p>
      <button onClick={closeModal} style={modalStyles.closeButton}>Close</button>
    </Modal>
  );
};

export default PopupModal;
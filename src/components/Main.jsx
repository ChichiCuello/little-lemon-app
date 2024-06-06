import React, { useState } from 'react';
import PopupModal from './PopupModal';

const Main = () => {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[date, setDate] = useState("");
  const[diners, setDiners] = useState("");
  const[time, setTime] = useState("");
  const[occasion, setOccasion] = useState("");
  const[comments, setComments] = useState("");
  const [errors, setErrors] = useState({}); // State for form errors
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      clearForm();
      console.log('form submitted');
      setIsModalOpen(true); // Open modal when form is submitted and valid
    }
  }

  const clearForm = () => {
    setName("");
    setEmail("");
    setDate("");
    setDiners("");
    setTime("");
    setOccasion("");
    setComments("");
    setErrors({});
   };

   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
     setIsModalOpen(true);
   };

   const closeModal = () => {
     setIsModalOpen(false);
   };


  const validateForm = () => {
    const errors = {};
    // Perform validation checks and set errors object
    if (!name) {
      errors.name = " Name is required";
    }
    if (!email) {
      errors.email = " mail is required";
    } else if (!isValidEmail(email)) {
      errors.email = " Invalid email format";
    }
    if (!date) {
      errors.date = " Date is required";
    }
    if (!diners) {
      errors.diners = " Number of diners is required";
    }
    if (!time) {
      errors.time = " Time is required";
    }
    if (!occasion) {
      errors.occasion = " Occasion is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Form is valid if errors object is empty
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <h2 className='reservation'>Reservation</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Reservation Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="diners">Number of Diners:</label>
        <select id="diners" name="diners" value={diners} onChange={e => setDiners(e.target.value)} >
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>

        </select>
        {errors.diners && <span className="error">{errors.diners}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <select id="time" name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value=""></option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
        </select>
        {errors.time && <span className="error">{errors.date}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="occasion"> Special Occasion: </label>
        <select id="occasion" name="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
          <option value=""></option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="celebration">Celebration</option>
          <option value="other">Other</option>
        </select>
        {errors.occasion && <span className="error">{errors.occasion}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor='email'>Email address: </label> 
        <input type="email" id="email" name="email" placeholder="Email address" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comments:</label>
        <textarea type="textarea" id="comments" name="comments" placeholder="Comments" value={comments} onChange={(e) => { setComments(e.target.value); }}></textarea>
      </div>
        <button type="submit" onClick={openModal}>Book</button>
      </form>
      {isModalOpen && <PopupModal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default Main

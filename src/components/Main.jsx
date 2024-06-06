import React, { useState } from 'react'

const Main = () => {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[date, setDate] = useState("");
  const[diners, setDiners] = useState("");
  const[time, setTime] = useState("");
  const[occasion, setOccasion] = useState("");
  const[comments, setComments] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    console.log('form submitted')
  }

  const clearForm = () => {
    setName("");
    setEmail("");
    setDate("");
    setDiners("");
    setTime("");
    setOccasion("");
    setComments("");
   };

   const getIsFormValid= () =>{
    return (
      name &&
      email &&
      date &&
      diners &&
      time &&
      occasion
      );
    };
  return (
    <>
      <h2>Reservation</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Reservation Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
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
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor='email'>Email address: </label> 
        <input type="email" id="email" name="email" placeholder="Email address" value={email} onChange={(e) => { setEmail(e.target.value); }} />
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comments:</label>
        <textarea type="textarea" id="comments" name="comments" placeholder="Comments" value={comments} onChange={(e) => { setComments(e.target.value); }}></textarea>
      </div>
        <button type="submit" disabled={!getIsFormValid()}>Book</button>
      </form>
    </>
  );
};

export default Main

{/*

    <form onSubmit={handleSubmit}>
      <h2>Reservation</h2>
      <div className="form-group">
        <label htmlFor="date">Reservation Date</label>
        <input type="text" id="date" name="date" placeholder="dd/mm/yyyy" />
      </div>
      <div className="form-group">
        <label htmlFor="diners">Number of Diners</label>
        <select id="diners" name="diners">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>

        </select>
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <select id="time" name="time">
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Special Occasion</label>
        <select id="occasion" name="occasion">
          <option value="">None</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="celebration">Celebration</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='name' value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comments</label>
        <textarea id="comments" name="comments"></textarea>
      </div>
      <button type="submit">Book</button>
    </form>












*/} 

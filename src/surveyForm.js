import React, { useState } from 'react';
import './surveyForm.css';

function SurveyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, age, comments } = formData;
    const dataString = `Name: ${name}\nEmail: ${email}\nAge: ${age}\nComments: ${comments}`;
    alert('Survey Data:\n' + dataString);
  };

  return (
    <div>
      <h1>Survey Form</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SurveyForm;

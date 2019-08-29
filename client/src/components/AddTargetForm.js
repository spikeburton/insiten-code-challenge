import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTargetForm = ({ setCompanies, companies }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    location: '',
    description: '',
    status: ''
  });

  const handleChange = e =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setCompanies([formValues, ...companies]);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="description"></label>
        <input
          type="status"
          name="status"
          placeholder="Description"
          onChange={handleChange}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

AddTargetForm.propTypes = {};

export default AddTargetForm;

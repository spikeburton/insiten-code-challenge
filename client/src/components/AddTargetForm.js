import React, { useState } from 'react';
import PropTypes from 'prop-types';

const defaultFormValues = {
  name: '',
  location: '',
  description: '',
  status: 'researching'
};

const AddTargetForm = ({ setCompanies, companies }) => {
  const [formValues, setFormValues] = useState(defaultFormValues);

  const handleChange = e =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setCompanies([formValues, ...companies]);
    setFormValues(defaultFormValues);
    e.target.reset();
  };

  console.log(formValues);
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
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <select
          name="status"
          id="status"
          value={formValues.status}
          onChange={handleChange}
        >
          <option value="researching">Researching</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="declined">Declined</option>
        </select>
      </div>
      <input type="submit" />
    </form>
  );
};

AddTargetForm.propTypes = {};

export default AddTargetForm;

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

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formValues.location}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="description"></label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formValues.description}
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
      <div className="form-row">
        <input type="submit" />
      </div>
    </form>
  );
};

AddTargetForm.propTypes = {
  setCompanies: PropTypes.func.isRequired,
  companies: PropTypes.array.isRequired
};

export default AddTargetForm;

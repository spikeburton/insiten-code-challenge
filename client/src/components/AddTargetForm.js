import React from 'react';
import PropTypes from 'prop-types';

const AddTargetForm = ({ formValues, handleChange, handleSubmit, editing }) => {
  return (
    <div id="form-block">
      <h2>{editing !== null ? 'Edit' : 'Add'} Target</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formValues.location}
            onChange={handleChange}
            required
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
            required
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
        <div id="submit-button">
          <input
            type="submit"
            value={`${editing !== null ? 'Update' : 'Add'} Target`}
          />
        </div>
      </form>
    </div>
  );
};

AddTargetForm.propTypes = {
  setCompanies: PropTypes.func.isRequired,
  companies: PropTypes.array.isRequired,
  current: PropTypes.object
};

export default AddTargetForm;

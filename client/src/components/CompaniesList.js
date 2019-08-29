import React from 'react';
import PropTypes from 'prop-types';

const CompaniesList = ({ companies, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Location</th>
          <th>Description</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company, i) => (
          <tr key={i}>
            <td>{company.name}</td>
            <td>{company.location}</td>
            <td>{company.description}</td>
            <td>{company.status}</td>
            <td>
              <button data-id={i} onClick={handleEdit}>
                Edit
              </button>
              <button data-id={i} onClick={handleDelete}>
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CompaniesList.propTypes = {
  companies: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default CompaniesList;

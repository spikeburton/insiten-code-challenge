import React, { useState, useEffect } from 'react';
import './App.css';
import AddTargetForm from './components/AddTargetForm';

const defaultFormValues = {
  name: '',
  location: '',
  description: '',
  status: 'researching'
};

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formValues, setFormValues] = useState(defaultFormValues);

  useEffect(() => {
    fetch('/companies')
      .then(res => res.json())
      .then(setCompanies);
  }, []);

  const handleChange = e =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (editing !== null) {
      setCompanies([
        ...companies.slice(0, editing),
        formValues,
        ...companies.slice(editing + 1)
      ]);
      setEditing(null);
    } else {
      setCompanies([formValues, ...companies]);
    }
    setFormValues(defaultFormValues);
    e.target.reset();
  };

  const handleEdit = e => {
    const i = parseInt(e.target.dataset.id);
    setFormValues(companies[i]);
    setEditing(i);
  };

  const handleDelete = e => {
    const i = parseInt(e.target.dataset.id);
    const payload = [...companies.slice(0, i), ...companies.slice(i + 1)];
    setCompanies(payload);
  };

  console.log(companies);
  return (
    <div className="App">
      <header id="App-header">
        <h1>Target Acquisitions</h1>
      </header>
      <section id="add-company">
        <AddTargetForm
          formValues={formValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editing={editing}
        />
      </section>
      <section id="companies-table">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Location</th>
              <th>Description</th>
              <th>Status</th>
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
      </section>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import TargetForm from './components/TargetForm';

import './styles/app.css';
import CompaniesList from './components/CompaniesList';

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

    // Clear form to prevent trying to "update" a deleted entry
    if (editing !== null) {
      setFormValues(defaultFormValues);
      setEditing(null);
    }
  };

  return (
    <div className="container">
      <header id="App-header">
        <h1>Target Acquisitions</h1>
      </header>
      <section id="add-company">
        <TargetForm
          formValues={formValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editing={editing}
        />
      </section>
      <section id="companies-table">
        <CompaniesList
          companies={companies}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </section>
    </div>
  );
};

export default App;

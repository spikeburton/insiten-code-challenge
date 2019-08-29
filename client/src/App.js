import React, { useState, useEffect } from 'react';
import './App.css';
import AddTargetForm from './components/AddTargetForm';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    fetch('/companies')
      .then(res => res.json())
      .then(setCompanies);
  }, []);

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
        <div id="form-block">
          <h2>Add Target</h2>
          <AddTargetForm companies={companies} setCompanies={setCompanies} />
          {current && (
            <div>
              <p>{current.name}</p>
            </div>
          )}
        </div>
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
              <tr
                key={i}
                // onClick={() => setCurrent(company)}
              >
                <td>{company.name}</td>
                <td>{company.location}</td>
                <td>{company.description}</td>
                <td>{company.status}</td>
                <td>
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

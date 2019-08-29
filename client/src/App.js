import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch('/companies')
      .then(res => res.json())
      .then(setCompanies);
  }, []);

  console.log(companies);
  return (
    <div className="App">
      <header id="App-header">
        <h1>Target Acquisitions</h1>
      </header>
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
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default App;

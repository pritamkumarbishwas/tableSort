import React, { useState } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const handleDateSort = () => {
    const sortedEmployees = [...employees].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setEmployees(sortedEmployees);
  };




  const handleViewSort = () => {
    const sortedEmployees = [...employees].sort((a, b) => {
      return b.views - a.views;
    });
    setEmployees(sortedEmployees);
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={handleDateSort}>Sort by Date</button>
        <button onClick={handleViewSort}>Sort by Views</button>
      </div>
      <div>
        {employees.length > 0 &&
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Article</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.date}</td>
                  <td>{emp.views}</td>
                  <td>{emp.article}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </>
  );
}

export default App;

import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <ul className="sidebar-list">
          <li className="sidebar-item">Home</li>
          <li className="sidebar-item">New card</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>Welcome to Your Dashboard</h1>
        </div>

        <div className="dash-grid">
          <div className="dash-card">
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

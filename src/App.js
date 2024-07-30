import './App.css';
import React from "react"
import {Routes, Route } from "react-router-dom"
import CustomerDashboard from './components/customerDashboard';
import CustomerDashboardWithDependent from './components/customerDashboardWithDependent';

function App() {
  return (
      <Routes>
        <Route
            path="/"
            element={<CustomerDashboard />}
        />
        <Route
            path="/customerDashboard"
            element={<CustomerDashboardWithDependent />}
        />
      </Routes>
  );
}

export default App;

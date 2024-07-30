import './App.css';
import React from "react"
import {Routes, Route } from "react-router-dom"
import Login from './components/login';
import CustomerDashboard from './components/customerDashboard';
import CustomerDashboardWithoutDependent from './components/customerDashboardWithoutDependent';
import CustomerExperiencePage from './components/CustomerExperiencePage';

function App() {
  return (
      <Routes>
        <Route
            path="/"
            element={<Login />}
        />
        <Route
            path="/customerDashboard"
            element={<CustomerDashboard />}
        />
        <Route
            path="/customerDashboardWithoutDependent"
            element={<CustomerDashboardWithoutDependent />}
        />
        <Route
            path="/customerExperience"
            element={<CustomerExperiencePage />}
        />
      </Routes>
  );
}

export default App;

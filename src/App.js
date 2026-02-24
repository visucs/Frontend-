import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEmployeePage from './pages/CreateEmployeePage';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateEmployeePage />} />
            </Routes>
        </Router>
    );
}

export default App;

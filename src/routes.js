import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './auth';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Routies = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <PrivateRoute path="/admin" element={<Dashboard/>} />
        </Routes>
    </Router>
);

export default Routies;
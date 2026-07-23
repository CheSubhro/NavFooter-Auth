
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'

export default function AppRoutes() {
    return (
        <Routes>
            {/* Main / Home Route */}
            <Route path="/" element={<Home />} />
            
            {/* Future routes gulo ekhane add hobe */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
    );
}
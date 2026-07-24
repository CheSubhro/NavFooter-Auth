
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home'
import About from '../pages/About'

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/login" element={<Login />} /> */}
            </Route>
        </Routes>
    );
}
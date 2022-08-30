import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Import conmponents
import Characters from '../components/Characters';

export const PublicRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Characters />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}
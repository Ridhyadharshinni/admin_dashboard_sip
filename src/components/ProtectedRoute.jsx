import React from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../api/feedbackApi'; // In a real app structure

export const ProtectedRoute = ({ children }) => {
    const isAdmin = api.isAdmin();
    if (!isAdmin) {
        return <Navigate to="/admin-login" replace />;
    }
    return children;
};

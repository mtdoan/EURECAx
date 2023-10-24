import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from 'util/auth';

const PublicRoute = () => {
    const auth = !isAuthenticated();

    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PublicRoute;
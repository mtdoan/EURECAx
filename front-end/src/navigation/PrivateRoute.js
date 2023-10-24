import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from 'util/auth';

const PrivateRoute = () => {
    const auth = isAuthenticated();

    return auth ? <Outlet /> : <Navigate to="/signIn" />;
}

export default PrivateRoute;
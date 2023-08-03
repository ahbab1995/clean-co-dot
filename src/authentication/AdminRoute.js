import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
   
  const [admin] = useAdmin();

  if (!admin) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
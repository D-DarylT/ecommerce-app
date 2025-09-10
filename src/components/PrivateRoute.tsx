import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, roles }: { children: React.ReactNode, roles?: string[] }) {
  const user = useSelector((state: RootState) => state.user);
  if (!user.isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  if (roles && user.user && !roles.includes(user.user.role)) {
    // Redirect to home or dashboard if role doesn't match
    return <Navigate to={user.user.role === 'supplier' ? '/supplier' : '/dashboard'} replace />;
  }
  return <>{children}</>;
}

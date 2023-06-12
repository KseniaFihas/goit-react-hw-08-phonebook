import PT from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  redirectTo: PT.string.isRequired,
  component: PT.any,
};
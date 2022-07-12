import React from 'react';
import { Route, Navigate } from 'react-router-dom';

class ProtectedRoute extends React.Component {
  render() {
    if (localStorage.getItem('data')) return <Route {...this.props} />;
    else <Navigate to="/" />;
  }
}

export default ProtectedRoute;

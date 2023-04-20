import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import UsersLayout from './pages/Layout/UsersLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './componets/Users/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users" element={<UsersLayout />}>
            <Route index element={<Users />} />
            <Route path=":id" element={<UserDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

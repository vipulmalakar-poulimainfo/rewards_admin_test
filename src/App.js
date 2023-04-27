import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import UsersLayout from './pages/Layout/UsersLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './componets/Users/UserDetails';
import Statistics from './pages/Statistics';
import Login from './pages/Login';
import Payout from './pages/Payout';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UsersLayout />}>
            <Route index element={<Users />} />
            <Route path=":id" element={<UserDetails />} />
          </Route>
          <Route path="statistics" element={<Statistics />} />
          <Route path="payout" element={<Payout />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Splash from './components/Splash';
import './App.css';

const MainLayout = ({ onLogout }) => (
  <>
    <Header onLogout={onLogout} />
    <Outlet />
  </>
);

const ProtectedRoute = ({ isAuth }) =>
  isAuth ? <Outlet /> : <Navigate to="/" replace />;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('auth') === 'true'
  );

  const handleLogin = () => {
    sessionStorage.setItem('auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('auth');
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" replace />
              ) : (
                <Splash onLogin={handleLogin} />
              )
            }
          />
          <Route element={<ProtectedRoute isAuth={isAuthenticated} />}>
            <Route element={<MainLayout onLogout={handleLogout} />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/skills" element={<Home />} />
              <Route path="/projects" element={<Home />} />
              <Route path="/contact" element={<Home />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              isAuthenticated ? (
                <NotFound />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

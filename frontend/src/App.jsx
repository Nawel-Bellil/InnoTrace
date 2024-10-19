import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Machines from './pages/Machines';
import Users from './pages/Users';
import Tasks from './pages/Tasks';
import userData from './constants/User'; // Import the user data

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false); // State for login failure

    // This function handles the login process
    const handleLogin = (email, password) => {
        // Check credentials against user data
        if (email === userData.email && password === userData.password) {
            setIsAuthenticated(true);
            setLoginFailed(false); // Reset login failure state
        } else {
            setLoginFailed(true); // Set login failure state
        }
    };

    return (
        <Router>
            <Routes>
                {/* Login route */}
                <Route 
                    path="/" 
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Dashboard" replace />
                        ) : (
                            <Login onLogin={handleLogin} loginFailed={loginFailed} /> // Pass props to Login
                        )
                    } 
                />
                
                {/* Routes after login */}
                <Route path="/*" element={<Layout profile={{ role: "admin" }} />}>
                    {/* Protect these routes if not authenticated */}
                    <Route 
                        path="Dashboard" 
                        element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />}
                    />
                    <Route 
                        path="Machines" 
                        element={isAuthenticated ? <Machines /> : <Navigate to="/" replace />}
                    />
                    <Route 
                        path="Users" 
                        element={isAuthenticated ? <Users /> : <Navigate to="/" replace />}
                    />
                    <Route 
                        path="Tasks" 
                        element={isAuthenticated ? <Tasks /> : <Navigate to="/" replace />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

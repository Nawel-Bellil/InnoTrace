import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Machines from './pages/Machines';
import Users from './pages/Users';
import Tasks from './pages/Tasks';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    // This function will simulate login and set authenticated to true
    const handleLogin = () => {
        setIsAuthenticated(true);
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
                            <Login onLogin={handleLogin} />
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

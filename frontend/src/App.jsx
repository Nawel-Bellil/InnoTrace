import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Machines from './pages/Machines';
// import Users from './pages/Users';
import Tasks from './pages/Tasks';

function App() {
    return (
        <Router>
            <Routes>
                {/* All the routes will share the Layout */}
                <Route path="/" element={<Layout profile={{ role: "admin" }} />}>
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Machines" element={<Machines />} />
                    {/* <Route path="Users" element={<Users />} /> */}
                    <Route path="Tasks" element={<Tasks />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import Users from './pages/users';

// import Machines from './pages/Machines';
// import Users from './pages/Users';
// import Tasks from './pages/Tasks';

function App() {
    return (
      <div class='bg-customGrey'>
      <Routes>
        
        <Route path="/" element={<Layout profile={{ role: "admin" }} />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='/users' element={<Users/>}/>
        </Route>

        <Route path="/login" element={<Login/>}/>
          
          
      </Routes></div>
    );
}

export default App;

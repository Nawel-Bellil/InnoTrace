import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import Users from './pages/users';

import Machines from './pages/Machines';
import Tasks from './pages/Tasks';
import Production from './pages/Production';

function App() {
    return (
      <div  class=' lg:h-[1030px]  bg-customGrey'>
      <Routes>
        
        <Route path="/" element={<Layout profile={{ role: "admin" }} />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="Machines" element={<Machines />} />
          <Route path='/users' element={<Users/>}/>
          <Route path="Tasks" element={<Tasks />} />
          <Route path="/production" element={<Production />} />
        </Route>

        <Route path="/login" element={<Login/>}/>
          
          
      </Routes>
      </div>
    );
}

export default App;

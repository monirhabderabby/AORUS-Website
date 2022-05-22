import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Pages/Blogs/Blogs';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/Login/SignUp'
import Parts from './Components/Pages/Parts/Parts';
import Navbar from './Components/Pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import AllUser from './Components/Pages/Dashboard/AllUser';
import Profile from './Components/Pages/Dashboard/Profile';
import RequireAuth from './Components/Pages/Login/RequireAuth';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parts" element={
          <RequireAuth>
            <Parts />
          </RequireAuth>
        } />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}  />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path="alluser" element={<AllUser></AllUser>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

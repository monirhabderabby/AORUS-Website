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

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}  />
      </Routes>
    </div>
  );
}

export default App;

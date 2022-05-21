import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Pages/Blogs/Blogs';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Parts from './Components/Pages/Parts/Parts';
import Navbar from './Components/Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

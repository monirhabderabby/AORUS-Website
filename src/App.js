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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AddReview from './Components/Pages/Dashboard/AddReview';
import MyOrders from './Components/Pages/Dashboard/MyOrders';
import AllOrders from './Components/Pages/Dashboard/AllOrders';
import Purchase from './Components/Pages/Parts/Purchase';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import Payment from './Components/Pages/Dashboard/Payment';
import NoFoundPage from './Components/Pages/NoFoundPage/NoFoundPage';

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
        <Route path="/purchase/:id" element={<Purchase />}  />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path="alluser" element={<AllUser />}></Route>
          <Route path="allorders" element={<AllOrders />}></Route>
          <Route path="myorder" element={<MyOrders />}></Route>
          <Route path="addreview" element={<AddReview />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
        </Route>
        <Route path="*" element={<NoFoundPage />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

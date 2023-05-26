import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import  Navbar  from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Support from './components/Support/Support';
import { Route, Routes , useLocation} from 'react-router-dom';
import Payment from './components/Payment/Payment';
import Error from './components/Error/Error';
import Login1 from './components/Login/Login1';
import Portel from './components/portel/Portel';
import Admin1 from './components/Admin1/Admin1';
import AdminDashBoard from './components/Admin1/AdminDashBoard/AdminDashBoard';
import Logout from './components/Logout/Logout';
import Booked from './components/Booked/Booked';
function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className={`App ${theme}`}>

      {/* removing the navbar from the payment page */}
    {location.pathname !== '/payment' &&  <Navbar toggleTheme={toggleTheme} />}

    {/* my all routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path='/loginme' element={<Login1/>}/>
      <Route path="/support" element={<Support />} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/portel' element={<Portel/>} />
      <Route path='/adminLogin' element={<Admin1/>} />
      <Route path='/adminDashBoard' element={<AdminDashBoard/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/booked' element={<Booked/>}/>
      <Route path='*' element={<Error/>}/>
      
    </Routes>
  </div>
  );
}

export default App;

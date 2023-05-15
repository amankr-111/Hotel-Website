import logo from './logo.svg';
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
function App() {
  const location = useLocation();
  return (
    <>
    {location.pathname !== '/payment' &&  <Navbar />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path='/loginme' element={<Login1/>}/>
      <Route path="/support" element={<Support />} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='*' element={<Error/>}/>
    </Routes>
  </>
  );
}

export default App;

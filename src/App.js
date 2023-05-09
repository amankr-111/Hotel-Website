import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import  Navbar  from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Support from './components/Support/Support';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  </>
  );
}

export default App;

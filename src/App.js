// import logo from './logo.svg';
import './App.css';
import Index from './Componets/Index';
import {  Route, Routes} from 'react-router-dom'
import OurServices from './Componets/OurServices';
import Department from './Componets/Department';
import Doctors from './Componets/Doctors';
import MakeAppointment from './Componets/LandingPage/MakeAppointment';
import Blog from './Componets/Blog';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/AboutUs' element={<OurServices />} />
        <Route path='/Department' element={<Department />} />
        <Route path='/Doctors' element={<Doctors />} />
        <Route path='/MakeAppointment' element={<MakeAppointment />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;

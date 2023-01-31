import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<div>HOME</div>}/>
        <Route path="/gastos" element={<div>GASTOS</div>}/>
        <Route path="/ingresos" element={<div>INGRESOS</div>}/>
        <Route path="/egresos" element={<div>EGRESOS</div>}/>
        <Route path="/dolares" element={<div>DOLARES</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

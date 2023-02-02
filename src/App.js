import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Gastos from './pages/Gastos';
import Ingresos from './pages/Ingresos';
import Egresos from './pages/Egresos';
import Dolares from './pages/Dolares';
import MovProvider from './context/MovContext';

function App() {
  return (
    <MovProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/gastos" element={<Gastos />}/>
          <Route path="/ingresos" element={<Ingresos />}/>
          <Route path="/egresos" element={<Egresos />}/>
          <Route path="/dolares" element={<Dolares />}/>
        </Routes>
      </BrowserRouter>
    </MovProvider>
  );
}

export default App;

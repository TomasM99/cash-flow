import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hola que tal</div>}/>
        <Route path="/test" element={<div>Hola soy el test</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

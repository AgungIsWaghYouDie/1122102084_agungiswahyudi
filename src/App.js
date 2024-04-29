import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './component/home';
import Kontak from './component/kontak';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Hero />} />
      <Route path="/Kontak" element={<Kontak/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

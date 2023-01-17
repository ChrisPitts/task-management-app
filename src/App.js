import './css/App.css';
import Nav from './components/Nav';
import Todos from './components/Todos';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todos/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

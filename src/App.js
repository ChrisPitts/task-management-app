import './css/App.css';
import Nav from './components/Nav';
import Todos from './components/Todos';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector} from 'react-redux';

function App() {

  const state = useSelector((state)=>state);


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

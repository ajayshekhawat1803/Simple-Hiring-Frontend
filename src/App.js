import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import HrDetails from './Components/HR Details/HrDetails';
import Home from './Components/Home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HrDetails/>} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

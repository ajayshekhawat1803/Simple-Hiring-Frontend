import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import HrDetails from './Components/HR Details/HrDetails';
import Home from './Components/Home/Home';
import ShowCandidates from './Components/Show Candidates/ShowCandidates';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HrDetails/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/Show-Candidates' element={<ShowCandidates />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

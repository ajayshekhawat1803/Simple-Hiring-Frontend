import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import HrDetails from './Components/HR Details/HrDetails';
import Home from './Components/Home/Home';
import ShowCandidates from './Components/Show Candidates/ShowCandidates';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminMain from './Components/Admin/AdminMain';
import AddCandidate from './Components/Admin/AddCandidate';
import EditCandidate from './Components/Admin/EditCandidate';
import VisitedRecruiters from './Components/Admin/VisitedRecruiters';
import CandidateData from './Components/Candidate Data/CandidateData';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HrDetails />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Show-Candidates/:Category' element={<ShowCandidates />} />
          <Route path='/candidate/:id' element={<CandidateData />} />

          {/* Admin Routes  */}
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/admin/' element={<AdminMain />} >
            <Route path='/admin/add-candidate' element={<AddCandidate />} />
            <Route path='/admin/edit-candidate' element={<EditCandidate />} />
            <Route path='/admin/visited-recruiters' element={<VisitedRecruiters />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

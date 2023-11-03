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
import { createContext, useEffect, useState } from 'react';
import Shorlisted from './Components/Shortlisted/Shorlisted';
import axios from 'axios';
import Footer from './Components/Footer/Footer';

export const context = createContext({})

function App() {
  const [shortlisted, setshortlisted] = useState([])
  const [liked, setliked] = useState({})
  const [Auth, setAuth] = useState(null)
  const serverLink = "http://localhost:4000"


  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("RecruiterInfo"))
    setAuth(auth)
    if (auth) {
      getRecruiterDetails(auth.result._id)
    }
  }, [])

  const getRecruiterDetails = async (id) => {
    let response = await axios.get(`${serverLink}/recruiter/liked/${id}`)
    response = response.data
    setliked(response.liked)
    setshortlisted(response.shortlisted)
  }

  const UpdateShortlisted = async () => {
    if (Auth) {
      const recruiterData = { ...Auth.result, liked, shortlisted }
      let result = await axios.put(`${serverLink}/recruiter/shortlist`, { ...recruiterData })
      // console.log(result);
    }
  }
  return (
    <>
      <BrowserRouter>
        <context.Provider value={{ shortlisted, setshortlisted, UpdateShortlisted, serverLink, Auth, setAuth, liked, setliked }}>
          <Header />
          <Routes>
            <Route path='/' element={<HrDetails />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shorlisted' element={<Shorlisted />} />
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
          <Footer />
        </context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

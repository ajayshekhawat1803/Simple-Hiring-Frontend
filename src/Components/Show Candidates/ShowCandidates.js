import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './ShowCandidates.css'



const ShowCandidates = () => {
    const [AllCandidates, setAllCandidates] = useState([])
    const [ShowCandidates, setShowCandidates] = useState([])
    const [category, setCategory] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        getCandidateDetails()
    }, []);
    useEffect(() => {
        setShowCandidates(category === "All" ?
            AllCandidates
            : AllCandidates.filter((candidate) => {
                return candidate.category === category ? candidate : null
            })
        )
    }, [category])

    const getCandidateDetails = async () => {
        let Response = await axios.get("http://localhost:4000/home/all-candidates")
        Response = Response.data
        setAllCandidates(Response)
        setCategory(window.location.href.split("/Show-Candidates/")[1])
    }

    return (
        <div className='show'>
            <div className='cat-cont'>
                <label htmlFor='category'>Category</label>
                <select value={category} onChange={(e) => { setCategory(e.target.value) }}>
                    <option value="All">All </option>
                    <option value="Frontend-Developers">Frontend Developers</option>
                    <option value="Backend-Developers">Backend Developers </option>
                    <option value="Full-Stack-Developers">Full Stack Developers</option>
                    <option value="Ui-Ux-Designers">UI/UX Designers</option>
                </select>
            </div>
            <div className='candidates'>
                {ShowCandidates.length>0?
                    ShowCandidates.map((candidate) => {
                        return (
                            <div className='candidate' key={candidate._id}>
                                <div className='left'>
                                    <img src={`http://localhost:4000/uploads/Candidates/${candidate.profilePic.filename}`} alt='Failed to load Image' />
                                    <h2>{candidate.name}</h2>
                                </div>
                                <div className='right'>
                                    <h3>{candidate.category}</h3>
                                    <h4>Top Skills ⬇️</h4>
                                    <ul>
                                        {
                                            candidate.skills.slice(0, 4).map((skill, index) => {
                                                return (
                                                    <li key={index}>{skill}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <button onClick={() => navigate(`/candidate/${candidate._id}`)}>Click here to see all Details</button>
                                </div>
                            </div>
                        )
                    })
                    :<h2>No Candidate Available</h2>
                }


                {/*
                 <div className='candidate'>
                    <div className='left'>
                        <img src='https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Failed to load Image' />
                        <h2>Ajay Shekhawat</h2>
                    </div>
                    <div className='right'>
                        <h3>Full Stack Developer</h3>
                        <h4>Top Skills ⬇️</h4>
                        <ul>
                            <li>gggg</li>
                            <li>gggg</li>
                            <li>gggg</li>
                            <li>gggg</li>
                        </ul>
                        <button>Click here to see all Details</button>
                    </div>
                </div> 
                */}
            </div>
        </div>
    )
}

export default ShowCandidates

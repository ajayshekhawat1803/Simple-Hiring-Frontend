import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ShowCandidates.css'



const ShowCandidates = () => {
    const [Allcandidates, setAllCandidates] = useState([])

    useEffect(() => {
        getCandidateDetails()
    }, []);

    const getCandidateDetails = async () => {
        let Response = await axios.get("http://localhost:4000/home/all-candidates")
        Response = Response.data
        setAllCandidates(Response)
    }

    return (
        <div className='show'>
            <div className='cat-cont'>
                <label htmlFor='category'>Category</label>
                <select>
                    <option value="">All </option>
                    <option value="Frontend">Frontend Developers </option>
                    <option value="Backend">Backend Developers </option>
                    <option value="FullStack">Full Stack Developers </option>
                </select>
            </div>
            <div className='candidates'>
                {
                    Allcandidates.map((candidate) => {
                        return (
                            <div className='candidate' key={candidate._id}>
                                <div className='left'>
                                    <img src='https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Failed to load Image' />
                                    <h2>{candidate.name}</h2>
                                </div>
                                <div className='right'>
                                    <h3>{candidate.category}</h3>
                                    <h4>Top Skills ⬇️</h4>
                                    <ul>
                                        {
                                            candidate.skills.slice(0, 4).map((skill) => {
                                                return (
                                                    <li>{skill}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <button>Click here to see all Details</button>
                                </div>
                            </div>
                        )
                    })
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

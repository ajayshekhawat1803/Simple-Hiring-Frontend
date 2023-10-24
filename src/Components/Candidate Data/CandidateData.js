import React, { useEffect, useState } from 'react'
import './CandidateData.css'
import axios from 'axios'

const CandidateData = () => {
    const [CandidateData, setCandidateData] = useState({})
    useEffect(() => {
        getCandidateData()
    }, [])
    const getCandidateData = async () => {
        const Candidate_Id = window.location.href.split("/candidate/")[1]
        let response = await axios.get(`http://localhost:4000/home/candidate/${Candidate_Id}`)
        response = response.data
        setCandidateData(response[0])
        console.log(response);
    }

    return (
        <div className='candidatePage'>
            <div className='container'>
                <h2 id='name'>{CandidateData.name}</h2>
                <div className='data'>
                    <div className='top'>
                        <img />
                        <div>
                            <div className='input-cont'>
                                <h3>Category</h3>
                                <h2>{CandidateData.category}</h2>
                            </div>
                            <div className='input-cont' id='skillSection'>
                                <h3>Top Skills</h3>
                                <ul>
                                    {
                                        CandidateData.skills ?
                                            CandidateData.skills.map((skill) => {
                                                return (
                                                    <li>{skill}</li>
                                                )
                                            })
                                            : ""
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='btm'>
                            <h2>Qualifications</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidateData

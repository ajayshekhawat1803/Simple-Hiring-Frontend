import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VisitedRecruiters = () => {
    const [Recruiters, setRecruiters] = useState([])
    useEffect(() => {
        getRecruiterData()
    }, [])
    const getRecruiterData = async () => {
        let result = await axios.get("http://localhost:4000/admin/RecruiterInfo")
        result = result.data
        setRecruiters(result.reverse())
    }

    return (
        <div className='visitedRecruiters'>
            {Recruiters ?
                <>
                    {
                        Recruiters.map((Recruiter) => {
                            return (
                                <div className='recruiterBox' key={Recruiter._id}>
                                    <div className='flexContent'>
                                        <h1>Name</h1>
                                        <h2>{Recruiter.HrName}</h2>
                                    </div>
                                    <div className='flexContent'>
                                        <h1>Email</h1>
                                        <h2>{Recruiter.HrEmail}</h2>
                                    </div>
                                    <div className='flexContent'>
                                        <h1>Time Visited</h1>
                                        <h2>{Recruiter.Time}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
                : ""
            }
        </div>
    )
}

export default VisitedRecruiters

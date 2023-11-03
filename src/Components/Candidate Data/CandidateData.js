import React, { useContext, useEffect, useState } from 'react'
import './CandidateData.css'
import axios from 'axios'
import { context } from '../../App'

const CandidateData = () => {
    const [CandidateData, setCandidateData] = useState({})
    useEffect(() => {
        getCandidateData()
    }, [])
    const { serverLink } = useContext(context)

    const getCandidateData = async () => {
        const Candidate_Id = window.location.href.split("/candidate/")[1]
        let response = await axios.get(`${serverLink}/home/candidate/${Candidate_Id}`)
        response = response.data
        setCandidateData(response[0])
        console.log(response);
    }
    const subject = 'Regarding Job - Scheduling Interview';
    const message = "Hello !! I have seen your Profile on your FSL portal, Your Projects are really Good , Will you be able for an Interview in the next 2-3 Days"
    return (
        <div className='candidatePage'>
            <div className='container'>
                <h2 id='name'>{CandidateData.name}</h2>
                <div className='data'>
                    <div className='top'>
                        <img
                            src={CandidateData.profilePic ?
                                `${serverLink}/uploads/Candidates/${CandidateData.profilePic.filename}`
                                : ""
                            } alt='Failed to Load Image' />
                        <div>
                            <div className='input-cont'>
                                <h3 id='CatTag'>Category</h3>
                                <h2 id='CategoryTag'>{CandidateData.category}</h2>
                            </div>
                            <div className='input-cont' id='skillSection'>
                                <h3>Top Skills</h3>
                                <ul>
                                    {
                                        CandidateData.skills ?
                                            CandidateData.skills.map((skill, index) => {
                                                return (
                                                    <li key={index}>{skill}</li>
                                                )
                                            })
                                            : ""
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='btm'>
                        <div className='projects'>
                            <h1>Projects</h1>
                            {
                                CandidateData.projects ?
                                    CandidateData.projects.map((project, index) => {
                                        return (
                                            <a href={project.projectLink} target='_blank' key={index}>{project.projectName}</a>
                                        )
                                    })
                                    : ""
                            }
                        </div>
                        <div className='Qualifications'>
                            <h1>Qualifications</h1>
                            <div>
                                <h2>Graduation</h2>
                                <div className='qual-cont'>
                                    <h3>College Name</h3>
                                    <h3>{CandidateData.qualifications ? CandidateData.qualifications.graduation.collegeName : ""}</h3>
                                </div>
                                <div className='qual-cont'>
                                    <h3>Passing Year</h3>
                                    <h3>{CandidateData.qualifications ? CandidateData.qualifications.graduation.year : ""}</h3>
                                </div>
                                <div className='qual-cont'>
                                    <h3>Percentage Achieved</h3>
                                    <h3>{CandidateData.qualifications ? CandidateData.qualifications.graduation.percentage : ""}%</h3>
                                </div>
                            </div>

                            <div>
                                <h2>12th</h2>
                                <div className='qual-cont'>
                                    <h3>School Name</h3>
                                    <h3>{CandidateData.qualifications ? CandidateData.qualifications.seniorSecondary.schoolName12 : ""}</h3>
                                </div>
                                <div className='qual-cont'>
                                    <h3>Passing Year</h3>
                                    <h3>{CandidateData.qualifications ? CandidateData.qualifications.seniorSecondary.year12 : ""}</h3>
                                </div>
                                <div className='qual-cont'>
                                    <h3>Percentage Achieved</h3>
                                    <h3>{CandidateData.qualifications ? CandidateData.qualifications.seniorSecondary.percentage12 : ""}%</h3>
                                </div>
                            </div>

                            <div>
                                <h2>10th</h2>
                                <div className='qual-cont'>
                                    <h3>School Name</h3>
                                    <h3>{CandidateData.qualifications ? CandidateData.qualifications.secondary.schoolName10 : ""}</h3>
                                </div>
                                <div className='qual-cont'>
                                    <h3>Passing Year</h3>
                                    <h3>{CandidateData.qualifications ? CandidateData.qualifications.secondary.year10 : ""}</h3>
                                </div>
                                <div className='qual-cont'>
                                    <h3>Percentage Achieved</h3>
                                    <h3>{CandidateData.qualifications ? CandidateData.qualifications.secondary.percentage10 : ""}%</h3>
                                </div>
                            </div>
                        </div>
                        <div className='Contact'>
                            <h1>Contact <span>({CandidateData.name})</span></h1>
                            <div>
                                <a href={`https://wa.me/+91${CandidateData.mobile}?text=${encodeURIComponent(message)}`} target='_blank'>Whatsapp</a>
                                <a href={`mailto:${CandidateData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`} target='_blank'>Gmail</a>
                                <a href={`https://www.linkedin.com/in/${CandidateData.linkedIn}`} target='_blank'>Linked In</a>
                                <a href={`https://github.com/${CandidateData.github}`} target='_blank'>GitHUb</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidateData

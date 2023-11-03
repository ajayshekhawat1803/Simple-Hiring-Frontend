import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './ShowCandidates.css'
import heart from '../../Assests/heart.png'
import heartliked from '../../Assests/heartLiked.png'
import { context } from '../../App'


const ShowCandidates = () => {
    const [AllCandidates, setAllCandidates] = useState([])
    const [ShowCandidates, setShowCandidates] = useState([])
    const [category, setCategory] = useState("")
    const { shortlisted, setshortlisted, serverLink, liked, setliked, UpdateShortlisted } = useContext(context)
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
        let Response = await axios.get(`${serverLink}/home/all-candidates`)
        Response = Response.data
        setAllCandidates(Response)
        setCategory(window.location.href.split("/Show-Candidates/")[1])
    }

    const handleLike = (candidate) => {
        if (liked[candidate._id]) {
            // If the candidate is already liked, remove from the shortlisted array and mark as not liked
            setshortlisted(shortlisted.filter((cand) => cand._id !== candidate._id))
            setliked({ ...liked, [candidate._id]: false })
        } else {
            // If the candidate is not liked, add to the shortlisted array and mark as liked
            setshortlisted([...shortlisted, candidate]);
            setliked({ ...liked, [candidate._id]: true });
        }
    }

    useEffect(() => {
        UpdateShortlisted()
    }, [liked, shortlisted])

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
                {ShowCandidates.length > 0 ?
                    ShowCandidates.map((candidate) => {
                        return (
                            <div className='candidate' key={candidate._id}>
                                <div className='left'>
                                    <img src={`${serverLink}/uploads/Candidates/${candidate.profilePic.filename}`} alt='Failed to load Image' />
                                    <h2>{candidate.name}</h2>
                                </div>
                                <div className='right'>
                                    <h3>
                                        {candidate.category}
                                        <img src={liked[candidate._id] ? heartliked : heart} alt='like' onClick={() => handleLike(candidate)} />
                                    </h3>
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
                    : <h2>No Candidate Available</h2>
                }
            </div>
        </div>
    )
}

export default ShowCandidates

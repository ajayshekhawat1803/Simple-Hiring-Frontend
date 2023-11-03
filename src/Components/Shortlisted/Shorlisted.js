import React, { useContext, useEffect } from 'react'
import './Shortlisted.css'
import { context } from '../../App'
import { useNavigate } from 'react-router-dom'
import heart from '../../Assests/heart.png'
import heartliked from '../../Assests/heartLiked.png'

const Shorlisted = () => {
  const { shortlisted, setshortlisted, liked, setliked, serverLink, Auth, UpdateShortlisted } = useContext(context)
  const navigate = useNavigate()


  useEffect(() => {
    UpdateShortlisted()
  }, [liked, shortlisted])

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
  return (
    <div className='shrl-main'>
      <div className='shrl'>
        <h2>Shortlisted Candidates</h2>
        <div className='shrl-cand-cont'>
          {shortlisted.length > 0 ?
            shortlisted.map((candidate) => {
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
    </div>
  )
}

export default Shorlisted
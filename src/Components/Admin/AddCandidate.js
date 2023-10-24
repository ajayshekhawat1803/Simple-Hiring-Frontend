import axios from 'axios'
import React, { useState } from 'react'

const AddCandidate = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [category, setCategory] = useState("")
  const [skillss, setskills] = useState("")
  const [skills, setskillsArray] = useState([])
  const [profilePic, setProfilePic] = useState(null)
  const [mobile, setMobile] = useState("")

  const HandleAddCandidate = async () => {
    // let response = await axios.post("http://localhost:4000/admin/add-candidate", { name, email, category, skills })
    // response = response.data
    // if (response._id) {
    //   alert("New Candidate has been added to Database")
    // } else {
    //   alert("Ooops!! Something Went wrong")
    // }
    // console.log({ name, email, category, skills, mobile, profilePic });
    let result = await axios.post("http://localhost:4000/admin/add-candidate",
      { name, email, category, skills, mobile, profilePic },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    console.log(result.data);
  }
  return (
    <div className='addCandidate'>
      <h2>Add Candidate</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        HandleAddCandidate()
      }}
        encType='multipart/form-data'>
        <div className='input-cont'>
          <label>Name</label>
          <input type='text' autoFocus placeholder='Name of Candidate' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>email</label>
          <input type='email' placeholder='Email of Candidate'
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>Mobile</label>
          <input type='number' placeholder='Mobile Number of Candidate'
            value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>category</label>
          <input type='text' placeholder='Category of Candidate' value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>Skills</label>
          <input type='text' placeholder='Separate skills by ","' value={skillss} onChange={(e) => setskills(e.target.value)}
            onBlur={(e) => {
              setskillsArray(skillss.split(","));
            }} />
        </div>
        <div className='input-cont'>
          <label>ProfilePic</label>
          <input type='file' onChange={(e) => setProfilePic(e.target.files[0])} />
        </div>
        <input type='submit' value="Add Candidate" />
      </form>
    </div>
  )
}

export default AddCandidate

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
  const [schoolName10, setschoolName10] = useState("")
  const [year10, setyear10] = useState("")
  const [percentage10, setpercentage10] = useState("")
  const [schoolName12, setschoolName12] = useState("")
  const [year12, setyear12] = useState("")
  const [percentage12, setpercentage12] = useState("")
  const [collegeName, setCollegeName] = useState("")
  const [year, setYear] = useState("")
  const [percentage, setPercentage] = useState("")

  const HandleAddCandidate = async () => {
    // console.log({
    //   name: name,
    //   email: email,
    //   category: category,
    //   skills: skills,
    //   mobile: mobile,
    //   profilePic: profilePic,
    //   secondary: { schoolName10, year10, percentage10 },
    //   seniorSecondary: { schoolName12, year12, percentage12 },
    //   graduation: { collegeName, year, percentage }
    // });
    let result = await axios.post("http://localhost:4000/admin/add-candidate",
      {
        name: name,
        email: email,
        category: category,
        skills: skills,
        mobile: mobile,
        profilePic: profilePic,
        qualifications: {
          secondary: { schoolName10, year10, percentage10 },
          seniorSecondary: { schoolName12, year12, percentage12 },
          graduation: { collegeName, year, percentage }
        }
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    console.log(result.data);
    if (result.data._id) {
      alert("New Candidate has been added to Database")
    } else {
      alert("Ooops!! Something Went wrong")
    }
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
          {/* <input type='text' placeholder='Category of Candidate' value={category} onChange={(e) => setCategory(e.target.value)} /> */}
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Not Selected</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
          </select>
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
        <h2>Qualification Details</h2>
        <h4>10th</h4>
        <div className='input-cont'>
          <label>School Name</label>
          <input type='text' placeholder='School Name' value={schoolName10} onChange={(e) => setschoolName10(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>Passing Year</label>
          <input type='number' placeholder='Year Passed' value={year10} onChange={(e) => setyear10(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>Percentage</label>
          <input type='number' placeholder='Percentage Achieved' value={percentage10} onChange={(e) => setpercentage10(e.target.value)} />
        </div>
        <h4>12th</h4>
        <div className='input-cont'>
          <label>School Name</label>
          <input type='text' placeholder='School Name' value={schoolName12} onChange={(e) => setschoolName12(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>Passing Year</label>
          <input type='number' placeholder='Year Passed' value={year12} onChange={(e) => setyear12(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>Percentage</label>
          <input type='number' placeholder='Percentage Achieved' value={percentage12} onChange={(e) => setpercentage12(e.target.value)} />
        </div>
        <h4>Graduation</h4>
        <div className='input-cont'>
          <label>School Name</label>
          <input type='text' placeholder='School Name' value={collegeName} onChange={(e) => setCollegeName(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>Passing Year</label>
          <input type='number' placeholder='Year Passed' value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className='input-cont'>
          <label>Percentage</label>
          <input type='number' placeholder='Percentage Achieved' value={percentage} onChange={(e) => setPercentage(e.target.value)} />
        </div>
        <input type='submit' value="Add Candidate" />
      </form>
    </div>
  )
}

export default AddCandidate

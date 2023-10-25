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
  const [github, setGithub] = useState("")
  const [linkedIn, setLinkedIn] = useState("")
  const [schoolName10, setschoolName10] = useState("")
  const [year10, setyear10] = useState("")
  const [percentage10, setpercentage10] = useState("")
  const [schoolName12, setschoolName12] = useState("")
  const [year12, setyear12] = useState("")
  const [percentage12, setpercentage12] = useState("")
  const [collegeName, setCollegeName] = useState("")
  const [year, setYear] = useState("")
  const [percentage, setPercentage] = useState("")
  const [resume, setResume] = useState(null)


  // Code for Dynamic Projects 
  const [projects, setProjects] = useState([{ projectName: '', projectLink: '' }]);
  const addProject = () => {
    setProjects([...projects, { projectName: '', projectLink: '' }]);
  };
  const RemoveProject = () => {
    const updatedProjects = [...projects];
    updatedProjects.pop();
    setProjects(updatedProjects);
};
  const handleProjectChange = (value, index, field) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const HandleAddCandidate = async () => {
    let result = await axios.post("http://localhost:4000/admin/add-candidate",
      {
        name: name,
        email: email,
        category: category,
        skills: skills,
        mobile: mobile,
        github: github,
        linkedIn: linkedIn,
        projects:projects,
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
      <form onSubmit={(e) => { e.preventDefault(); }}
        encType='multipart/form-data'>
        <div>
          <h2>Personal Details</h2>
          <div className='res-box'>
            <div className='input-cont'>
              <label>Name</label>
              <input type='text' autoFocus required placeholder='Name of Candidate' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='input-cont'>
              <label>Email</label>
              <input type='email' placeholder='Email of Candidate' required
                value={email} onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())} />
            </div>
          </div>
          <div className='res-box'>
            <div className='input-cont'>
              <label>Mobile</label>
              <input type='number' placeholder='Mobile Number of Candidate' required
                value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className='input-cont'>
              <label>Category</label>
              <select required value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Not Selected</option>
                <option value="Frontend-Developers">Frontend Developers</option>
                <option value="Backend-Developers">Backend Developers </option>
                <option value="Full-Stack-Developers">Full Stack Developers</option>
                <option value="Ui-Ux-Designers">UI/UX Designers</option>
              </select>
            </div>
          </div>
          <div className='res-box'>
            <div className='input-cont'>
              <label>GitHub Link</label>
              <input type='text' placeholder='Your Github Profile Link'required
                value={github} onChange={(e) => setGithub(e.target.value)} />
            </div>
            <div className='input-cont'>
              <label>Linked In </label>
              <input type='text' placeholder='Your LinkedIn Profile Link' required
                value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
            </div>
          </div>
          <div className='res-box'>
            <div className='input-cont'>
              <label>Skills</label>
              <input type='text' placeholder='Separate skills by ","' required value={skillss} onChange={(e) => setskills(e.target.value)}
                onBlur={(e) => {
                  setskillsArray(skillss.split(","));
                }} />
            </div>
            <div className='input-cont'>
              <label>ProfilePic</label>
              <input type='file' required onChange={(e) => setProfilePic(e.target.files[0])} />
            </div>
          </div>
        </div>

        <div>
          <h2>Add Projects</h2>
          {projects.map((project, index) => {
            return (
              <div key={index} className='res-box'>
                <input
                  type="text"
                  placeholder="Project Name"
                  required
                  value={project.projectName}
                  onChange={(e) => handleProjectChange(e.target.value, index, 'projectName')}
                />
                <input
                  type="text"
                  placeholder="Project Link"
                  required
                  value={project.projectLink}
                  onChange={(e) => handleProjectChange(e.target.value, index, 'projectLink')}
                />
              </div>
            )
          })}
          <button onClick={addProject} id='AddNewProject'>Add New Project</button>
          <button onClick={RemoveProject} id='AddNewProject'>Remove Last Project</button>
        </div>

        <div className='qualifications'>
          <h2>Qualification Details</h2>
          <h4 className='edu'>10th</h4>
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
          <h4 className='edu'>12th</h4>
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
          <h4 className='edu'>Graduation</h4>
          <div className='input-cont'>
            <label>College Name</label>
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
        </div>

        <div className='input-cont'>
          <label>Upload Resume</label>
          <input type='file' onChange={(e) => setResume(e.target.files[0])} />
        </div>

        <input type='submit' value="Add Candidate" onClick={HandleAddCandidate} id='AddCandidate'/>
      </form>
    </div>
  )
}

export default AddCandidate

import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { context } from '../../App'

const EditCandidate = () => {
    const [CandidateData, setCandidateData] = useState({})
    const [searchId, setsearchId] = useState("")
    const [showData, setShowData] = useState(false)
    const [NoData, setNoData] = useState(false)
    const navigate = useNavigate()

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

    const { serverLink } = useContext(context)


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

    const HandleCandidateDetails = async () => {
        let response = await axios.get(`${serverLink}/admin/CandidateInfo/${searchId}`)
        response = response.data
        if (response.name) {
            setCandidateData(response)
            setShowData(true)
            setNoData(false)
            // PrefillData()
            if (response.name) {
                setName(response.name)
                setEmail(response.email)
                setCategory(response.category)
                setskills(response.skills.toString())
                setProfilePic(response.profilePic)
                setMobile(response.mobile)
                setGithub(response.github)
                setLinkedIn(response.linkedIn)
                setResume(response.resume)
                setProjects(response.projects)
                setschoolName10(response.qualifications.secondary.schoolName10)
                setyear10(response.qualifications.secondary.year10)
                setpercentage10(response.qualifications.secondary.percentage10)
                setschoolName12(response.qualifications.seniorSecondary.schoolName12)
                setyear12(response.qualifications.seniorSecondary.year12)
                setpercentage12(response.qualifications.seniorSecondary.percentage12)
                setCollegeName(response.qualifications.graduation.collegeName)
                setYear(response.qualifications.graduation.year)
                setPercentage(response.qualifications.graduation.percentage)
                setskillsArray(response.skills.toString().split(","))
            }
        } else {
            setShowData(false)
            setNoData(true)
        }
    }
    const HandleUpdateData = async () => {
        let result = await axios.put(`${serverLink}/admin/edit-candidate/${searchId}`,
            {
                name: name,
                email: email,
                category: category,
                skills: skills,
                mobile: mobile,
                github: github,
                linkedIn: linkedIn,
                profilePic: profilePic,
                projects: projects,
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
        result = result.data
        if (result.name) {
            alert("Candidate Data Modified")
            navigate(`/candidate/${searchId}`)
        }
        else {
            alert("Somenthing Went Wrong")
        }
    }

    return (
        <div className='editCandidate'>
            <div className='search'>
                <input type='text' placeholder='Search Candidate by ID' value={searchId} onChange={(e) => setsearchId(e.target.value)} />
                <button onClick={HandleCandidateDetails}>Get Details</button>
            </div>
            {
                NoData &&
                <>
                    <h2>No Data Available</h2>
                </>
            }
            {
                showData &&
                <>
                    <div className='addCandidate'>
                        <h2>Edit Candidate Data</h2>
                        <form onSubmit={(e) => { e.preventDefault(); }}
                            encType='multipart/form-data'>
                            <div>
                                <h2>Personal Details</h2>
                                <div className='res-box'>
                                    <div className='input-cont'>
                                        <label>Name</label>
                                        <input type='text' autoFocus placeholder='Name of Candidate' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className='input-cont'>
                                        <label>email</label>
                                        <input type='email' placeholder='Email of Candidate'
                                            value={email} onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())} />
                                    </div>
                                </div>
                                <div className='res-box'>
                                    <div className='input-cont'>
                                        <label>Mobile</label>
                                        <input type='number' placeholder='Mobile Number of Candidate'
                                            value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    </div>
                                    <div className='input-cont'>
                                        <label>category</label><select value={category} onChange={(e) => setCategory(e.target.value)}>
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
                                        <label>GitHub Username</label>
                                        <input type='text' placeholder='Your Github Username'
                                            value={github} onChange={(e) => setGithub(e.target.value.trim())} />
                                    </div>
                                    <div className='input-cont'>
                                        <label>LinkedIn Username</label>
                                        <input type='text' placeholder='Your LinkedIn Username'
                                            value={linkedIn} onChange={(e) => setLinkedIn(e.target.value.trim())} />
                                    </div>
                                </div>
                                <div className='res-box'>
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
                                                value={project.projectName}
                                                required
                                                onChange={(e) => handleProjectChange(e.target.value, index, 'projectName')}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Project Link"
                                                value={project.projectLink}
                                                required
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

                                <h4 className='edu'>Graduation</h4>
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
                            </div>

                            <div className='input-cont'>
                                <label>Upload Resume</label>
                                <input type='file' onChange={(e) => setResume(e.target.files[0])} />
                            </div>

                            <input type='submit' value="Update Details" id='AddCandidate' onClick={() => {
                                //Checking All Values
                                if (name && email && category && skills && profilePic && mobile && github && linkedIn && schoolName10 && year10 && percentage10 && schoolName12 && year12 && percentage12 && collegeName && year && percentage) {
                                    //Checking if all projects have their names and links
                                    const condition = projects.filter((project) => {
                                        return project.projectName === "" || project.projectLink === "" ? project : null
                                    })
                                    if (condition.length) {
                                        return false        // Function Execution terminated if any project is left empty
                                    }
                                    HandleUpdateData()
                                }
                            }
                            } />
                        </form>
                    </div>
                </>
            }
        </div>
    )
}

export default EditCandidate

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './HrDetails.css'
import CreaterLine from '../CreaterTAg/CreaterLine'


const HrDetails = () => {
    const [HrName, setHrName] = useState("")
    const [HrEmail, setHrEmail] = useState("")
    const [emailerr, setemailerr] = useState(false)
    const navigate = useNavigate()
    let Time = new Date()
    Time = Time.toString().split("GMT")[0]


    const HandleSubmit = async () => {
        console.log()
        if (HrEmail.split("@")[1] === "gmail.com" || HrEmail.split("@")[1] === "yahoo.com") {
            setemailerr(true)
            return false
        }
        else {
            let response = await axios.post("http://localhost:4000/recruiter/info", {
                HrName, HrEmail, Time
            })
            response = response.data;
            if (response.token) {
                localStorage.setItem("RecruiterInfo", JSON.stringify(response))
                navigate("/home")
            }
        }
    }
    return (<>

        <div className='Hr-Details-cont'>
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        HandleSubmit();
                    }}>
                <h2>Enter Your Details</h2>
                <div className='input-cont'>
                    <label>Name </label>
                    <input type='text' required placeholder='Enter Your Name' value={HrName} onChange={(e) => setHrName(e.target.value)} />
                </div>
                <div className='input-cont'>
                    <label>Email</label>
                    <input type='email' required placeholder='Enter Your email' value={HrEmail} onChange={(e) => setHrEmail(e.target.value)} />
                    {
                        emailerr && <span id='emailErr'>Enter Your Company Email</span>
                    }
                </div>
                <input type='submit' value="Submit" id='SubmitBtn' />
            </form>
        <CreaterLine />
        </div>
    </>
    )
}

export default HrDetails

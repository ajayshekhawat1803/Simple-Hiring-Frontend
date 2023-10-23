import React, { useState } from 'react'
import './HrDetails.css'

const HrDetails = () => {
    const [HrName, setHrName] = useState("")
    const [HrEmail, setHrEmail] = useState("")
    const [HrCompany, setCompany] = useState("")

    const HandleSubmit = () => {
        console.log(HrName,HrEmail,HrCompany);
     }
    return (
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
                </div>
                <div className='input-cont'>
                    <label>Company</label>
                    <input type='text' required placeholder='Your Company Name' value={HrCompany} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <input type='submit' value="Submit" id='SubmitBtn' />
            </form>
        </div>
    )
}

export default HrDetails

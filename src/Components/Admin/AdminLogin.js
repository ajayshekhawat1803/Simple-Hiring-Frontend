import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { context } from '../../App'

const AdminLogin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const { serverLink } = useContext(context)

    const HandleLogin = async () => {
        let response = await axios.post(`${serverLink}/admin/login`, { username, password })
        response = response.data
        console.log(response);
        if (response.message === "Successful Login") {
            navigate("/admin/home")
        } else {
            alert("Enter Correct Details")
        }
    }
    return (
        <div className='admin'>
            <div className='login'>
                <h3>Admin Login</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    HandleLogin()
                }}>
                    <input type='text' autoFocus required placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type='password' required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type='submit' value="Login" id='loginBtn' />
                </form>
            </div>
        </div>
    )
}

export default AdminLogin

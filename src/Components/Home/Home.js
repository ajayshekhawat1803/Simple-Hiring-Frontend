import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const auth = localStorage.getItem("RecruiterInfo")
        if (!auth) {
            alert("PLzz Enter Your Details First")
            navigate("/")
        }
    })
    return (
        <div className='home'>
            <h2>Select From These Categories</h2>
            <div className='container'>
            <div className='cat-box' onClick={()=>navigate("/Show-Candidates/All")}>
                    <div className='img-cont'>
                        <img src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Not Loaded' />
                    </div>
                    <div className='btm-part'>
                        <h3>All Candidates</h3>
                        <p>Heloo this is full stack devigi hudf uguf ugusrfj ugrfu nugeufdba iuaghfuamu ugrfu huagrf uhufr </p>
                        <Link to="/Show-Candidates/All">Show Candidates</Link>
                    </div>
                </div>
                <div className='cat-box' onClick={()=>navigate("/Show-Candidates/Full-Stack-Developers")}>
                    <div className='img-cont'>
                        <img src='https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Not Loaded' />
                    </div>
                    <div className='btm-part'>
                        <h3>Full Stack Developer</h3>
                        <p>Heloo this is full stack devigi hudf uguf ugusrfj ugrfu nugeufdba iuaghfuamu ugrfu huagrf uhufr </p>
                        <Link to="/Show-Candidates/Full-Stack-Developers">Show Candidates</Link>
                    </div>
                </div>
                <div className='cat-box' onClick={()=>navigate("/Show-Candidates/Frontend-Developers")}>
                    <div className='img-cont'>
                        <img src='https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Not Loaded' />
                    </div>
                    <div className='btm-part'>
                        <h3>Frontend Developer</h3>
                        <p>Heloo this is full stack devigi hudf uguf ugusrfj ugrfu nugeufdba iuaghfuamu ugrfu huagrf uhufr </p>
                        <Link to="/Show-Candidates/Frontend-Developers">Show Candidates</Link>
                    </div>
                </div>
                <div className='cat-box' onClick={()=>navigate("/Show-Candidates/Backend-Developers")}>
                    <div className='img-cont'>
                        <img src='https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Not Loaded' />
                    </div>
                    <div className='btm-part'>
                        <h3>Backend Developer</h3>
                        <p>Heloo this is full stack devigi hudf uguf ugusrfj ugrfu nugeufdba iuaghfuamu ugrfu huagrf uhufr </p>
                        <Link to="/Show-Candidates/Backend-Developers">Show Candidates</Link>
                    </div>
                </div>
                <div className='cat-box' onClick={()=>navigate("/Show-Candidates/Ui-Ux-Designers")}>
                    <div className='img-cont'>
                        <img src='https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Not Loaded' />
                    </div>
                    <div className='btm-part'>
                        <h3>UI/UX Designer</h3>
                        <p>Heloo this is full stack devigi hudf uguf ugusrfj ugrfu nugeufdba iuaghfuamu ugrfu huagrf uhufr </p>
                        <Link to="/Show-Candidates/Ui-Ux-Designers">Show Candidates</Link>
                    </div>
                </div>
                <div className='cat-box' onClick={()=>navigate("/Show-Candidates/Full-Stack-Developers")}>
                    <div className='img-cont'>
                        <img src='https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Not Loaded' />
                    </div>
                    <div className='btm-part'>
                        <h3>Full Stack Developer</h3>
                        <p>Heloo this is full stack devigi hudf uguf ugusrfj ugrfu nugeufdba iuaghfuamu ugrfu huagrf uhufr </p>
                        <Link to="/Show-Candidates/Full-Stack-Developers">Show Candidates</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

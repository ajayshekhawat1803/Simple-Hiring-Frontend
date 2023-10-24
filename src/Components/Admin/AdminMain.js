import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Admin.css'

const AdminMain = () => {
    return (
        <div className='admin'>
            <div className='top'>
                <Link to="/admin/add-candidate">Add Candidate</Link>
                <Link to="/admin/edit-candidate">Edit Candidate Details</Link>
                <Link to="/admin/visited-recruiters">See Visited Recruiters</Link>
            </div>
            <div className='btm'>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminMain

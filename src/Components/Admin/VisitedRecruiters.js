import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VisitedRecruiters = () => {
    const [Recruiters, setRecruiters] = useState([])
    useEffect(() => {
        let result = axios.get("")
    }, [])

    return (
        <div className='visitedRecruiters'>

        </div>
    )
}

export default VisitedRecruiters

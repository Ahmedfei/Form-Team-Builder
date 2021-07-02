  
import React from 'react'

export default function Member({ info }) {
    if (!info) {
        return <h3>Details not available</h3>
    }

    return (
        <div className='member container'>
            <h2>{info.username}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
            <p>Language: {info.language}</p>
        </div>
    )
}
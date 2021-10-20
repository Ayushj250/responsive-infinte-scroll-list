import React from 'react'

import './Skeleton.css';

export default function Skeleton() {
    return (
        <div className='skeleton-container'> 
            <div className="name-placeholder skeleton"></div>
            <div className='img-placeholder skeleton'></div>
        </div>
    )
}

import React from 'react';

import './Card.css';

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="title">{props.name}</div>
            <img className='profile-pic' src={props.img} alt="profile-pic" />
        </div>
    )
}

import React from 'react'

import './input.css';

export default function Input(props) {
    const handleOnChange = (e) => {
        props.onChange(e.target.value);
    };

    return (
        <div className="inputContainer">
            <div className="label">{props.label} :</div>
            <input
                className="input"
                type={props.type}
                value={props.value}
                onChange={handleOnChange}
                placeholder={props.placeholder}
            />
        </div>
    );
}

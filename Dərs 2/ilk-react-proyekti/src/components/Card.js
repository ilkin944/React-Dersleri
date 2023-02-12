import React from 'react'
import './Card.css'
const Card = ({ image, firstName, lastName, city, title, email, phone, gender }) => {
    return (
        <div className="card">
            <div className="card-body">
                <img className="round" src={image} alt="user" />
                <h3>{firstName} {lastName}</h3>
                <h6>{city}</h6>
                <p>{title}</p>
                <div className="buttons">
                    <a href={`mailto:${email}`} className="primary">
                        Message
                    </a>
                    <a href={`tel:${phone}`} className="primary ghost">
                        Call
                    </a>
                </div>
                <div className="skills">
                    <h6>Gender: <span>{gender}</span></h6>
                    
                </div>
            </div>
        </div>
    )
}
export default Card
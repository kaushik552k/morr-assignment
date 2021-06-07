import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import poster from '../../assets/unnamed.jpg'
import './card.css'

export default function Card(props) {
    return (
        <>
        <div className="card" style={{width: '18rem'}}>
                <img src={poster} className="card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
            
        </>
    )
}


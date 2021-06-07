import React from 'react'
import {Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/titles.jpg'
import Header from './Header';
import Footer from './Footer';
import './movies.css'




export default function Home() {
    return (
        <>
        <Header />
        <h6 className="heading_style">Popular Titles </h6>
        <div style={{textAlign:'left'}}>
        <Link to="/series">
        <div className="card" style={{width: '18rem'}}>
                <img src={image} className="card-img" alt="..." />
                <div className="card-body">
                    <h6 to="/series" className="card-title">Series</h6>
                    <p className="card-text">Popular Series</p>
                </div>
            </div>
        </Link>
        
            
            <Link to="/movies">
            <div className="card" style={{width: '18rem'}}>
                <img src={image} className="card-img" alt="..." />
                <div className="card-body">
                    <h6 to="/movies" className="card-title">Movies</h6>
                    <p className="card-text">Popular Movies</p>
                </div>
            </div>
            </Link>
            
        </div>
        
            <Footer/>
           
        </>

    )
}


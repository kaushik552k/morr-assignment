import React from 'react'
import Card from './cards/Card'
import Data from './cards/Data'
import './movies.css'
import Footer from './Footer';
import Header from './Header';



export default function Movies() {
    return (
        <>
            <Header />

            <h6 className="heading_style">Popular Movies </h6>

            {Data.map((val) => {
                return (
                    <Card
                        imgsrc={val.images}
                        title={val.title}
                        sname={val.description}
                        releaseYear={val.releaseYear}
                    />
                )
            })}
            <Footer/>

        </>

    )
}



import React from 'react'
import Card from './cards/Card'
import Data from './cards/Data'
import './movies.css'
import Footer from './Footer';
import Header from './Header';



export default function Series() {
    return (
        <>
        <Header />
            <h6 className="heading_style">Popular Series </h6>

            {Data.map((val) => {
                if(val.programType==='series' && val.releaseYear>=2010){
                   
                        return (
                            <Card
                                imgsrc={val.images}
                                title={val.title}
                                sname={val.description}
                                releaseYear={val.releaseYear}
                            />
                        )

                    
              
                 }

                
            })}

            <Footer/>
        </>

    )
}



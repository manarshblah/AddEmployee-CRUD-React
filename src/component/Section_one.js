import React from 'react'
import TypeWritter from './TypeWritter'

function Section_one() {
    return (
            <div className='container' style={{  position: "relative",marginTop:"30px",borderRadius:"20px" }}>
                <div className='img'></div>
                <p className=' text-section'> </p>
                <p className=' text-section2'>
                    <TypeWritter />
                </p>
            </div>
    )
}

export default Section_one
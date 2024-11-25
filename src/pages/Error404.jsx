import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <>
            <div className="error-page">
                <img loading="lazy" className="text-404 img-fluid" src='images/404-text.png' />
                <img loading="lazy" src="/images/404bg.png" className='img-fluid moutain1' alt="" />

                <div className="content-box">
                    <h3>OOPS! PAGE NOT FOUND</h3>
                    <h5>PERHAPS YOU CAN TRY TO REFRESH THE PAGE, SOMETIMES IT WORKS</h5>

                    <Link to='/'>Home</Link>
                </div>
            </div>
        </>
    )
}

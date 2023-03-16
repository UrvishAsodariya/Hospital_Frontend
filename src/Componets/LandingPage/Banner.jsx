import React from 'react'
import MakeAppointment from './MakeAppointment'

const Banner = (props) => {
    return (
        <>
            <div className='wrapper'>
                <section id="hero">
                    <div className="slider" style={{ backgroundImage: 'url(assets/images/slider1.jpg)' }}>
                        <div className="container">
                            <div className="slider_text">
                                <h3 className="title"><span>Welcome to</span> <br />
                                    Oreo <strong>Hospital</strong></h3>
                                <p className="sub-title">Contrary to popular belief, Lorem Ipsum is not simply random text.</p><br />
                                <button className="btn btn-primary btn-round">View More</button>
                            </div>
                            <MakeAppointment/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Banner;

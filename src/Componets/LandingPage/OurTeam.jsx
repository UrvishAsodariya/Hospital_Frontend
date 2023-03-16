import React, { useState, useEffect } from 'react'
import axios from 'axios'
const OurTeam = () => {
    const [ShowDoctor, SetShowDoctor] = useState([])
    useEffect(() => {
        axios.post('http://localhost/work/hospital_be/add-doctor.php')
            .then((response) => {
                // console.log(response.data);
                SetShowDoctor(response.data);
            }).catch((error) => {
                console.log(error);
            })
    })
    return (
        <>
            {/* Home Our Team */}
            <div className="our-team">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="section-title left col-lg-4" data-aos="fade-up">
                            <h2><span>Meet </span>Our Team</h2>
                            <p>Description text here...</p>
                        </div>
                        <div className="section-title right col-lg-8" data-aos="fade-up">
                            <p><span className="color-212121">Oreo Hospital</span> The wise man therefore always holds in these
                                matters to this principle of selection: he rejects pleasures to secure.</p>
                        </div>
                    </div>
                    <div className="row">
                        {ShowDoctor.map((value) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={5000}>
                                            <div className="doctor-pic"><img className='blogimg1' src={"http://localhost/work/hospital_be/" + value.img} alt={value.first_name} /></div>
                                            <div className="doctor-info">
                                                <h4>{value.first_name} {value.last_name} <span>{value.speciality}</span></h4>
                                                <ul className="clearfix">
                                                    <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                                                    <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                                                    <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                                                </ul>
                                                <a className="btn btn-simple btn-primary btn-round" href="javascript:void(0);">View More</a>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                        {/* <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={4000}>
                                <div className="doctor-pic"><img src="assets/images/team-member-02.png" alt="Dr. Amelia" /></div>
                                <div className="doctor-info">
                                    <h4>Dr. Amelia <span>Gynecologist</span></h4>
                                    <ul className="clearfix">
                                        <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                                        <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                                    </ul>
                                    <a className="btn btn-simple btn-primary btn-round" href="javascript:void(0);">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={5000}>
                                <div className="doctor-pic"><img src="assets/images/team-member-03.png" alt="Dr. Jack" /></div>
                                <div className="doctor-info">
                                    <h4>Dr. Jack <span>Audiology</span></h4>
                                    <ul className="clearfix">
                                        <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                                        <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                                        <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                                        <li><a href="javascript:void(0);"><i className="zmdi zmdi-google-plus" /></a></li>
                                    </ul>
                                    <a className="btn btn-simple btn-primary btn-round" href="javascript:void(0);">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
                                <div className="doctor-pic"><img src="assets/images/team-member-04.png" alt="Dr. Charlie" /></div>
                                <div className="doctor-info">
                                    <h4>Dr. Charlie<span>Dentist</span></h4>
                                    <ul className="clearfix">
                                        <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                                        <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                                        <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                                    </ul>
                                    <a className="btn btn-simple btn-primary btn-round" href="javascript:void(0);">View More</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Home Our Team */}

        </>
    )
}

export default OurTeam

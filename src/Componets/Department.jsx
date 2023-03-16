import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import ChooseUs from './LandingPage/ChooseUs'
import HomeBlog from './LandingPage/HomeBlog'
import axios from 'axios'
const Department = () => {
    const [ShowDepartment, SetShowDepartment] = useState([])

    useEffect(() => {
        axios.post('http://localhost/work/hospital_be/add-department.php')
            .then((response) => {
                console.log(response.data);
                SetShowDepartment(response.data);
            }).catch((error) => {
                console.log(error);
            })
    })

    return (
        <div className='wrapper'>

            <div className="main_header">
                <section id="top-nav">
                    <div className="container">
                        <div className="top">
                            <div className="row">
                                <div className="col-lg-6 col-md-7">
                                    <div className="left">
                                        <ul className="list-unstyled m-b-0">
                                            <li><a href="#" className="btn btn-link"><i className="zmdi zmdi-email m-r-5" />info@example.com</a>
                                                <a href="#" className="btn btn-link"><i className="zmdi zmdi-phone m-r-5" />+
                                                    202-555-0191</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5">
                                    <div className="text-right d-none d-md-block">
                                        <ul className="list-unstyled m-b-0">
                                            <li><a href="javascript:void(0);" className="btn btn-link">Sign in</a> <a href="javascript:void(0);" className="btn btn-link">sign
                                                up</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <header id="header">
                    <div className="container">
                        <div className="head">
                            <div className="row">
                                <div className="col-lg-5 col-sm-5">
                                    <a href="/" className="navbar-brand"><img src="assets/images/logo.svg" alt="logo" /></a>
                                </div>
                                <div className="col-lg-7 col-sm-7">
                                    <div className="text-right d-none d-md-block">
                                        <p className="col-white m-b-0 p-t-5"><i className="zmdi zmdi-time" /> Mon - Sat: 9:00 - 18:00
                                            Sunday CLOSED </p>
                                        <p className="col-white m-b-0"><i className="zmdi zmdi-pin" /> 1422 1st St. Santa Rosa CA
                                            94559. United States </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="navbar" data-aos="fade-down">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                            <div className="collapse navbar-collapse" id="navbarMenu">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                                    <li className="nav-item"><a className="nav-link" href="Department">Departments</a></li>
                                    <li className="nav-item"><a className="nav-link" href="Doctors">Doctors</a></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="Blog">Blog</a>
                                            <a className="dropdown-item" href="#">Blog Detail</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="about.html">About Us</a>
                                            <a className="dropdown-item" href="faq.html">FAQs</a>
                                            <a className="dropdown-item" href="galary.html">Galary</a>
                                            <a className="dropdown-item" href="price-list.html">Price list</a>
                                        </div>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                                    <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="javascript:void(0);">Sign in</a></li>
                                    <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="javascript:void(0);">Sign up</a></li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0 d-none d-lg-inline-block">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <section id="hero">
                <div className="inner-banner" style={{ backgroundImage: 'url(assets/images/banner-department.jpg)' }}>
                    <div className="container">
                        <h3 className="title">Oreo Hospital<br /><big><strong>Departments</strong></big></h3>
                    </div>
                </div>
            </section>

            {/* Departments List */}
            <div className="department-list">
                <div className="container">
                    <div className="row">
                        {ShowDepartment.map((value) => {
                            return (
                                <>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={6000}>
                                            <div className="box-img"><img className='blogimgfront' src={"http://localhost/work/hospital_be/" + value.Image} alt /></div>
                                            <div className="box-cnt">
                                                <h4>{value.DepartmentName}</h4>
                                                <p>{value.DetailOfDepartment}</p>
                                                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* Departments List */}
            <ChooseUs />

            <HomeBlog />
            <Footer />
        </div>
    )
}

export default Department

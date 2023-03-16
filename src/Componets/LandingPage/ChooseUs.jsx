import React from 'react'

const ChooseUs = () => {
    return (
        <>
            {/* Home Why choose us */}
            <div className="wrapper">
                <div className="why-choose-us">
                    <div className="container">
                        <div className="row">
                            <div className="section-title col-12" data-aos="fade-up">
                                <h2><span>Why </span>Choose Us</h2>
                                <p>Description text here...</p>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-lg-6 col-md-12">
                                <div className="common-cnt">
                                    <div className="section-top" data-aos="fade-down">
                                        <p>Our goal is to make sure<br />
                                            with advances in <br />
                                            technology</p>
                                    </div>
                                    <p data-aos="fade-down" data-aos-duration={3000}>Professional dental clinic 32roDent offers the whole range of dentistry services:
                                        treatment of caries, gum diseases, tooth whitening, implantation, dentures (crowns
                                        installation), surgery, correction (braces) etc.</p>
                                    <p>
                                        <a className="btn btn-primary btn-round" data-aos="flip-up">More about practice</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="box-img" data-aos="fade-up" data-aos-duration={3000}>
                                    <img src="assets/images/why-choose-img.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Home Why choose us */}
            </div>
        </>
    )
}

export default ChooseUs

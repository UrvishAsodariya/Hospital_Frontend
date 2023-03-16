import axios from 'axios'
import React, { useEffect, useState } from 'react'

const HomeBlog = () => {
    const [ShowBlog, SetShowBlog] = useState([])
    useEffect(() => {
        axios.post('http://localhost/work/hospital_be/Addblog.php')
            .then((response) => {
                // console.log(response.data);
                SetShowBlog(response.data);
            }).catch((error) => {
                console.log(error);
            })
    })
    return (
        <>
            {/* Home Blog */}
            <div className="home-blog">
                <div className="container">
                    <div className="row">
                        <div className="section-title col-12" data-aos="fade-up">
                            <h2><span>Latest </span>From Blog</h2>
                            <p>Description text here...</p>
                        </div>
                    </div>
                    <div className="row" data-aos="flip-up">
                        {ShowBlog.map((value) => {
                            return (
                                <>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="blog-box">
                                            <div className="blog-img">
                                                <img className='blogimg1' src={"http://localhost/work/hospital_be/" + value.Image} alt />
                                            </div>
                                            <div className="blog-cnt">
                                                <h5><a href="javascript:void(0);">{value.Title}</a></h5>
                                                <p>{value.Discription}</p>
                                            </div>
                                            <div className="blog-info">
                                                <span className="blog-date"><i className="zmdi zmdi-calendar" /> {value.Date}</span>
                                                <span className="blog-comment"><i className="zmdi zmdi-comments" /> Comment ( 25 )</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src="assets/images/blog-2.png" alt />
                                </div>
                                <div className="blog-cnt">
                                    <h5><a href="javascript:void(0);">How to handle your kids’ from Lorem ipsum dolor sit amet</a></h5>
                                    <p>The great explorer of the truth, master builder of human happiness one rejects,
                                        dislikes[...]</p>
                                </div>
                                <div className="blog-info">
                                    <span className="blog-date"><i className="zmdi zmdi-calendar" /> 02 Feb 2018</span>
                                    <span className="blog-comment"><i className="zmdi zmdi-comments" /> Comment ( 25 )</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src="assets/images/blog-3.png" alt />
                                </div>
                                <div className="blog-cnt">
                                    <h5><a href="javascript:void(0);">How to handle your kids’ from Lorem ipsum dolor sit amet</a></h5>
                                    <p>The great explorer of the truth, master builder of human happiness one rejects,
                                        dislikes[...]</p>
                                </div>
                                <div className="blog-info">
                                    <span className="blog-date"><i className="zmdi zmdi-calendar" /> 02 Feb 2018</span>
                                    <span className="blog-comment"><i className="zmdi zmdi-comments" /> Comment ( 25 )</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Home Blog */}

        </>
    )
}

export default HomeBlog

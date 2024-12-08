import React from 'react'
import './about.css'

const AboutMe = () => {
  return (
    <>
        <div className="aboutme" id='about'>
            <div className="abouthead">
                <h2>About Me</h2>
                <h4>My Introduction</h4>
            </div>

            <div className="about-con">

                <div className="about-center">
                    <div className="Img-Container">
                        {/* <img src='https://res-console.cloudinary.com/dfdfu80by/thumbnails/v1/image/upload/v1733602286/bXlwaWNfcWhjMGZp/preview' alt="" /> */}
                            <img src="https://cdn.pixabay.com/photo/2024/12/08/11/53/11-53-20-637_1280.jpg" alt="" />
                        {/* <img src= '../../../src/Images/pic.jpg' alt="" /> */}
                    </div>

                    <div className="content-con">
                        <div className="cards">
                        <div className="card">
                        <i class="uil uil-award"></i>
                        <h3>Education</h3>
                        <p>Master's</p>
                        </div>


                        <div className="card">
                        <i class="uil uil-briefcase"></i>
                        <h3>Projects</h3>
                        <p>5 Live Projects</p>
                        </div>

                        <div className="card">
                        <i class="uil uil-envelope-bookmark"></i>
                        <h3>24/7</h3>
                        <p>online 24/7</p>
                        </div>
                        </div>

                        <div className="content-para">
                            <p>Full Stack Developer, I create web pages with UI/UX interface,
                                and optimise buiseness logic for the seamless Experience from the ends.
                                I specialize in designing, developing, and maintaining robust, scalable applications using Java. I leverage frameworks, databases, and best practices to deliver efficient, secure, and high-performance solutions.

                            </p>
                        </div>

                        <div className="download-cv">
                            <a href= '../../../public/cv.pdf' download ='Rahimans Cv'><button>Download Cv<i class="uil uil-file"></i></button></a>
                        </div>


                        
                    </div>
                </div>

            </div>
            
        </div> 
    </>
  )
}

export default AboutMe

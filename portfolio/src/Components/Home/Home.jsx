import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
     <div className="home" id='home'>
        
        <div className="social">
                <a href="https://github.com/AbdulRahiman01" target='blank'><i class="uil uil-github-alt"></i></a>
                <a href="https://www.linkedin.com/in/abdul-rahiman01/" target='blank'><i class="uil uil-linkedin-alt"></i></a>
                <a href="https://x.com/Rehamanprince1" target='blank'><i class="uil uil-twitter-alt"></i></a>
        </div>

        <div className="content">
                <div className="heading">
                    <h3>Abdul Rahiman</h3>
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M 25.1289 53.5117 C 33.3789 53.5117 39.1680 49.0352 42.2851 40.2461 L 46.4102 28.6445 C 47.4414 25.7149 46.5039 23.3008 44.0664 22.4102 C 41.8867 21.6133 39.7305 22.5508 38.6992 24.9649 L 37.1758 28.7149 C 37.1289 28.8086 37.0586 28.8789 36.9649 28.8789 C 36.8476 28.8789 36.8008 28.7852 36.8008 28.6680 L 36.8008 9.8711 C 36.8008 7.1289 35.0898 5.4180 32.4649 5.4180 C 31.5039 5.4180 30.6367 5.7461 29.9805 6.3555 C 29.6758 3.9649 28.1289 2.4883 25.8086 2.4883 C 23.5351 2.4883 21.9414 4.0117 21.5898 6.3086 C 21.0039 5.7227 20.1602 5.4180 19.3164 5.4180 C 16.8789 5.4180 15.2617 7.1055 15.2617 9.7071 L 15.2617 12.3086 C 14.6289 11.6524 13.6914 11.3008 12.6836 11.3008 C 10.2461 11.3008 8.5586 13.1055 8.5586 15.7305 L 8.5586 35.8633 C 8.5586 46.8320 15.2149 53.5117 25.1289 53.5117 Z M 25.0117 50.2539 C 16.7149 50.2539 11.6524 44.9336 11.6524 35.4883 L 11.6524 16.0586 C 11.6524 15.0742 12.2851 14.3711 13.2695 14.3711 C 14.2305 14.3711 14.9336 15.0742 14.9336 16.0586 L 14.9336 28.0352 C 14.9336 28.9024 15.6367 29.4883 16.3867 29.4883 C 17.1836 29.4883 17.9102 28.9024 17.9102 28.0352 L 17.9102 10.1289 C 17.9102 9.1211 18.5430 8.4414 19.5039 8.4414 C 20.4883 8.4414 21.1680 9.1211 21.1680 10.1289 L 21.1680 26.8398 C 21.1680 27.7071 21.8711 28.2930 22.6445 28.2930 C 23.4414 28.2930 24.1680 27.7071 24.1680 26.8398 L 24.1680 7.2227 C 24.1680 6.2383 24.8242 5.5117 25.8086 5.5117 C 26.7461 5.5117 27.4258 6.2383 27.4258 7.2227 L 27.4258 26.8398 C 27.4258 27.6602 28.0820 28.2930 28.9024 28.2930 C 29.6992 28.2930 30.4024 27.6602 30.4024 26.8398 L 30.4024 10.1289 C 30.4024 9.1211 31.0820 8.4414 32.0430 8.4414 C 33.0273 8.4414 33.6836 9.1211 33.6836 10.1289 L 33.6836 33.1914 C 33.6836 34.2695 34.3633 35.0430 35.3476 35.0430 C 36.1914 35.0430 36.8945 34.6680 37.4336 33.4961 L 40.6211 26.3711 C 41.0430 25.3633 41.8867 24.8476 42.7539 25.1758 C 43.6914 25.5508 44.0195 26.4414 43.5742 27.6602 L 39.4258 39.2383 C 36.5664 47.2305 31.5508 50.2539 25.0117 50.2539 Z"/></svg>
                </div>

                <div className="sub-heading">
                    <div className="line">

                    </div>
                    <h4>Java Full Stack Developer</h4>
                </div>

                <div className="desc">
                    <p>I am a Java Fullstack Developer specializing in building scalable web applications using Java, Spring Boot, and modern front-end technologies like React. With expertise in RESTful APIs, databases (SQL/MySql), and cloud platforms, I create seamless, user-centric solutions.</p>
                </div>

                <a href="#contact"><button>Contact <i class="uil uil-message"></i></button></a>

                <div className="scroll">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="mouse-alt"><path fill="#000" d="M12,6a1,1,0,0,0-1,1V9a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Zm0-4A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2Zm5,13A5,5,0,0,1,7,15V9A5,5,0,0,1,17,9Z"></path></svg>

                    <h3>Scroll for more<i class="uil uil-arrow-down"></i></h3>
                </div>
        </div>

        <div className="img-con">
                <img src="https://cdn.pixabay.com/photo/2024/12/08/12/07/12-07-33-853_1280.jpg" alt="" />
                {/* <img src= 'https://res-console.cloudinary.com/dfdfu80by/thumbnails/v1/image/upload/v1733602274/cHJvZmlsZV91eWZ5cGQ=/preview' alt="" /> */}
                {/* <img src=  '../../../src/Images/pro.jpg' alt="" /> */}
        </div>

        
    </div> 
    </>
  )
}

export default Home

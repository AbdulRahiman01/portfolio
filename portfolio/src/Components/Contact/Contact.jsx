import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
        <div className="contact" id='contact'>
            <div className="contact-head">
            <h2>Contact</h2>
            <h4>Active on platforms</h4>
            </div> 

            <div className="contact-con">
                <div className="contact-center">
                    <div className="card-info">
                    <i class="uil uil-envelope-edit"></i>
                        <h3>Email</h3>
                        <h5>abdulrahiman2901@gmail.com</h5>
                        <a href='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=abdulrahiman2901@gmail.com' target='blank'><i class="uil uil-arrow-right"></i></a>
                    </div>

                    <div className="card-info">
                        <i class="uil uil-whatsapp"></i>
                        <h3>Whatsapp</h3>
                        <h5>998996618</h5>
                        <a href='https://wa.me/qr/LKBKXNRUP5LCL1' target='blank'> <i class="uil uil-arrow-right"></i></a>
                    </div>

                    <div className="card-info">
                    <i class="uil uil-instagram"></i>
                        <h3>Instagram</h3>
                        <h5>abdul_rahiman__01</h5>
                        <a href='https://www.instagram.com/abdul_rahiman__01/ ' target='blank'><i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>


                <div className="form-container">
                    <form>
                    
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Your Name' name='from_name'/>
                        <label htmlFor="">Emial</label>
                        <input type="text" placeholder='Enter Your Email' name='from_email'/>
                        <label htmlFor="">Project</label>
                        <input type="text" placeholder='write your ideas' className='input' name='message'/>

                        <button type='submit'>Send <i class="uil uil-message"></i></button>
                    </form>
                </div>
            </div>  

            <div className="footer">
            <a href="https://www.instagram.com/abdul_rahiman__01/" target='blank'> <i class="uil uil-facebook-messenger"></i></a>
            <a href="https://x.com/Rehamanprince1"   target='blank'><i class="uil uil-twitter"></i></a>
           <a href="https://www.instagram.com/abdul_rahiman__01/" target='blank' > <i class="uil uil-instagram-alt"></i></a>
            <br />
            <a href="#home"> <h3>Rahiman</h3></a>
            </div> 
            
        </div> 
    </>
  )
}

export default Contact

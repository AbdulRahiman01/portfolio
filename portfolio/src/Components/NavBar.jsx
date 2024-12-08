import React, { useState } from 'react'

const NavBar = () => {
    let [bool,setBool] = useState(true)

    let handleBtn = ()=>{
        setBool(!bool)
    }
  return (
    <>
      <div className= {bool?'navbar navbar-true':'navbar navbar-false'}>
            <div className={bool?'nav-logo nav-logo-true':'nav-logo nav-logo-false'}>
                <h2>Rahiman</h2>
            </div>

            <div className={bool?'nav-links nav-links-true':'nav-links nav-links-false'}>
                <ul className={bool?'':'ul'}>
                    <a href="#home">  <li><i class="uil uil-estate"></i><a href="#home">Home</a></li></a>
                    <a href="#about"><li><i class="uil uil-info-circle"></i><a href="#about">About</a></li></a>
                    <a href="#skills"><li><i class="uil uil-briefcase-alt"></i><a href="#skills">Skills</a></li></a>
                    <a href="#qualification"><li><i class="uil uil-desktop"></i><a href="#qualification">Qualification</a></li></a>
                    <a href="#contact"><li><i class="uil uil-envelope-edit"></i><a href="#contact">Contact</a></li></a>
                </ul>
            </div>

            <div className={bool?'app app-true':'app app-false'} onClick={handleBtn}>
            {bool?<i class="uil uil-apps"></i>:<i class="uil uil-times"></i>}
            </div>
      </div>
    </>
  )
}

export default NavBar

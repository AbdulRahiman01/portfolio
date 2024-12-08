import React from 'react'
import './skills.css'
const Skills = () => {
  return (
    <>
        <div className="skills" id='skills'>
            <div className="skills-head" id='skills'>
                <h2>Skills</h2>
                <h4>My Tech Stack</h4>
            </div>

            <div className="skills-con">
                    <div className="front-end">
                        <div className="front-title">
                            <h3>Front End</h3>
                        </div>

                        <div className="skills-list">
                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i>  <h4>HTML</h4>
                                </div>
                                <p>Intermediate</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i>  <h4>CSS</h4>
                                </div>
                                <p>Advanced</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i> <h4>JavaScript</h4>
                                </div>
                                <p>Intermediate</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i> <h4>React Js</h4>
                                </div>
                                <p>Advanced</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i>  <h4>Tailwind</h4>
                                </div>
                                <p>Intermediate</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i> <h4>Git</h4>
                                </div>
                                <p>Intermediate</p>
                            </div>
                        </div>
                    </div>


                    <div className="front-end">
                        <div className="front-title">
                            <h3>Back End</h3>
                        </div>

                        <div className="skills-list">
                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i> <h4>Java</h4>
                                </div>
                                <p>Advanced</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i> <h4>Sql</h4>
                                </div>
                                <p>Intermediate</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i> <h4>Linux</h4>
                                </div>
                                <p>Basic</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i>  <h4>Spring Boot</h4>
                                </div>
                                <p>Intermediate</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i>  <h4>MySql</h4>
                                </div>
                                <p>Intermediate</p>
                            </div>

                            <div className="skill">
                                <div className="skill-line">
                                <i class="uil uil-award-alt"></i>  <h4>Hibernate</h4>
                                </div>
                                <p>Intermediate</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div> 
    </>
  )
}

export default Skills

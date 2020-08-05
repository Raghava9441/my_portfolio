import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Skills from './Skills';

export default class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
                                alt="avatar"
                                className="avatar-img"
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Raghava Reddy</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>5/4-B,palur,jmd,kadapa,AP</p>
                        <h5>Phone</h5>
                        <p>+91 9133472107</p>
                        <h5>Email</h5>
                        <p>Raghava@gmail.com</p>
                        <h5>Web</h5>
                        <p>webdevtricks.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' ,margin:"auto" }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8} style={{ backgroundColor:"black",color:"white"}}>
                        <h2>Education</h2>
                        <Education startYear={5013}
                                   endYear={2015}
                                   uname='IntermediateBoard of Education AP'
                            Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                        magnam eius, quis iusto repellendus rerum animi voluptatem
                                        reprehenderit tempora distinctio"/>

                        <Education startYear={2015}
                            endYear={2018}
                            uname='YV Usniversity'
                            Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                        magnam eius, quis iusto repellendus rerum animi voluptatem
                                        reprehenderit tempora distinctio"/>
                        <Education startYear={2018}
                            endYear={2021}
                            uname='SV Usniversity'
                            Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                        magnam eius, quis iusto repellendus rerum animi voluptatem
                                        reprehenderit tempora distinctio"/>
                        <hr style={{ borderTop: '3px solid #e22947', width: '95%', margin: "auto" }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={75}
                        />
                        <hr style={{ borderTop: '3px solid #e22947',width: '95%', margin: "auto" }} />
                        <h2>Projects</h2>
                        <Education startYear={2019}
                            endYear={2020}
                            uname='Webdevtricks'
                            Description="www.Webdevtricks.com ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                        magnam eius, quis iusto repellendus rerum animi voluptatem
                                        reprehenderit tempora distinctio"/>
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}
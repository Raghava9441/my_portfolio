import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Details from './Details';
export default class Aboutme extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={3}>
                        <Details details="Name:"/>
                        <Details details="Age:" />
                        <Details details="nativeplace:" />
                        <Details details="Hobies:"/>
                        <Details details="Aboutmyself:"/>
                    </Cell>
                    <Cell col={9} style={{backgroundColor:"gray"}}>
                        <Details Description="Raghavendra Reddy Bollapu"/>
                        <Details Description="22" />
                        <Details Description="JMD" />
                        <Details Description="Coding, playing Games,Watching Movies" />
                        <Details Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                        magnam eius, quis iusto repellendus rerum animi voluptatem
                                        reprehenderit tempora distinctio
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                        magnam eius, quis iusto repellendus rerum animi voluptatem
                                        reprehenderit tempora distinctio" />
                        <Details Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                        magnam eius, quis iusto repellendus rerum animi voluptatem
                                        reprehenderit tempora distinctio
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                        magnam eius, quis iusto repellendus rerum animi voluptatem
                                        reprehenderit tempora distinctio" />


                    </Cell>
                </Grid>

            </div>
        )
    }
}
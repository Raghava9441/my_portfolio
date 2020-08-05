import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
export default class Details extends Component {
    render() {
        return (
            <Grid>
                <Cell col={3}>
                    <h3>{this.props.details}</h3>
                </Cell>
                <Cell col={9}>
                    <h4 >{this.props.Description}</h4>
                    
                </Cell>
            </Grid>
        )
    }
}

import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
                    <h2 style={{ fontFamily: 'Balsamiq Sans'}}>B.Raghva Reddy</h2>
            <img
              src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt=""
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              magnam eius, quis iusto repellendus rerum animi voluptatem
              reprehenderit tempora distinctio obcaecati maxime cum veniam nihil
              voluptas, corporis ex fugiat minus.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "35px" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +91 9133472107
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "33px"}}
                  >
                    <i class="fa fa-window-maximize"></i>
                    www.webdevtricks.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "35px",}}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    Raghava@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

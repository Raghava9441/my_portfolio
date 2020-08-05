import React from "react";
import './App.css'
import Main from './components/Main';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
export default class App extends React.Component {
  render() {
    return (
      <div className="demo-big-content">
        
        <Layout>
          <Header className="header-color" title={<span><strong> <Link to="/Landingpage" className="title"><h3 className="trick">WebDev<span className="trick" style={{color:"yellow"}}>Trick</span></h3></Link></strong></span>}>
            <Navigation>
              <Link to="/Resume">Resume</Link>
              <Link to="/Aboutme">About</Link>
              <Link to="/Projects">Project</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation >
              <Link to="/Resume">Resume</Link>
              <Link to="/Aboutme">About</Link>
              <Link to="/Projects">Project</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main /> 
          </Content>         
        </Layout>
        
      </div>
    );
  }
}



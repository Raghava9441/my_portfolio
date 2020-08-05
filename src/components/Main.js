import React from 'react';
import { Switch,Route} from 'react-router-dom'
import Landingpage from './Landingpage';
import Projects from './Projects';
import Contact from './Contact';
import Aboutme from './Aboutme';
import Resume from './Resume'


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Projects" component={Projects} />
        <Route path="/Aboutme" component={Aboutme} />
        <Route path="/Resume" component={Resume} />
        <Route exact path="/Landingpage" component={Landingpage} />
        
    </Switch>
)
export default Main;

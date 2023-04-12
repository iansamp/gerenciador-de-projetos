import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';


export default function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Container customClass="min-height">
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/projects'>
            <Projects/>
          </Route>
          <Route path='/company'>
            <Company/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/newproject'>
            <NewProject/>
          </Route>
          <Route path='/project/:id'>
            <Project/>
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  )
}
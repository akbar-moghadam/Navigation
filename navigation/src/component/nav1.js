import React from 'react'
import Home from './home'
import About from './about'
import Service from './services'
import Contact from './contact'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'

function Navigation(){

    return(
        <header>
            <div>

            </div>
            <input type="checkbox" id="chk" name="check"/>
            <nav>
            <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
        </ul>

        <hr />

   
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          
        </Switch>
      </div>
    </Router>
            </nav>
        </header>
    )
}

export default Navigation
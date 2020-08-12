import React from 'react';
import Nav from './component/nav1'
import './App.css';
import Home from './component/home'
import About from './component/about'
import Service from './component/services'
import Contact from './component/contact'
import { BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom'

function App() {
  return (
    
    <div >
      <Router>
     <div className="prim"><Nav/></div>
    <div className="middel">

   
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
    </div>
  );
}

export default App;

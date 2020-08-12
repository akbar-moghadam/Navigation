import React from 'react'

import Imgg from './image/negar.png'
import Menu from './image/menu.svg'
import {Link} from 'react-router-dom'
import '../index.css'

function Navigation(){

    return(
        <header>
            <div className="brand">
              <img className="brand_img" src={Imgg} alt=""/>
            </div>
            <input type="checkbox" id="chk" name="check"/>
            <label for="chk">
          <img className="menu_img" style={{width:30}} src={Menu} alt=""/>
        </label>
            <nav>
            
      <div>

        <ul>
          <li>
            <Link style={{textDecoration:'none'}} to="/"><p>Home</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to="/about"><p>About</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to="/contact"><p>Contact</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to="/service"><p>Service</p></Link>
          </li>
        </ul>
        </div>
       
        
            </nav>
        </header>
    )
}



export default Navigation
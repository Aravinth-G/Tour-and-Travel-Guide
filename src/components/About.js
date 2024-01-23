import React from 'react';
import './Empty.css';
import './About.css';

import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import AdvancedSlider from './AdvancedSlider';
import Empty from './Destination';
function About(){

    return(
        <>
        
        <div> 
     <Navbar/>
     <div>


<Link to="/destination" className="link-style">

    <br></br>
    <h4 className="began">View more...</h4>
</Link>
</div>

        </div>

   

    <AdvancedSlider/>

  

        </>

    )
    }
export default About
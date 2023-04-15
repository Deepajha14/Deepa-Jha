import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon.png";

export default function HomeBanner() {
  return (
    <div className="home"> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Deepa Jha</div>
              <div className="staticTitle">
                Designer
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>
            </div>
        </div>
        
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}

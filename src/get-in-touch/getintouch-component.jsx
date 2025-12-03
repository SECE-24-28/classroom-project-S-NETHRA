import React from "react";
import {GetInTouchStyle} from './get-in-touch-style';
const GetInTouchComponent=()=>{
    return(
     <GetInTouchStyle>
        <div className="container">
        <div className="left">
          <h1>GET IN TOUCH</h1>
          <p className="subtext">
            Have questions or feedback? We're here to help. <br />
            Send us a message and we'll respond soon.
          </p>

          <button>Contact Us</button>
        </div>

        <div className="right">
          <img
            src="https://aptitudeguru.in/static/media/get-in-touch.8c521c235d4bd711343c.jpg"
            alt="contact"
          />
        </div>
      </div>

     </GetInTouchStyle>


    );
};

export default GetInTouchComponent;
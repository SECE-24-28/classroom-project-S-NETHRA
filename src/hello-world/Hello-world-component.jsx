/*import React from "react";
import { HelloWorldStyle } from "./hello-world-style";
const HelloWorldComponent = () =>{

    return (
    <HelloWorldStyle>

  
    
    <h1>Sri Eshwar</h1>
    <table>
        <tr>
            <th>College name </th>
            <th>Address</th>
        </tr>
        <tr>
            <td>
                SECE
            </td>
            <td>Kondampatty</td>
        </tr>
    </table>
      </HelloWorldStyle>
    );
};
export default HelloWorldComponent;
*/
import React from "react";
import { HelloWorldStyle } from "./hello-world-style";
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      {/* <h1 className="element">Sri eshwar</h1> */}
      <div className="parent">
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
      </div>
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;
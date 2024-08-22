import React, { useState } from "react";
import "../index.css";
import Circle from "./Circle";

const Canvas = () => {
  const [circles, setCircles] = useState([]);
  const [circle, setCircle] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [clientX, setClientX] = useState(0)
const [clientY, setClientY] = useState(0);
const [positions, setPositions] = useState([[]]);
    // const [positions, setPositions] = useState([]);
    const colors = [
        'red',
        'blue',
        'green',
        'gray',
        'pink',
        'yellow'
    ]

  const handleClick = (e) => {
    setClientX(e.clientX);
    setClientY(e.clientY);
    // setCircles(circle + 1);
    setClicked(true);
    // const colorIndex = Math.round(Math.random())
    
    // console.log(colorIndex);
    // setCircle(circle+1);
    circles?.push(circle);
    setCircles(circles);
    console.log(clientX)
    let xy = [clientX, clientY];
    positions.push(xy);
    setPositions(positions); 
    // console.log(positions);
    const container = document.getElementById('container');
    // container.append(<Circle x={clientX} y={clientY}  /> );
// container.append(<h1>Hello</h1>)
  };


  return (
    <div className="canvas-container" onClick={handleClick} id="container">
      {clicked && <Circle x={clientX} y={clientY} />}
{/*       
        {circles.map((position, index) => (
            <Circle x={clientX} y={clientY} key={index} />
        ))} */}
    </div>
  );
};

export default Canvas;

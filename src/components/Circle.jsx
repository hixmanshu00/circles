import React from 'react'

const Circle = ({x,y}) => {
    const mt = y-200;
    const ml = x - 200;
  return (
    <div className='circle' id='circle' style={{marginTop:`${mt}px`, marginLeft: `${ml}px`}}>
      
    </div>
  )
}

export default Circle

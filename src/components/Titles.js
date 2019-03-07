import React from 'react';
import {Animated} from 'react-animated-css';

const Titles = () =>{
  return(
    <Animated
        animationInDelay={100}
        animationIn='fadeIn'
        animationOut='fadeOut'
        isVisible>
        <div className='mn  '>
        <div className='g'></div>
          <div className='g--8 m-b300'>
            <div className='sh' style={{"marginBottom" : "7em"}}>
              <h1 className='sh-title'>Weather Finder</h1>
              <h2 className='sh-title'>Live Temperature</h2>
            </div>
        </div>
        </div>

      </Animated>
  )
}

export default Titles;

import React, {useState, useRef} from 'react';
import Button from './button';
import './UseImperativeHandleTutorial.scss';


const UseImperativeHandleTutorial = () => {

  const buttonRef = useRef(null);
    return (
    <div className='useImperativeHandleTutorial'>
    <h1>UseImperativeHandleTutorial</h1>
    <div className="firstexample">
     <button onClick={() => {buttonRef.current.alterToggle()}}>button from Parent</button>  
      <Button ref={buttonRef}/>
    </div>
 
    </div>
  )
}

export default UseImperativeHandleTutorial
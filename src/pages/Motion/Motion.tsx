import { motion } from 'framer-motion';
import { useState } from 'react';


const divStyle = {
  background: 'orange',
  padding: '3px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '7px',
};

const toggleStyle = {
  width: '5rem',
  borderRadius: '5px',
  border: 'none',
  background: 'white',
  padding: '0.8rem',
  color: 'orange',
}

const switchStyle = {
  width: '10rem',
  display: "flex",
  justifyContent: "flex-start",
  cursor: 'pointer',
  transition: 'all 0.5s ease'
}

const switchStyle2 = {
  width: '10rem',
  display: "flex",
  justifyContent: "flex-end",
  cursor: 'pointer',
  transition: 'all 0.5s ease'
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};


const Motion = () => {

  const [isActive, setIsActive] = useState(true);

  const toggleSwitch = () => {
    setIsActive(prev => !prev)
  };

  return(
    <div style={divStyle}>
      <div style={isActive ? switchStyle : switchStyle2} onClick={toggleSwitch}>
        <motion.div style={toggleStyle} transition={spring}/>
      </div>
    </div>
  )
};

export default Motion;
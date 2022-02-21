import { flexbox } from '@mui/system';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { FaBlackTie } from 'react-icons/fa';


const divStyle = {
  background: 'orange',
  padding: '3px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '5px',
};

const toggleStyle = {
  width: '5rem',
  borderRadius: '3px',
  border: 'none',
  background: 'white',
  padding: '3px',
  color: 'orange',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const switchStyle = {
  width: '10rem',
  display: "flex",
  justifyContent: "flex-start",
  cursor: 'pointer',
}

const switchStyle2 = {
  width: '10rem',
  display: "flex",
  justifyContent: "flex-end",
  cursor: 'pointer',
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
  ease: 'ease',
  duration: 2
};


const Motion = () => {

  const [isActive, setIsActive] = useState(true);
  const [isCook, setIsCook] = useState('Normal');

  const controls = useAnimation();

  const toggleSwitch = () => {
    setIsActive(prev => !prev)
    controls.start({
      transition: {
        duration: 5
      }
    });
    if(isCook === 'Normal'){
      setIsCook('Thick')
    }else{
      setIsCook('Normal')
    }
  };

  return(
    <div style={divStyle}>
      <div style={isActive ? switchStyle : switchStyle2}  onClick={() => toggleSwitch()} >
        <motion.div style={toggleStyle} animate={controls} transition={spring}>
          <p>{isCook}</p>
        </motion.div>
      </div>
    </div>
  )
};



export default Motion;
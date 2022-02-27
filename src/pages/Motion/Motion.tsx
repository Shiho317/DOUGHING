import { motion } from 'framer-motion';

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

type Props ={
  toggleSwitch: () => void;
  isActive: boolean;
  isCook: string;
}

const Motion: React.FC<Props> = ({toggleSwitch, isActive, isCook}) => {

  return(
    <div style={divStyle}>
      <motion.div style={isActive ? switchStyle : switchStyle2}  onClick={() => toggleSwitch()} whileTap={{scale: 1.2}}>
        <motion.button style={toggleStyle} whileTap={{transition: {duration: 2, ease: 'easeInOut'}}} transition={spring}>
          <p>{isCook}</p>
        </motion.button>
      </motion.div>
    </div>
  )
};



export default Motion;
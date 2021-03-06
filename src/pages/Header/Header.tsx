import * as React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { MdOutlineAccountCircle, MdOutlineClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import { IoMdLogOut } from 'react-icons/io';
import Badge from '@mui/material/Badge';
import './Header.css';
import { getAuth, signOut } from 'firebase/auth';

type Props = {
  logo: string;
  isCount: number;
};

const Header: React.FC<Props> = ({logo, isCount}) => {

  const auth = getAuth();

  const userLoggingOut = async() => {

    signOut(auth).then(() => {
      alert('Your account is logged out successfully.')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode){
        alert(errorMessage)
      }
    })
  }

  const [ isOpen, setIsOpen ] = React.useState(false);

  const onClick = () => {
    setIsOpen(prev => !prev)
  }; 

  return(
    <div>
      <div className='header'>
        <div className="header-left">
          <img src={logo} alt="logo" />
          <Link to='/'>
            <h3>DOUGHING</h3>
          </Link>
        </div>
            <div className={isOpen ? "header-right" : 'header-right hidden'}>
              <ul>
                <li>
                  <Link to='/login'>
                    <MdOutlineAccountCircle/>Log In
                  </Link>
                </li>
                <li>
                  <Link to='/signup'>
                    <FiUserPlus/>Sign Up
                  </Link>
                </li>
                <li>
                  <span onClick={() => userLoggingOut()}>
                    <IoMdLogOut/>Log Out
                  </span>
                </li>
                <li>
                  <Badge badgeContent={isCount} color="secondary">
                    <FaPizzaSlice/>
                  </Badge>
                </li>
              </ul>
            </div>
            <div className='menu-icon'>
                {!isOpen ? (
                  <GiHamburgerMenu onClick={onClick}/>
                ) : (
                  <MdOutlineClose onClick={onClick}/>
                )}
            </div>
      </div>
    </div>
  )
};

export default Header;
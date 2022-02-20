import * as React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiHistory } from 'react-icons/bi';
import { RiCoupon3Line } from 'react-icons/ri';
import headerLogo from '../../images/doughing-logo.svg';
import Badge from '@mui/material/Badge';
import './Header.css';

const Header = () => {
  return(
    <div>
      <div className='header'>
        <div className="header-left">
          <img src={headerLogo} alt="logo" />
          <h3>DOUGHING</h3>
        </div>
        <div className="header-right">
          <ul>
            <li><MdOutlineAccountCircle/>Sign In</li>
            <li><BiHistory/>History</li>
            <li><RiCoupon3Line/>Coupon</li>
            <li><Badge badgeContent={4} color="secondary"><FaPizzaSlice/></Badge></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Header;
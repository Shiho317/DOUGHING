import * as React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BiHistory } from 'react-icons/bi';
import { RiCoupon3Line } from 'react-icons/ri';
import Badge from '@mui/material/Badge';
import './Header.css';

type Props = {
  logo: string;
};

const Header: React.FC<Props> = ({logo}) => {
  return(
    <div>
      <div className='header'>
        <div className="header-left">
          <img src={logo} alt="logo" />
          <Link to='/'>
            <h3>DOUGHING</h3>
          </Link>
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
import { BsArrowRight } from 'react-icons/bs';
import pizza from '../../images/simple-dough.png';
import '../Built/Built.css';

const Built = () => {
  return(
    <div className='built-section'>
      <div className="built-wrapper">
        <ul className="ingredients">
          <li>Cook</li>
          <li>Dough</li>
          <li>Green pepper</li>
          <li>Salami</li>
          <li>Olive</li>
          <li>Shrimp</li>
          <li>Ham</li>
          <li>Cheese</li>
          <li>Basil</li>
          <li>Chili pepper</li>
        </ul>
        <div className="pizza-img">
          <img src={pizza} alt="pizza" />
        </div>
        <div className="order-button">
          <button>Order your pizza <BsArrowRight style={{color: 'orange'}}/></button>
        </div>
        
      </div>
    </div>
  )
};

export default Built;
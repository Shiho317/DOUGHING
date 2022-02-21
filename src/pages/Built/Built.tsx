import { BsArrowRight } from 'react-icons/bs';
import pizza from '../../images/simple-dough.png';
import '../Built/Built.css';
import CheckBox from '../CheckBox/CheckBox';
import Motion from '../Motion/Motion';
import { Ingredients } from '../../Ingredients';

export interface ItemTypeInfo{
  id: number;
  item: string;
  add: boolean;
}

const Built = () => {
  return(
    <div className='built-section'>
      <div className="built-wrapper">
        <ul className="ingredients">
          <li><p>{Ingredients.find(ele => ele.id === 1)?.item}</p><Motion/></li>
          {Ingredients.filter(ingredient => ingredient.id > 1).map(ingredient => (
            <li key={ingredient.id}>
              <p>{ingredient.item}</p>
              <CheckBox/>
            </li>
          ))}
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

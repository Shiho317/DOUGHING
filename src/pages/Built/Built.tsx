import { useState } from 'react';
import pizzaNormal from '../../images/pizza-base.png';
import pizzaThin from '../../images/pizza-base-thin.png';
import '../Built/Built.css';
import CheckBox from '../CheckBox/CheckBox';
import Motion from '../Motion/Motion';
import { Ingredients } from '../../Ingredients';
import Header from '../Header/Header';
import logoBlack from '../../images/doughing-logo-black.svg';
import Burned from './Ingredient/Burned';
import GreenPepper from './Ingredient/GreenPepper';

export interface ItemTypeInfo{
  id: number;
  item: string;
  image: any;
  add: boolean;
}

const Built = () => {

  const dough = Ingredients[0]

  const [isActive, setIsActive] = useState(true);
  const [isCook, setIsCook] = useState('Normal');

  const toggleSwitch = () => {
    setIsActive(prev => !prev)
    if(isCook === 'Normal'){
      setIsCook('Thin');
      dough.add = true;
    }else{
      setIsCook('Normal')
      dough.add = false;
    }
  };

  const [ isBurned, setIsBurned ] = useState(false);
  const [ addGreenPepper, setAddGreenPepper ] = useState(false);


  return(
    <div className='built-section'>
      <Header logo={logoBlack}/>
      <div className="built-wrapper">
        <ul className="ingredients">
          <li><p>{Ingredients.find(ele => ele.id === 1)?.item}</p><Motion toggleSwitch={toggleSwitch} isActive={isActive} isCook={isCook}/></li>
          {Ingredients.filter(ingredient => ingredient.id > 1).map(ingredient => (
            <li key={ingredient.id}>
              <p>{ingredient.item}</p>
              <CheckBox 
              ingredient={ingredient} 
              setIsBurned={setIsBurned}
              setAddGreenPepper={setAddGreenPepper}
              />
            </li>
          ))}
        </ul>
        <div className="pizza-img">
          <img src={dough.add ? pizzaThin : pizzaNormal} alt="pizza" />
        </div>

          {isBurned ? 
            <Burned/>
          : null }

          
          <div className={addGreenPepper ? 'green-peppers' : 'unshown'}>
            <GreenPepper/>
          </div>
          
          
        <div className="order-button">
          <button>Order your pizza</button>
        </div>
        
      </div>
    </div>
  )
};

export default Built;

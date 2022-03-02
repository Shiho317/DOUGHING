import { useState } from 'react';
import pizzaNormal from '../../images/pizza-base.png';
import pizzaThin from '../../images/pizza-base-thin.png';
import CheckBox from '../CheckBox/CheckBox';
import Motion from '../Motion/Motion';
import { Ingredients } from '../../Ingredients';
import Header from '../Header/Header';
import logoBlack from '../../images/doughing-logo-black.svg';
import Burned from './Ingredient/Burned';
import GreenPepper from './Ingredient/GreenPepper';
import Salami from './Ingredient/Salami';
import Olive from './Ingredient/Olive';
import Cheese from './Ingredient/Cheese';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import '../Built/Built.css';
import { ItemTypeInfo } from '../../App';


type Props = {
  handleAddToOrder: (clickedItem: ItemTypeInfo) => void;
  handleRemoveFromOrder: (id: number) => void;
  addToFireStore: () => void;
  isCount: number;
  isCountAdd: () => void;
}

const Built: React.FC<Props> = ({handleAddToOrder, handleRemoveFromOrder, addToFireStore, isCount, isCountAdd}) => {

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
  const [ addSalami, setAddSalami ] = useState(false);
  const [ addOlive, setAddOlive ] = useState(false);
  const [ addCheese, setAddCheese ] = useState(false);

  return(
    <div className='built-section'>
      <Header logo={logoBlack} isCount={isCount}/>
      <div className="built-wrapper">
        <ul className="ingredients">
          <li>
            <p>{Ingredients.find(ele => ele.id === 1)?.item}</p>
            <p className='item-price'>$ {Ingredients.find(ele => ele.id === 1)?.price}</p>
            <Motion toggleSwitch={toggleSwitch} isActive={isActive} isCook={isCook}/>
          </li>
          {Ingredients.filter(ingredient => ingredient.id > 1).map(ingredient => (
            <li key={ingredient.id}>
              <p>{ingredient.item}</p>
              <p className='item-price'>+ ${ingredient.price}</p>
              <CheckBox 
              ingredient={ingredient} 
              setIsBurned={setIsBurned}
              setAddGreenPepper={setAddGreenPepper}
              setAddSalami={setAddSalami}
              setAddOlive={setAddOlive}
              setAddCheese={setAddCheese}
              handleAddToOrder={handleAddToOrder}
              handleRemoveFromOrder={handleRemoveFromOrder}
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

          <div className={addCheese ? 'cheese-dough' : 'hidden' }>
            <Cheese/>
          </div>

          <div className={addGreenPepper ? 'green-peppers' : 'unshown' }>
            <GreenPepper/>
          </div>
          
          <div className={addSalami ? 'salamis' : 'unshown' }>
            <Salami/>
          </div>

          <div className={addOlive ? 'olives' : 'unshown' }>
            <Olive/>
          </div>
          
        <Link to='/order'>
        <div className="order-button" onClick={addToFireStore}>
          <button onClick={isCountAdd}>Order your pizza</button>
        </div>
        </Link>
        
      </div>
      <Footer/>
    </div>
  )
};

export default Built;

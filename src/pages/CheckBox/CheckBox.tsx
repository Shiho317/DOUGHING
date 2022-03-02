import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { orange } from '@mui/material/colors';
import { ItemTypeInfo } from '../../App';

type Props = {
  ingredient: ItemTypeInfo;
  setIsBurned: any;
  setAddGreenPepper: any;
  setAddSalami: any;
  setAddOlive: any;
  setAddCheese: any;
  handleAddToOrder: (clickedItem: ItemTypeInfo) => void;
  handleRemoveFromOrder: (id: number) => void;
}


const CheckBox: React.FC<Props> = ({
  ingredient, 
  setIsBurned, 
  setAddGreenPepper, 
  setAddSalami, 
  setAddOlive, 
  setAddCheese,
  handleAddToOrder,
  handleRemoveFromOrder,
}) => {

  const [checked, setChecked] = useState(ingredient.add);
  
  const handleChange = (e: any) => {
    setChecked(e.target.checked);
    ingredient.add = e.target.checked;
    
    if(ingredient.item === 'Cooked well'){
      setIsBurned(ingredient.add)
    };
    if(ingredient.item === 'Green pepper'){
      setAddGreenPepper(ingredient.add);
    };
    if(ingredient.item === 'Salami'){
      setAddSalami(ingredient.add);
    };
    if(ingredient.item === 'Olive'){
      setAddOlive(ingredient.add);
    };
    if(ingredient.item === 'Cheese'){
      setAddCheese(ingredient.add)
    }

    if(ingredient.add){
      handleAddToOrder(ingredient)
    }else if(!ingredient.add){
      handleRemoveFromOrder(ingredient.id)
    }
  };

  return(
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{
        color: orange[200],
        '&.Mui-checked': {
          color: orange[500],
        },
      }}
    />
  )
};

export default CheckBox
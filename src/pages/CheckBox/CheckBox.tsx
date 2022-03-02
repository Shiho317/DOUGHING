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
  setAddMashroom: any;
  setAddPineapple: any;
  setAddBasil: any;
  setAddChili: any;
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
  setAddMashroom,
  setAddPineapple,
  setAddBasil,
  setAddChili,
  setAddCheese,
  handleAddToOrder,
  handleRemoveFromOrder,
}) => {

  const [checked, setChecked] = useState(ingredient.add);
  
  const handleChange = (e: any) => {
    setChecked(e.target.checked);
    ingredient.add = e.target.checked;

    switch(ingredient.item){
      case 'Cooked well':
        setIsBurned(ingredient.add)
        break;
      case 'Green pepper':
        setAddGreenPepper(ingredient.add)
        break;
      case 'Salami':
        setAddSalami(ingredient.add)
        break;
      case 'Olive':
        setAddOlive(ingredient.add)
        break;
      case 'Mashroom':
        setAddMashroom(ingredient.add)
        break;
      case 'Pineapple':
        setAddPineapple(ingredient.add)
        break;
      case 'Basil':
        setAddBasil(ingredient.add)
        break;
      case 'Chili pepper':
        setAddChili(ingredient.add)
        break;
      case 'Cheese':
        setAddCheese(ingredient.add)
        break;
      default:
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
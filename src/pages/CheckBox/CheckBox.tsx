import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { orange } from '@mui/material/colors';
import { ItemTypeInfo } from '../Built/Built';

type Props = {
  ingredient: ItemTypeInfo;
  setIsBurned: any;
  setAddGreenPepper: any;
}


const CheckBox: React.FC<Props> = ({ingredient, setIsBurned, setAddGreenPepper}) => {

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
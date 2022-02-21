import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { orange } from '@mui/material/colors';
import { ItemTypeInfo } from '../Built/Built';

type Props = {
  ingredient: ItemTypeInfo;
}


const CheckBox: React.FC<Props> = ({ingredient}) => {
  const [isChecked, setIsChecked] = useState(ingredient.add);

  const handleChange = (e: any) => {
    setIsChecked(e.target.checked)
  };

  return(
    <Checkbox
      checked={isChecked}
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
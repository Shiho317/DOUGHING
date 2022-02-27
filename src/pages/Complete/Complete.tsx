import Realistic from "./Confetti/Realistic";
import gif from '../../images/pizza-making.gif';

const Order = () => {
  return(
    <div>
      <img src={gif} alt="gif" />
      <Realistic/>
    </div>
  )
};

export default Order;

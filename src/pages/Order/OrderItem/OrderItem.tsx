import { ItemTypeInfo } from '../../../App';
import './OrderItem.css';

type Props = {
  cartItems: ItemTypeInfo[]
}

const OrderItem: React.FC<Props> = ({cartItems}) => {

  const priceArr = cartItems.map(item => {
    return item.price
  });

  let Arrtotal = priceArr.reduce((sum, num) => {
    return sum + num
  }, 0)

  let total: number = Arrtotal + 8;

  let gst: number = total * 0.06;
  let pst: number = total * 0.07;

  let totalSums = (total + gst + pst).toFixed(2);

  return(
    <div className='order-item'>
      <div className="item-dough">
        <h3>*Pizza dough</h3>
        <p>8.00</p>
      </div>
      {cartItems.map(item => (
        <ul>
          <li>
            <h3 key={`item-${item.id}`}>{item.item}</h3>
            <p key={`price-${item.id}`}>{(item.price).toFixed(2)}</p>
          </li>
        </ul>
      ))}
      <p className='gst'>GST(6%): {(gst).toFixed(2)}</p>
      <p className='pst'>PST(7%): {(pst).toFixed(2)}</p>
      <h2>Total: C${totalSums}</h2>
    </div>
  )
};

export default OrderItem
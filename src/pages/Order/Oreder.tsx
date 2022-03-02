import Header from '../Header/Header';
import logoWhite from '../../images/doughing-logo-white.svg';
import { PayPalButton } from "react-paypal-button-v2";
import './Order.css';
import Footer from '../Footer/Footer';
import { ItemTypeInfo } from '../../App';
import OrderItem from './OrderItem/OrderItem';
import { Link } from 'react-router-dom';

type Props = {
  cartItems: ItemTypeInfo[];
  isCount: number;
  isCountReset: () => void;
}

const Order: React.FC<Props> = ({cartItems, isCount, isCountReset}) => {

  return(
    <div className="order-section">
      <Header logo={logoWhite} isCount={isCount}/>
      <div className="order-details-wrapper">
        <div className='details-wrap'>

        <h1>Your pizza details</h1>

        <OrderItem cartItems={cartItems}/>
        
        <div className='paidBy' onClick={isCountReset}>
          <PayPalButton
            amount="0.01"
            onSuccess={(details: any, data: any) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
            }}
          />
          <Link to='/complete' onClick={isCountReset}>
            <button className='paid-cash'>Cash</button>
          </Link>
        </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Order;
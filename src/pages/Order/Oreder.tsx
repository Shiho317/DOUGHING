import Header from '../Header/Header';
import logoWhite from '../../images/doughing-logo-white.svg';
import { PayPalButton } from "react-paypal-button-v2";
import './Order.css';
import Footer from '../Footer/Footer';
import { ItemTypeInfo } from '../../App';
import OrderItem from './OrderItem/OrderItem';

type Props = {
  cartItems: ItemTypeInfo[];
}

const Order: React.FC<Props> = ({cartItems}) => {

  return(
    <div className="order-section">
      <Header logo={logoWhite}/>
      <div className="order-details-wrapper">
        <div className='details-wrap'>

        <h1>Your pizza details</h1>

        <OrderItem cartItems={cartItems}/>
        
        <div className='paidBy'>
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
          <button className='paid-cash'>Cash</button>
        </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Order;
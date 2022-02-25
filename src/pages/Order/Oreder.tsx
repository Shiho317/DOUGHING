import Header from '../Header/Header';
import logoWhite from '../../images/doughing-logo-white.svg';
import { PayPalButton } from "react-paypal-button-v2";
import './Order.css';
import Footer from '../Footer/Footer';



const Order = () => {

  return(
    <div className="order-section">
      <Header logo={logoWhite}/>
      <div className="order-details-wrapper">
        <h1>Your pizza details</h1>
        <h2>Total</h2>
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
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Order;
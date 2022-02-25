import Header from '../Header/Header';
import logoWhite from '../../images/doughing-logo-white.svg';
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
          <p>paid by<br/></p>
          <ul>
            <li>Credit Card</li>
            <li>Paypal</li>
            <li>Apple Pay</li>
            <li>Cash</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Order;
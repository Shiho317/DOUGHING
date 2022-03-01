import { Link } from 'react-router-dom';
import logoBlack from '../../images/doughing-logo-black.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css';
import loginImg from '../../images/login.webp';

const Login = () => {
  return(
    <div className="Account-wrapper">
      <Header logo={logoBlack}/>
      <div className="acc-login-wrap">

        <div className="acc-login-left">
          <img src={loginImg} alt="login-img" />
        </div>

        <div className="acc-login-right">
        <h1>Log In</h1>

        <form action="" className='input-forms'>
          <label htmlFor="">Email
            <input type="email" name="email" id="e-mail" placeholder='Email'/>
          </label>
          <label htmlFor="">Password
            <input type="password" name="password" id="password" placeholder='password'/>
          </label>
        </form>

        <button className='login-btn'>Log In</button>

        <div className='or'>
          <hr className='grey-border'/>
          <p>or</p>
          <hr className='grey-border'/>
        </div>

        <div className="to-signup">
          <p>Don't have any account? &nbsp; 
            <Link to='/signup'>
              Create your account
            </Link>
          </p>
        </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
};

export default Login
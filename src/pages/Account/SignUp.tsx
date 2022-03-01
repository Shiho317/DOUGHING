import { Link } from 'react-router-dom';
import logoBlack from '../../images/doughing-logo-black.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './SignUp.css';
import signupImg from '../../images/signup.webp';


const SignUp = () => {
  return(
    <div className="Account-wrapper">
      <Header logo={logoBlack}/>
      <div className="acc-signup-wrap">

        <div className="acc-signup-left">
          <img src={signupImg} alt="signup-img" />
        </div>

        <div className="acc-signup-right">
        <h1>Sign Up</h1>

        <form action="" className='input-forms'>
          <label htmlFor="">Name
            <input type="email" name="name" id="name" placeholder='Name'/>
          </label>
          <label htmlFor="">Email
            <input type="email" name="email" id="e-mail" placeholder='Email'/>
          </label>
          <label htmlFor="">Password
            <input type="password" name="password" id="password" placeholder='password'/>
          </label>
          <label htmlFor="">Confirm Password
            <input type="password" name="confirm" id="confirm" placeholder='confirm password'/>
          </label>
        </form>

        <button className='signup-btn'>Register</button>

        <div className='or'>
          <hr className='grey-border'/>
          <p>or</p>
          <hr className='grey-border'/>
        </div>

        <div className="to-login">
          <p>Do you have an account? &nbsp; 
            <Link to='/login'>
              Log in
            </Link>
          </p>
        </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
};

export default SignUp
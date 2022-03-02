import { Link, useNavigate } from 'react-router-dom';
import logoBlack from '../../images/doughing-logo-black.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './SignUp.css';
import signupImg from '../../images/signup.webp';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

type Props ={
  isCount: number;
}

const SignUp: React.FC<Props> = ({isCount}) => {

  const auth = getAuth();
  const navigate = useNavigate();
  const [ register, setRegister ] = useState<boolean>(false);
  const [ userName, setUserName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ confirm, setConfirm ] = useState<string>('');
  const [ error, setError ] = useState<string>('');

  const signupWithEmailPassword = async() => {

    if(password !== confirm) setError('Please make sure your password match.');

    if(error !== '') setError('');

    setRegister(true);
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate('/login');
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode){
      alert(errorMessage)
      }
      setRegister(false)
    })
  }

  return(
    <div className="Account-wrapper">
      <Header logo={logoBlack} isCount={isCount}/>
      <div className="acc-signup-wrap">

        <div className="acc-signup-left">
          <img src={signupImg} alt="signup-img" />
        </div>

        <div className="acc-signup-right">
        <h1>Sign Up</h1>

        <form action="" className='input-forms'>

          <label htmlFor="">Name
            <input 
              type="email" 
              name="name" 
              id="name" 
              placeholder='Name'
              onChange={(e) => setUserName(e.target.value)}
              value={userName}/>
          </label>

          <label htmlFor="">Email
            <input 
              type="email" 
              name="email" 
              id="e-mail" 
              placeholder='Email' 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}/>
          </label>

          <label htmlFor="">Password
            <input 
              type="password" 
              autoComplete='new-password'
              required
              name="password" 
              id="password" 
              placeholder='password' 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}/>
          </label>

          <label htmlFor="">Confirm Password
            <input 
              type="password" 
              autoComplete='new-password'
              required
              name="confirm" 
              id="confirm" 
              placeholder='confirm password' 
              onChange={(e) => setConfirm(e.target.value)} 
              value={confirm}/>
          </label>

        </form>

        <button className='signup-btn' onClick={() => signupWithEmailPassword()} disabled={register}>Register</button>

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
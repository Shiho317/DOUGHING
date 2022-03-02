import { Link, useNavigate } from 'react-router-dom';
import logoBlack from '../../images/doughing-logo-black.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css';
import loginImg from '../../images/login.webp';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

type Props ={
  isCount: number;
}

const Login: React.FC<Props> = ({isCount}) => {

  const auth = getAuth();
  const navigate = useNavigate();
  const [ authing, setAuthing ] = useState(false);
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const loginWithEmailPassword = async() => {
    setAuthing(true);

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
          console.log(user.uid)
          navigate('/built')
        })
      .catch((error) => {
        console.log(error);
        setAuthing(false)
    })
  }

  

  return(
    <div className="Account-wrapper">
      <Header logo={logoBlack} isCount={isCount}/>
      <div className="acc-login-wrap">

        <div className="acc-login-left">
          <img src={loginImg} alt="login-img" />
        </div>

        <div className="acc-login-right">
        <h1>Log In</h1>

        <form action="" className='input-forms'>

          <label htmlFor="">Email
            <input 
              type="email" 
              name="email" 
              id="e-mail" 
              placeholder='Email' 
              required 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}/>
          </label>

          <label htmlFor="">Password
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder='password' 
              required 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}/>
          </label>
        </form>

        <button className='login-btn' onClick={() => loginWithEmailPassword()} disabled={authing}>Log In</button>

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
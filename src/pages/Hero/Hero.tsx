import logoWhite from '../../images/doughing-logo-white.svg';
import './Hero.css';
import Header from '../Header/Header';
import Svg from '../Motion/Svg';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

type Props = {
  isCount: number;
}

const Hero: React.FC<Props> = ({isCount}) => {
  return(
    <div className='hero-section'>
      <Header logo={logoWhite} isCount={isCount}/>
      <div className="hero-wrap">
        <div className="hero-left">
          <div className="hero-title">
            <h1>What <span className='gradient'>Dough</span> You Like?</h1>
            <h3>As many people, as many pizza.</h3>
          </div>
          <Link to='/built'>
            <div className="hero-btn">
              <button>Make your own pizza</button>
            </div>
          </Link>
        </div>
        <div className="hero-right">
          <Svg/>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Hero;
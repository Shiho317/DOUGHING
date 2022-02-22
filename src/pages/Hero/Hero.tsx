import logoWhite from '../../images/doughing-logo-white.svg';
import './Hero.css';
import Header from '../Header/Header';
import Svg from '../Motion/Svg';

const Hero = () => {
  return(
    <div className='hero-section'>
      <Header logo={logoWhite}/>
      <div className="hero-wrap">
        <div className="hero-left">
          <div className="hero-title">
            <h1>What <span className='gradient'>Dough</span> You Like?</h1>
            <h3>As many people, as many pizza.</h3>
          </div>
          <div className="hero-btn">
            <button>Make your own pizza</button>
          </div>
        </div>
        <div className="hero-right">
          <Svg/>
        </div>
      </div>
    </div>
  )
};

export default Hero;
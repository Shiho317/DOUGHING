import { CreateTypes } from 'canvas-confetti';
import { Component } from 'react';
import ReactCanvasConfetti from './Confetti/Confetti';
import gif from '../../images/pizza-making.gif';
import './Complete.css';
import Header from "../Header/Header";
import logoBlack from '../../images/doughing-logo-black.svg';
import { Link } from 'react-router-dom';

export default class Complete extends Component {
  
  private animationInstance: CreateTypes | null = null;

  constructor(props: {}) {
    super(props);
    this.fire = this.fire.bind(this);
  }

  makeShot(particleRatio: number, opts: object) {
    this.animationInstance && this.animationInstance({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio),
    });
  }

  fire() {
    this.makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    this.makeShot(0.2, {
      spread: 60,
    });

    this.makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  handlerFire = () => {
    this.fire();
  };

  getInstance = (instance: CreateTypes | null) => {
    this.animationInstance = instance;
  };

  render() {
    return (
      <div className="complete-section" onLoad={this.handlerFire}>
          <Header logo={logoBlack}/>
        <div className="complete-wrapper">
          <img src={gif} alt="gif" />
          <h1>Thank you for Ordering!</h1>
          <div className="complete-details">
            <p>Your Order has been successfully approved.</p>
            <p>Now we are making your pizza.</p>
            <p>The estimated arrival time for your pizza is <u>45</u> mins.</p>
          </div>
          <Link to='/'>
            <div className="toHome-btn" >
              <button>Back to Home</button>
            </div>
          </Link>
          <ReactCanvasConfetti
          refConfetti={this.getInstance}
          className="canvas"
          />
        </div>
      </div>
    );
  }
}

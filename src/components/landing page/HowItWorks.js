import React from 'react';
import firstStep from '../../resources/img/how_it_works_steps/firstStep.png';
import secondStep from '../../resources/img/how_it_works_steps/secondStep.png';
import thirdStep from '../../resources/img/how_it_works_steps/thirdStep.png';
import fourthStep from '../../resources/img/how_it_works_steps/fourthStep.png';

class HowItWorks extends React.Component {
  state = {
    animationCounter: 0,
  };

  componentDidMount() {
    this.animationTime = 1000;
    this.delayTime = 1000;
    this.img1 = document.querySelector('.imgOne');
    this.img2 = document.querySelector('.imgTwo');
    this.img3 = document.querySelector('.imgThree');
    this.img4 = document.querySelector('.imgFour');
    this.span1 = document.querySelector('.spanOne');
    this.span2 = document.querySelector('.spanTwo');
    this.span3 = document.querySelector('.spanThree');
    this.span4 = document.querySelector('.spanFour');
    this.countIntervals();
  }

  countIntervals = () => {
    const firstInterval = setInterval(() => {
      this.img4.classList.remove('animate');
      this.img1.classList.add('animate');
      this.span4.classList.remove('animateSpan');
      this.span1.classList.add('animateSpan');
    }, this.animationTime);

    const secondInterval = setInterval(() => {
      clearInterval(firstInterval);
      this.img1.classList.remove('animate');
      this.img2.classList.add('animate');
      this.span1.classList.remove('animateSpan');
      this.span2.classList.add('animateSpan');
    }, this.animationTime * 2);

    const thirdInterval = setInterval(() => {
      clearInterval(secondInterval);
      this.img2.classList.remove('animate');
      this.img3.classList.add('animate');
      this.span2.classList.remove('animateSpan');
      this.span3.classList.add('animateSpan');
    }, this.animationTime * 3);

    this.lastInterval = setInterval(() => {
      clearInterval(thirdInterval);
      this.img3.classList.remove('animate');
      this.img4.classList.add('animate');
      this.span3.classList.remove('animateSpan');
      this.span4.classList.add('animateSpan');

      this.setState({
        animationCounter: this.state.animationCounter + 1,
      });
    }, this.animationTime * 4);
  };

  componentDidUpdate() {
    clearInterval(this.lastInterval);
    this.countIntervals();
  }

  render() {
    return (
      <section className='how-it-works'>
        <h2>Jak to działa?</h2>
        <div className='steps'>
          <div>
            <img className='imgOne' src={firstStep} alt='Pierwszy krok' />
            <span className='spanOne'>Zarejestruj się</span>
          </div>
          <div>
            <img className='imgTwo' src={secondStep} alt='Pierwszy krok' />
            <span className='spanTwo'>Poznaj system</span>
          </div>
          <div>
            <img className='imgThree' src={thirdStep} alt='Pierwszy krok' />
            <span className='spanThree'>Sprawdź działanie</span>
          </div>
          <div>
            <img className='imgFour' src={fourthStep} alt='Pierwszy krok' />
            <span className='spanFour'>Zarabiaj!</span>
          </div>
        </div>
      </section>
    );
  }
}
export default HowItWorks;

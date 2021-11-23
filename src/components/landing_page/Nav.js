import React from 'react';

class Nav extends React.Component {
  state = {
    scrollPosition: 0,
    hideNavPx: 0,
  };

  scrollToSection = (target, duration) => {
    let actualPosition = document.querySelector(target).offsetTop;
    let windowHeight = document.documentElement.clientHeight;

    let startPosition = window.pageYOffset;

    let distance = actualPosition - startPosition - windowHeight / 20;
    let startTime = null;

    function animation(currentTime) {
      if (startTime == null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  takeScrollPosition = () => {
    window.addEventListener('scroll', (e) =>
      this.setState({ scrollPosition: window.scrollY })
    );
  };

  setHidePoint = () => {
    let bannerHeight = document.querySelector('.banner').clientHeight;
    this.setState({
      hideNavPx: bannerHeight,
    });
    window.addEventListener('resize', () => {
      bannerHeight = document.querySelector('.banner').clientHeight;
      this.setState({
        hideNavPx: bannerHeight,
      });
    });
  };

  changeNav = () => {
    if (this.state.scrollPosition > this.state.hideNavPx) {
      document.querySelector('nav').classList.add('minimized');
    } else {
      document.querySelector('nav').classList.remove('minimized');
    }
  };

  componentDidMount() {
    this.takeScrollPosition();
    this.setHidePoint();
  }

  componentDidUpdate() {
    this.changeNav();
  }

  render() {
    return (
      <nav className='home-nav'>
        <a href='#about' onClick={() => this.scrollToSection('.about', 1000)}>
          Kim jesteśmy?
        </a>
        <a
          href='#how'
          onClick={() => this.scrollToSection('.how-it-works', 1000)}
        >
          Jak to działa?
        </a>
        <img src='./resources/img/logo.jpg' alt='' />
        <a href='#'>Zaloguj się</a>
        <a href='#'>Zarejestruj się</a>
      </nav>
    );
  }
}

export default Nav;

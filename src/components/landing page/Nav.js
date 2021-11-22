import React from 'react';

class Nav extends React.Component {
  state = {
    scrollPosition: 0,
    hideNavPx: 0,
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
      <nav>
        <a href='#about'>Kim jesteśmy?</a>
        <a href='#how'>Jak to działa?</a>
        <img src='./resources/img/logo.jpg' alt='' />
        <a href='#'>Zaloguj się</a>
        <a href='#'>Zarejestruj się</a>
      </nav>
    );
  }
}

export default Nav;

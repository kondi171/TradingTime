import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <main className='home-page'>
        <div className='home-page_favourites'>
          <a href='#'>fav1</a>
          <a href='#'>fav2</a>
          <a href='#'>fav3</a>
          <a href='#'>fav4</a>
          <a href='#'>fav5</a>
          <a href='#'>fav6</a>
        </div>
        <div className='home-page_clock'>Zegarek</div>
        <div className='home-page_actions'>
          <h2>Twoje Akcje:</h2>
        </div>
      </main>
    );
  }
}

export default HomePage;

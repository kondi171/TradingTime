import React from 'react';
class LoadingBar extends React.Component {

  componentDidMount() {
    const progress = document.getElementById('progress');
    progress.style.visibility = 'visible';
    setTimeout(() => {
      progress.style.visibility = 'hidden';
    }, this.props.time);
  }

  render() {
    return (
      <div id="progress" className="save-data__overlay">
        <div className="save-data__overlay--text">
          Zapisuję dane...
        </div>
        <div className="save-data__overlay--progress"></div>
      </div>
    );
  }
}

export default LoadingBar;

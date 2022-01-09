import React from 'react';
const LoadingBar = ({ opacity = 0.9, announcement }) => {
  return (
    <>
      <div
        id='progress'
        className='save-data__overlay'
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      >
        <div className='save-data__overlay--text'>{announcement}</div>
        <div className='save-data__overlay--progress'></div>
      </div>
    </>
  );
};

export default LoadingBar;

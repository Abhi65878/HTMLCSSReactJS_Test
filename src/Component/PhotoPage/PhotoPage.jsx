import React from 'react';
import './PhotoPage.css';
import backlit from '/src/assets/backlit.jpg'
import hands from '/src/assets/hands.jpg'
import businessman from '/src/assets/businessman.jpg'

const PhotoPage = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Make your photos more stylish</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
      </div>

      <div className="card-container">
        <div className="card">
          <img src={backlit} alt="Sed ut perspiciatis" className="card-image" />
          <div className="inner-content">
            <h2>Sed ut perspiciatis</h2>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
          </div>
        </div>

        <div className="card">
          <img src={businessman} alt="Lorem ipsum dolor" className="card-image" />
          <div className="inner-content">
            <h2>Lorem ipsum dolor</h2>
            <p>Amot, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
        </div>

        <div className="card">
          <img src={hands} alt="Nemo enim ipsam" className="card-image" />
          <div className="inner-content">
            <h2>Nemo enim ipsam</h2>
            <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;

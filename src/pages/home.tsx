import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div
      className="containerHome"
      style={{
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '85vh',
      }}
    >
      <div className="divTitleHome">
        <h1 className="TitleHome">Toutes nos pizzas sont faites maison</h1>
      </div>
    </div>
  );
};

export default Home;

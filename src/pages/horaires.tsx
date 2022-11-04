import React from 'react';

const Horaires = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        padding: '25px',
      }}
    >
      <h1>Horaires</h1>
      <p>lundi: 12:00 – 14:00</p>
      <p>mardi: 12:00 – 14:00 / 19:00 – 22:00</p>
      <p>mercredi: 12:00 – 14:00 / 19:00 – 22:00</p>
      <p>jeudi: 12:00 – 14:00 / 19:00 – 22:00</p>
      <p>vendredi: 12:00 – 14:00 / 19:00 – 22:00</p>
      <p>samedi: 12:00 – 14:00 / 19:00 – 22:00</p>
      <p>dimanche: Fermé</p>
    </div>
  );
};

export default Horaires;

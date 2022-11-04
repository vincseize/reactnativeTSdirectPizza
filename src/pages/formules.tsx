import React from 'react';

const Formules = () => {
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
      <div>
        <h1>Les formules du midi</h1>
        <p>
          Lorsqu’il faut chaud, ou que vous avez envie de vous booster un peu,
          nous vous recommandons la Formule Salade (5,9 euros). Elle est
          composée d’une salade au choix que vous dégustez avec une boisson de
          50 cl. Il s’agit d’une boisson non alcoolisée. Et pour 2 euros, vous
          avez droit à un dessert.
        </p>
        <h1>Les formules du soir</h1>
        <p>
          Cette fois-ci, Tutti Pizza opte pour des menus dont la composition
          varie selon le nombre de personnes. La Formule Duo 19,9 euros est
          composée de 2 pizzas normales au choix à savourer avec une boisson de
          1,5 litre. Pour un dessert ou une Ti Salade, il faudra compter 2 euros
          supplémentaires.
        </p>
      </div>
    </div>
  );
};

export default Formules;

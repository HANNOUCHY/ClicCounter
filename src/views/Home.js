import React from 'react';

function Home({
  onIncrement,
  onDecrease,
  counter,
}) {
  return (
    <div>
      <button onClick={onIncrement}>
      Cliquez pour incrémenter de 1
      </button>
      <br/>
      <button onClick={onDecrease} disabled={counter<1 ? true : false}>
      Cliquez pour diminuer de 1
      </button>
      <p>Vous avez cliqué {counter} fois</p>
    </div>
  );
};

export default Home;

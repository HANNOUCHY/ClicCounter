import React from 'react';
import Increment from './Increment';
import Decrease from './Decrease';
import ViewClick from './ViewClick';
function Home({
  onIncrement,
  onDecrease,
  counter,
}) {
  return (
    <div>
      <Increment title="Cliquez pour incrémenter de 1" onIncrement={onIncrement} />
      <br/>
      <Decrease title="Cliquez pour diminuer de 1" onDecrease={onDecrease} counter={counter} />

      <ViewClick counter={counter} />
    </div>
  );
};

export default Home;

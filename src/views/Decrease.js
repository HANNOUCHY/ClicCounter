import React from 'react';
function Decrease({
    onDecrease,
    title,
    counter
}) {
  return (
    <div>
   <button onClick={onDecrease} disabled={counter<1?true:false}>
     {title}
      </button>
    </div>
  );
};

export default Decrease;
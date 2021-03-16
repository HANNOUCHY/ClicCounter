import React from 'react';
function Increment({
  onIncrement,
  title
}) {
  return (
    <div>
   <button onClick={onIncrement}>
   {title}
      </button>
    </div>
  );
};

export default Increment;
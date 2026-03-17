import React from 'react'
import { useState, useCallback, memo } from 'react';
const HeavyButton = memo(({ onClick, children }) => {
  console.log(`Rendering ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

const UseCallBackAndReactMemo = () => {

  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Reference stays the same unless 'count' changes
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty deps mean it's created once

  return (
   <>
    <div>UseCallBackAndReactMemo</div>
    <div>
      <p>Count: {count}</p>
      <HeavyButton onClick={increment}>Increment</HeavyButton>
      
      {/* Changing this state won't trigger a HeavyButton re-render */}
      <button onClick={() => setOtherState(!otherState)}>Toggle Other</button>
    </div>
    
   
   </>
  )
}

export default UseCallBackAndReactMemo
import React, { useState, useEffect } from "react";

function WindowResize() {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log('4');

    //Cleanup function
    // return(()=> {
    //     window.removeEventListener('resize', checkSize);
    //     console.log('removed');
    // })
  }, []);

  //The clean up function here is not needed as once we add the empty dependancy array, the useEffect is triggered only once so the event listener is attached only once.
  //If we remove the dep array, we will have multiple event listeners which if not cleaned up will become a memory hell.
  return (
    <div className="info">
      <h1>Window Resize</h1>
      <p>{size} px</p>
    </div>
  );
}

export default WindowResize;

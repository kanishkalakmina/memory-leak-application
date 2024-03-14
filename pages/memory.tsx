import React, { useState, useEffect } from 'react';

interface BigObject {
  [key: string]: string; 
}

const MemoryLeakComponent = () => {
  const [bigObject, setBigObject] = useState<BigObject>({}); 
  const [totalSize, setTotalSize] = useState<number>(0);

  const addBigObject = (size: number) => {
    // Create a new sized object
    const newObject = Array(size * 1024 * 1024).fill('x').join('');
    setBigObject(prevObject => ({
      ...prevObject,
      [`object_${Object.keys(prevObject).length}`]: newObject
    }));
  };

  useEffect(() => {
    let size = 0;
    for (const key in bigObject) {
      if (bigObject.hasOwnProperty(key)) {
        size += bigObject[key].length * 2; 
      }
    }
    setTotalSize(size);

 
  }, [bigObject]);

  return (
    <div>
      <h1>Memory Leak Example</h1>
      <p>Total Size: {totalSize} bytes</p>
      <button onClick={() => addBigObject(5)}>Add 5MB Object</button>
      <button onClick={() => addBigObject(10)}>Add 10MB Object</button>
      <button onClick={() => addBigObject(15)}>Add 15MB Object</button>
      <button onClick={() => addBigObject(20)}>Add 20MB Object</button>
    </div>
  );
};

export default MemoryLeakComponent;

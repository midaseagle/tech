import React, { useState, useTransition, useDeferredValue } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredInput = useDeferredValue(inputValue);

  const handleChange = (e) => {
    startTransition(() => {
      setInputValue(e.target.value);
    });
  };

  const filteredData = data.filter(item => item.includes(deferredInput));

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Filter data..." />
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {filteredData.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

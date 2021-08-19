import Todo from './components/index';
import React, { useState } from 'react';
import Counter from './components/sacle/index';
import CounterTwo from './components/sacle/Countertwo';

function App() {
  const [show, setShow] = useState();
  return (
    <div className='container mx-auto '>
      <div>{show && <Todo />}</div>
      <button
        type='button'
        onClick={() => setShow(prevShow => !prevShow)}
        className='py-3 px-4 bg-purple-700 text-gray-50 hover:bg-yellow-200 
        hover:text-blue-600 rounded-md'
      >
        {show ? 'Hide post' : 'Show post'}
      </button>
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <CounterTwo />
    </div>
  );
}

export default App;

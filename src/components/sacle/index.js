import React, { useReducer } from 'react';
const initialValue = 1;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className='flex items-center justify-center'>
      <p> The value is:{count} </p>
      <div className='flex flex-col gap-5'>
        <button
          type='button'
          onClick={() => dispatch('increment')}
          className='py-3 px-4 bg-green-600 rounded-md text-xl text-white'
        >
          increment
        </button>
        <button
          type='button'
          onClick={() => dispatch('decrement')}
          className='py-3 px-4 bg-green-600 rounded-md text-xl text-white'
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;

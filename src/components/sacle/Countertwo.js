import React, { useReducer } from 'react';
const initialValue = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className='flex items-center justify-center'>
      <p> The value is:{count.counter} </p>
      <div className='flex flex-col gap-5'>
        <button
          type='button'
          onClick={() =>
            dispatch({
              type: 'increment',
            })
          }
          className='py-3 px-4 bg-green-600 rounded-md text-xl text-white'
        >
          increment
        </button>
        <button
          type='button'
          onClick={() =>
            dispatch({
              type: 'decrement',
            })
          }
          className='py-3 px-4 bg-green-600 rounded-md text-xl text-white'
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;

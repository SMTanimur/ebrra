import React, { useState, useEffect } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const [date, setDate] = useState('');
  const [warning, setWarning] = useState('');
  const [count, setCount] = useState(null);

  const handleChange = e => {
    const inputValue = e.target.value;
    const warningUpdate = inputValue.includes('.js')
      ? 'you need javascript skill to complete the task. do you have it?'
      : null;
    setTodo(inputValue);
    setWarning(warningUpdate);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    console.log(`clock ticking`);
    setDate(new Date().toLocaleTimeString());
  };
  useEffect(() => {
    document.title = `click ${count} times`;
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div>
      <textarea
        name='todo'
        value={todo}
        onChange={handleChange}
        className='bg-gray-500 text-white'
      />
      <br />
      <hr />
      <h3>{warning || 'Good chose!'}</h3>
      <p className='flex justify-center items-center bg-purple-400 text-xl text-white py-2'>
        {date}
      </p>
      <br />
      <br />
      <button
        type='button'
        className='py-3 px-4 bg-purple-700 text-gray-50 hover:bg-yellow-200 
        hover:text-blue-600 rounded-md'
        onClick={increment}
      >
        click
      </button>
    </div>
  );
}

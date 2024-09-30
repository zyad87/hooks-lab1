import React, { useState } from 'react';

function Hero() {
  const [operator, setOperator] = useState('?');
  const [input1, setInput1] = useState(3);
  const [input2, setInput2] = useState(3);
  const [result, setResult] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCalculate = (operation) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    let res;
    if (operation === '+') res = num1 + num2;
    if (operation === '-') res = num1 - num2;
    if (operation === '*') res = num1 * num2;
    if (operation === '/') res = num1 / num2;
    if (operation === '%') res = num1 % num2;

    setOperator(operation);
    setResult(res);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`hero min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-base-200 text-black'}`}>
      <div className="hero-content text-center">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-5xl font-bold">Calculator</h1>
          <div className="flex gap-10 justify-center items-center">
            <div className="text-center">{input1}</div>
            <h1 className="text-4xl"> {operator} </h1>
            <div className="text-center">{input2}</div>
            <h1 className="text-4xl"> = </h1>
            <h1 className="text-4xl"> {result} </h1>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5">
            <button onClick={() => handleCalculate('+')} className="btn btn-primary">
              +
            </button>
            <button onClick={() => handleCalculate('-')} className="btn btn-primary">
              -
            </button>
            <button onClick={() => handleCalculate('/')} className="btn btn-primary">
              /
            </button>
            <button onClick={() => handleCalculate('*')} className="btn btn-primary">
              *
            </button>
            <button onClick={() => handleCalculate('%')} className="btn btn-primary">
              %
            </button>
          </div>

          <button onClick={toggleDarkMode} className="btn mt-5">
             Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const clickevent = (event) => {
    const buttonName = event.target.innerText;
    const answer = calculate(state, buttonName);
    setState(answer);
  };

  const { total, operation, next } = state;
  return (
    <>
      <div className="calculater">
        <h1 className="calcTitle">lets do some math!</h1>
        <div className="calculeter-wrap">
          <div className="output">
            {total}
            {operation}
            {next}
          </div>
          <button type="button" onClick={clickevent} className="number">
            AC
          </button>
          <button type="button" onClick={clickevent} className="number">
            +/-
          </button>
          <button type="button" onClick={clickevent} className="number">
            %
          </button>
          <button type="button" onClick={clickevent} className="operators">
            ÷
          </button>
          <button type="button" onClick={clickevent} className="number">
            7
          </button>
          <button type="button" onClick={clickevent} className="number">
            8
          </button>
          <button type="button" onClick={clickevent} className="number">
            9
          </button>
          <button type="button" onClick={clickevent} className="operators">
            x
          </button>
          <button type="button" onClick={clickevent} className="number">
            4
          </button>
          <button type="button" onClick={clickevent} className="number">
            5
          </button>
          <button type="button" onClick={clickevent} className="number">
            6
          </button>
          <button type="button" onClick={clickevent} className="operators">
            -
          </button>
          <button type="button" onClick={clickevent} className="number">
            1
          </button>
          <button type="button" onClick={clickevent} className="number">
            2
          </button>
          <button type="button" onClick={clickevent} className="number">
            3
          </button>
          <button type="button" onClick={clickevent} className="operators">
            +
          </button>
          <button type="button" onClick={clickevent} className="spann-two">
            0
          </button>
          <button type="button" onClick={clickevent} className="number">
            .
          </button>
          <button type="button" onClick={clickevent} className="operators">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;

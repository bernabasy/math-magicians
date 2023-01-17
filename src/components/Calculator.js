import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <>

        <div className="calculeter-wrap">
          <div className="output">0</div>
          <button type="button" className="number">AC</button>
          <button type="button" className="number">+/-</button>
          <button type="button" className="number">%</button>
          <button type="button" className="operators">÷</button>
          <button type="button" className="number">7</button>
          <button type="button" className="number">8</button>
          <button type="button" className="number">9</button>
          <button type="button" className="operators">x</button>
          <button type="button" className="number">4</button>
          <button type="button" className="number">5</button>
          <button type="button" className="number">6</button>
          <button type="button" className="operators">-</button>
          <button type="button" className="number">1</button>
          <button type="button" className="number">2</button>
          <button type="button" className="number">3</button>
          <button type="button" className="operators">+</button>
          <button type="button" className="spann-two">0</button>
          <button type="button" className="number">.</button>
          <button type="button" className="operators">=</button>
        </div>
      </>

    );
  }
}

export default Calculator;

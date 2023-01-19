import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  clickevent = (event) => {
    const buttonName = event.target.innerText;
    const answer = calculate(this.state, buttonName);
    this.setState(answer);
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <>
        <div className="calculeter-wrap">
          <div className="output">
            {total}
            {operation}
            {next}
          </div>
          <button type="button" onClick={this.clickevent} className="number">
            AC
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            +/-
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            %
          </button>
          <button type="button" onClick={this.clickevent} className="operators">
            ÷
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            7
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            8
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            9
          </button>
          <button type="button" onClick={this.clickevent} className="operators">
            x
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            4
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            5
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            6
          </button>
          <button type="button" onClick={this.clickevent} className="operators">
            -
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            1
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            2
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            3
          </button>
          <button type="button" onClick={this.clickevent} className="operators">
            +
          </button>
          <button type="button" onClick={this.clickevent} className="spann-two">
            0
          </button>
          <button type="button" onClick={this.clickevent} className="number">
            .
          </button>
          <button type="button" onClick={this.clickevent} className="operators">
            =
          </button>
        </div>
      </>
    );
  }
}

export default Calculator;

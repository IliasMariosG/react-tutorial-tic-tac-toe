import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 'Square' component
class Square extends React.Component {
  render() {
    return (
      // Change Square’s render method to show that valuechange the button tag that is
      // returned from the Square component’s render() function
      <button className="square" onClick={function() {
alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}

// 'Board' component
class Board extends React.Component {
  renderSquare(i) {
    // pass a prop called `value` to the Square
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// 'Game' component
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

import React from "react";
import ReactDOM from "react-dom";

function Square(props) {
  let color = "white";
  if (props.winsquares) {
    for (let j = 0; j < props.winsquares.length; j++) {
      if (props.id === props.winsquares[j]) {
        color = "red";
      }
    }
  }

  return (
    <button
      key={props.id}
      className="square"
      onClick={props.onClick}
      style={{ backgroundColor: color }}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        id={i}
        value={this.props.squares[i]}
        winsquares={this.props.winsquares}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const rows = [0, 1, 2];
    const columns = [0, 3, 6];

    return (
      <div>
        {columns.map((j) => {
          return (
            <div key={j} className="board-row">
              {rows.map((i) => {
                return this.renderSquare(i + j);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          ordersquares: [],
          winsquares: [],
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      toggle: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const ordersquares = current.ordersquares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    ordersquares.push(i);
    const winner = calculateWinner(squares);
    this.setState({
      history: history.concat([
        {
          squares: squares,
          ordersquares: ordersquares,
          winsquares: winner ?  winner.winsquares : null
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleOrder() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const ordersquares = current.ordersquares;
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const player = move % 2 === 0 ? "O" : "X";
      const desc = move
        ? "Go to move #" +
          move +
          " player: " +
          player +
          " square: " +
          ordersquares[move - 1]
        : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner.player;
    } else if (current.ordersquares.length===9){
      status = "It is a draw. Restart the Game"
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    const toggleButton = (
      <button onClick={() => this.handleOrder()}>Toggle Order</button>
    );


    return (
      <div className="game">
        <div className="game-board">
          <Board
            winsquares={current.winsquares}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{this.state.toggle ? moves.slice().reverse() : moves} </ol>
        </div>
        <div>{toggleButton}</div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        player: squares[a],
        winsquares: [a, b, c],
      };
    }
  }
  return null;
}

import React, { Component } from 'react';
import './style.css';

class GetSquare extends Component {
  constructor(props) {
    super(props);
  }

  buildSquare = (width, height, left, top) => {
    return {
      border: '1px solid black',
      position: 'absolute',
      width: `${width}px`,
      height: `${height}px`,
      left: `${left}px`,
      top: `${top}px`,
    };
  };

  render() {
    return (
      <div
        style={this.buildSquare(
          this.props.width,
          this.props.height,
          this.props.left,
          this.props.top
        )}
      ></div>
    );
  }
}

class OverlapArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      square1: { width: 300, height: 200, left: 10, top: 10 },
      square2: { width: 400, height: 100, left: 100, top: 150 },
    };
  }

  showOverlap = () => {
    const { square1, square2 } = this.state;
    let x1 = square1.left;
    let y1 = square1.top;
    let x2 = x1 + square1.width;
    let y2 = y1 + square1.height;
    let x21 = square2.left;
    let y21 = square2.top;
    let x22 = x21 + square2.width;
    let y22 = y21 + square2.height;
    let x = Math.max(x1, x21);
    let x_prime = Math.min(x2, x22);
    let y = Math.max(y1, y21);
    let y_prime = Math.min(y2, y22);
    console.log(
      `${Math.max(square1.left, square2.left)}px`,
      `${Math.max(square1.top, square2.top)}px`,
      `${x_prime}px`,
      `${y_prime}px`
    );
    return {
      background: 'red',
      border: 'yellow 1px solid',
      position: 'absolute',
      left: `${Math.max(square1.left, square2.left)}px`,
      top: `${Math.max(square1.top, square2.top)}px`,
      width: `${x_prime - x}px`,
      height: `${y_prime - y}px`,
    };
  };

  render() {
    const { square1, square2 } = this.state;
    return (
      <div>
        <GetSquare
          width={square1.width}
          height={square1.height}
          left={square1.left}
          top={square1.top}
        />
        <GetSquare
          width={square2.width}
          height={square2.height}
          left={square2.left}
          top={square2.top}
        />
        <div style={this.showOverlap()}></div>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <OverlapArea />
    </div>
  );
}

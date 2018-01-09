import React from 'react';
import {Square} from './Square';
export class Board extends React.Component {
  squares = [];
  matrix = [];
  ZeroValue = 9;

  constructor(props){
    super(props);
    let nums = [];
    for (let i = 0; i < 3; i++) {
      let r = [];
      for (let j = 0; j < 3; j++) {
        let value = i * 3 + j;

        let max = 8;
        value = this.random(max);  
        while(nums.indexOf(value)>=0){
          value++;
          if (value>max){
            value = this.random(max);  
          }
        }
        //value++;
        nums.push(value);

        r.push(this.renderSquare(i, j, value+1));
      }
      this.matrix.push(r);
    }
  }

  random(max){
    let value = Math.random() * 1000000;
    value = Math.floor(value) % max;
    return value;
  }

  initSquare(c){
    this.matrix[c.props.row][c.props.col] = c;
  }
  renderSquare(r, c, i) {
    return (
      <Square onInit={(c)=>this.initSquare(c)}
        row={r} col={c} value={i} onClick={(e) => this.squareClick(e)}></Square>
    );
  }
  findSquare(v){
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.matrix[i][j].getValue() === v)
          return this.matrix[i][j];
      }
    }
    return null;
  }
  squareClick(sq){
    debugger;
    console.log("Square clicked:", sq);
    let zero = this.findSquare(this.ZeroValue);
    if (zero){
      if (Math.abs(zero.props.row - sq.props.row) + Math.abs(zero.props.col - sq.props.col)===1){
        zero.setValue(sq.state.value);
        sq.setValue(this.ZeroValue);

        if (this.checkWin()){
          alert("You win");
        }
      }
    }
  }

  checkWin(){
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.matrix[i][j].getValue() !== i*3+j+1)
          return false;
      }
    }
    return true;
  }

  render() {
    return (
      <div>
        <h1>Puzzle</h1>
        <div>{this.matrix[0][0]}{this.matrix[0][1]}{this.matrix[0][2]}</div>
        <div>{this.matrix[1][0]}{this.matrix[1][1]}{this.matrix[1][2]}</div>
        <div>{this.matrix[2][0]}{this.matrix[2][1]}{this.matrix[2][2]}</div>
      </div>
    );
  }


}

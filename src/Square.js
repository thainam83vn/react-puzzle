import React from 'react';

export class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    };
    this.props.onInit(this);
  }
  render(){
    if (this.state.value === 9){
      return (
        <button disabled>_</button>
      )
    } else {
      return (
        <button
          onClick={($event) => this.clicked()}>
          {this.state.value}
        </button>
      );
    }
  }

  clicked(v){
    this.props.onClick(this);
  }

  getValue(){
    return this.state.value;
  }
  setValue(v){
    this.setState({value:v});
  }
}
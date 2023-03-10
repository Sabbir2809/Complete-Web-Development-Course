import React, { Component } from 'react';

class Counter extends Component {
  // componentDidUpdate()
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.number);
    // console.log(this.props.number);
    if (prevProps.number !== this.props.number) {
      console.log('Component Updated');
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

export default Counter;

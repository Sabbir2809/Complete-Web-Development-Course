import React, { Component } from 'react';
import Counter1 from './components/Counter1.js';
import Memo from './components/useMemo/Memo.js';
import State1 from './components/useState/State1.js';

class App extends Component {
  // constructor()
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // componentDidMount()
  componentDidMount() {
    console.log('React Lifecycle Methods Using class & Functional Components');
  }

  // componentWillUnmount()
  componentWillUnmount() {
    console.log('Component Removed');
  }

  // increment function
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <p>React Lifecycle Methods Using class</p>
        {/* <h1>{this.state.count}</h1> */}
        <Counter1 number={this.state.count}></Counter1>
        {/* <button onClick={this.increment.bind(this)}>Click Me</button> */}
        <button
          onClick={() => {
            this.increment();
          }}>
          Click Me
        </button>
        <hr />
        <State1></State1>
        <hr />
        <Memo></Memo>
      </div>
    );
  }
}

export default App;

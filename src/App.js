import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>My Blog</h1>
        </div>
        <div>
	    {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

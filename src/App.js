import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false};

    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio})
  }

  render() {

    return(
      <div>
        <h1>Hello!</h1>
        <p>My name is Neil. I'm a software engineer.</p>
        {this.state.displayBio ? (<div>
          <p>I live in Cape Town</p>
          <p>I'm an engineer that likes to code</p>
          <p>What is the the ultimate app</p>
          <button onClick={this.toggleDisplayBio}>Show less</button>
        </div>
        ) :  (<div>
          <button onClick={this.toggleDisplayBio}>Read More...</button>
        </div> )}
      </div>
    )
  }
}

export default App;

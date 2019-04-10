import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';

class App extends Component {
  state = { displayBio: false};

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio})
  }

  render() {

    return(
      <div>
        <img src={profile} alt="profile" className='profile' />
        <h1>Hello!</h1>
        <p>My name is Neil.</p>
        <Title />
        {this.state.displayBio ? (<div>
          <p>I live in Cape Town</p>
          <p>I'm an engineer that likes to code</p>
          <p>What is the the ultimate app</p>
          <button type="button" className="btn btn-dark" onClick={this.toggleDisplayBio}>Show less</button>
        </div>
        ) :  (<div>
          <button type="button" className="btn btn-info" onClick={this.toggleDisplayBio}>Read More...</button>
        </div> )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App;

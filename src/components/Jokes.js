import React, { Component } from 'react';

const Joke = ({ joke : { setup, punchline} }) => (
  <p>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
  state = { joke : {}, jokes : [] };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(json => this.setState({ joke : json}))
    .catch(error => alert(error.message));

    this.refreshTenJokes();
  }

  refreshTenJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
    .then(response => response.json())
    .then(json => this.setState({ jokes : json}))
    .catch(error => alert(error.message));
  }

  render() {
    const jokes = this.state.jokes;
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <button type="button" className="btn btn-info" onClick={this.refreshTenJokes}>Ten new jokes...</button>
        {
          jokes.map(joke => (
            <Joke key={joke.id} joke={joke} />
          ))
        }
      </div>
    )
  }
}

export default Jokes;

import React from 'react';
import Card from './components/card';
import Form from './components/form';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "daniel-sockness",
      data: [],
    }
  }

  componentDidMount() {
    console.log("componentDidMount was called");
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("bk: App.js: App: componentDidUpdate called!");
    if (prevState.user !== this.state.user) {
      console.log("State changed getting new data");
        this.getData();
    }
  }

  getData() {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return this.setState({ data: data})
      })
      .catch(err => console.log(err))
  }


  changeUser = user => {
    console.log("Change user has been called: ", user); 
    this.setState({
      user: user
    })
  }



  render() {
    console.log("App.js is rendering");
    return(
      <div>
        <Form 
      user={this.state.user}
      changeUser={this.changeUser}
      />
      <Card 
      user={this.state.user}
      data={this.state.data}
      />
      </div>
    );
  }
}

export default App;

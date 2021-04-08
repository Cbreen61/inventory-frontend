import { Component } from 'react';

class App extends Component {

  componentDidMount(){
    fetch('http://[::1]:3000/api/v1/regions', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => console.log(data))

  }
  render(){
  return (
    "hello can you see me "
  );
}
}

export default App;

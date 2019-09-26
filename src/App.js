import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';

// paste the api key 
const app = new Clarifai.App({
  apiKey: 'cee7a4c6a20d48aaafd6c0d7a6a9fb6b'
 });

const particlesOptions = {  
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    // from clarifai models  
    app.models.predict(
      "cee7a4c6a20d48aaafd6c0d7a6a9fb6b", 
    "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
        console.log(response); 
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        {/* Particles component */}
        <Particles className='particles'
          params={particlesOptions}

        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        {
          // <FaceRecognition />
        }
      </div>
    );
  }
}

export default App;


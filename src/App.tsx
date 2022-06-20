import React, {Component} from 'react';
import './App.css';

interface AppState {
  visible : string;
}

export class App extends Component<{}, AppState> {

  constructor(props : {}) {
    super(props);
    this.state = {visible : "home"};
    this.setVisible = this.setVisible.bind(this);
  }


  render() {

    let content;
    if (this.state.visible === "home") {
      content = this.getHeader();
    } else if (this.state.visible === "cs") {
      content = this.getCS();
    } else if (this.state.visible === "math") {
      content = this.getMath();
    } else {
      content = this.getSpanish();
    }


    return (
      <div className="App">
      
      {content}
      {this.getFooter()}
      </div>
    );
  }

  getHeader() {
    return (
      <header className="App-header">
      <h1>Welcome!</h1>

      <h2>My name is Alysa.</h2>

      <h3>I also go by Alicia.</h3>

      <h4>And this is a personal website that I made using a bit of React and Typescript.</h4>

      <h5>I'm a sophomore at the University of Washington studying: </h5>

      <button id='cs' onClick={() => this.setVisible("cs")}>Computer Science</button>

      <button id='math' onClick={() => this.setVisible("math")}>Mathematics</button>

      <button id='spanish' onClick={() => this.setVisible("spanish")}>Spanish</button>
      <br/>
      </header>
    );
  }

  getFooter() {
    return (
    <footer>
      <div className="Copyright">
        <p>© {new Date().getFullYear()} aliciaescribe ~ Thank you for visiting!</p>
      </div>
    </footer>
    );
  }

  getCS() {
    return (
      <h1>I like computer science.</h1>
    );
  }

  getMath() {
    return (
      <h1>I like math.</h1>
    );
  }

  getSpanish() {
    return (
      <h1>I like Spanish.</h1>
    );
  }

  setVisible(topic : string) {
    console.log("Set id");
    this.setState({visible : topic});
  }

}

export default App;

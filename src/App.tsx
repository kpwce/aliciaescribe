import React, {Component} from 'react';
import './App.css';
import {FaHome} from 'react-icons/fa';

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
        <header>
        <button id='homeIcon' onClick= {() => this.setVisible("home")}><FaHome /></button>
        </header>
      
      {content}
      {this.getFooter()}
      </div>
    );
  }

  getHeader() {
    return (
      <div className="App-header">
      <h1>Welcome!</h1>

      <h2>My name is Alysa.</h2>

      <h3>I also go by Alicia.</h3>

      <h4>And this is a personal website that I made using a bit of React and Typescript.</h4>

      <h5>I'm a sophomore at the University of Washington studying: </h5>

      <button id='cs' onClick={() => this.setVisible("cs")}>Computer Science</button>

      <button id='math' onClick={() => this.setVisible("math")}>Mathematics</button>

      <button id='spanish' onClick={() => this.setVisible("spanish")}>Spanish</button>
      <br/>
      </div>
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
      <div className="App-cs">
        <h1>I study computer science to bring all the projects I dream to create to reality.</h1>

        <h2>Have experience in Java, LaTeX, and Git (Version Control).</h2>

        <h2>Am familiar with JavaScript, HTML, CSS, Python, R, and C.</h2>

        <h2>Want to learn Excel, SQL, and Python (Machine learning applications).</h2>
      </div>
    );
  }

  getMath() {
    return (
      <div className="App-math">
      <h1>I study math to not only comprehend but also create the world I want to see.</h1>

      I've taken courses in calculus, linear algebra, differential equations, and statistics. I have a basic understanding of proof-writing.

      <br/>
      I'm passionate about teaching mathematics and advocate for the use of technology to further understanding of mathematics.
      <br/>
    </div>
    );
  }

  getSpanish() {
    return (
      <div className="App-spanish">
      <h1>Actually, I don't study Spanish. I started taking classes in middle school as an elective and haven't stopped taking classes since.</h1>
      
      <h2>What I've Read:</h2>

      <a href="https://books.google.com/books?uid=110208776478307431189&as_coll=4&hl=es&source=gbs_lp_bookshelf_list">See my bookshelf</a>

      <h2>What I've Written:</h2>

      <a href="https://revistaliteral.com/2020/04/13/un-dia-en-el-anden/">Un día en el andén</a>
      </div>
    );
  }

  setVisible(topic : string) {
    console.log("Set id");
    this.setState({visible : topic});
  }

}

export default App;

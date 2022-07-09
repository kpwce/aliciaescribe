import React, {Component} from 'react';
import './App.css';
import {FaHome, FaLinkedin, FaGithub} from 'react-icons/fa';

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
      <div className="App-header">
      <h1>Welcome!</h1>

      <h2>My name is Alysa.</h2>

      <h3>In Spanish, I also go by Alicia.</h3>

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
      Interested in contacting me?
      <br/>
      <a href="https://www.linkedin.com/in/alysam"><FaLinkedin/></a>
      <a href="https://github.com/kpwce"><FaGithub/></a>
      <div className="Copyright">
        <p>© {new Date().getFullYear()} aliciaescribe </p>
      </div>
    </footer>
    );
  }

  getCS() {
    return (
      <div className="App-cs">
        <h1>I learn computer science to bring all the projects I dream to create to reality.</h1>

        <h2>I'm experienced in Java, LaTeX, and Git (Version Control).</h2>

        <h2>I'm familiar with JavaScript, HTML, CSS, Python, R, and C.</h2>

        <h2>I want to learn Excel, SQL, and Python (machine learning applications).</h2>

        <br/>
        <button id='homeIcon' onClick= {() => this.setVisible("home")}><FaHome /></button>
      </div>
    );
  }

  getMath() {
    return (
      <div className="App-math">
      <h1>I learn math to not only comprehend but also create the world I want to see.</h1>

      I've taken courses in calculus, linear algebra, differential equations, and statistics. I have a basic understanding of proof-writing.

      <br/><br/>
      I'm passionate about teaching mathematics and advocate for the use of technology to further understanding of mathematics.
      <br/>

      <button id='homeIcon' onClick= {() => this.setVisible("home")}><FaHome /></button>
    </div>
    );
  }

  getSpanish() {
    return (
      <div className="App-spanish">
      <h1>Actually, I don't "study" Spanish.</h1>

      <h3>I started taking classes in middle school as an elective and haven't stopped taking classes ever since.</h3>
      
      <h2>What I've Read:</h2>

      <a href="https://books.google.com/books?uid=110208776478307431189&as_coll=4&hl=es&source=gbs_lp_bookshelf_list">See my bookshelf</a>

      <h2>What I've Written:</h2>

      <a href="https://revistaliteral.com/2020/04/13/un-dia-en-el-anden/">Un día en el andén</a>

      <br/>
      <button id='homeIcon' onClick= {() => this.setVisible("home")}><FaHome /></button>
      </div>
    );
  }

  setVisible(topic : string) {
    console.log("Set id");
    this.setState({visible : topic});
  }


}

export default App;

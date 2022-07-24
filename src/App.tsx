import React, {Component} from 'react';
import './TextArea'
import texts from './description';
import './App.css';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import profile from './profile_pic.jpg';
import TextArea from './TextArea';

interface AppState {
  lang: boolean; // track language (Spanish if true, otherwise English)
}

export class App extends Component<{}, AppState> {

  constructor(props : {}) {
    super(props);
    this.state = {lang: true};
    
    this.setLang = this.setLang.bind(this);
  }


  // structure all the components
  render() {
    return (
      <div className="App">
        <div className="header">
          <button onClick={() => this.setLang(false)}>EN</button>
          <button onClick={() => this.setLang(true)}>ES</button>
        </div>
      {this.getIntro()}
      {this.getAbout()}
      {this.getWriting()}
      {this.getProjects()}
      {this.getFooter()}
      </div>
    );
  }

  setLang(spanish: boolean) { 
    // Changing languages
    this.setState({lang : spanish});
  } 

  // intro with portrait
  getIntro() {
    return (
      <div className="intro">
        {TextArea("Alicia", "Alysa", this.state.lang)}
        <img src={profile} alt="Profile"/>
      </div>

    );

  }

  // quick self description
  getAbout() {
    return (
      <div className="about">
        {TextArea("Sobre mí", "About me", this.state.lang)}
        <p>{texts[this.state.lang === true ? 0 : 1]}</p>
      </div>

    );
  }

  // some selected works
  getWriting() {
    return (
      <div className="writing">
        {TextArea("Literatura", "Writing", this.state.lang)}

        <div className="work">
          <h4>"Los perros alegóricos en la Revolución mexicana"</h4>
          <p>{texts[(this.state.lang === true ? 0 : 1) + 2]}</p>
        </div>

        <div className="work">
          <h4>"Dibujos de tiza"</h4>
          <p>{texts[(this.state.lang === true ? 0 : 1) + 4]}</p>
        </div>

        <div className="work">
          <h4>"Carta de presentación escrita por un pícaro"</h4>
          <p>{texts[(this.state.lang === true ? 0 : 1) + 6]}</p>
        </div>

        <div className="work">
          <h4>"Un día en el andén"</h4>
          <p>{texts[(this.state.lang === true ? 0 : 1) + 8]}</p>
        </div>

        <div className="work">
          <h4>"Las naranjas sanguinas"</h4>
          <p>{texts[(this.state.lang === true ? 0 : 1) + 10]}</p>
        </div>
      </div>
    );
  }

  // some selected projects
  getProjects() {
    return (
      <div className="projects">
      {TextArea("Proyectos", "Projects", this.state.lang)}
      <div className="work">
          <h4>Lingüística computacional con los textos góticos - Java</h4>
          <p>{texts[(this.state.lang === true ? 0 : 1) + 12]}</p>
        </div>

        <div className="work">
          <h4>Clasificación de dialectos - Java</h4>
          <p>{texts[(this.state.lang === true ? 0 : 1) + 14]}</p>
        </div>

        <div className="work">
          <h4>Sitio personal - JavaScript</h4>
          <p>{texts[(this.state.lang === true ? 0 : 1) + 16]}</p>
        </div>

        <div className="work">
          <h4>Haikus aleatorios - JavaScript</h4>
          <p>{texts[(this.state.lang === true ? 0 : 1) + 18]}</p>
        </div>
    </div>
    );
  }

  // the awesome footer
  getFooter() {
    return (
    <footer>
      {TextArea("Información de contacto", "Contact information", this.state.lang)}
      <a href="https://www.instagram.com/kpwce/"><FaInstagram/></a>
      <a href="https://www.linkedin.com/in/alysam"><FaLinkedin/></a>
      <a href="https://github.com/kpwce"><FaGithub/></a>
      <div className="Copyright">
        <p>© {new Date().getFullYear()} aliciaescribe </p>
      </div>
    </footer>
    );
  }


}
export default App;


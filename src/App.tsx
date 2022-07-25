import React, {Component} from 'react';
import './TextArea'
import texts from './description';
import pms from "./haikus";
import './App.css';
import {FaLinkedin, FaGithub, FaInstagram, FaExternalLinkAlt, FaLightbulb, FaCoffee} from 'react-icons/fa';
import profile from './profile_pic.jpg';
import bird from './bird.jpeg';
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
        {this.getButton()}
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
        <p>{texts[this.state.lang ? 0 : 1]}</p>
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
          <p>{texts[(this.state.lang ? 0 : 1) + 2]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/Perros_alegoricos.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>

        <div className="work">
          <h4>"Dibujos de tiza"</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 4]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/Dibujos_de_tiza.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>

        <div className="work">
          <h4>"Carta de presentación escrita por un pícaro"</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 6]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/Carta_de_presentacion.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>

        <div className="work">
          <h4>"Un día en el andén"</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 8]}</p>
          <a className="button" href="https://revistaliteral.com/2020/04/13/un-dia-en-el-anden/" target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>

        <div className="work">
          <h4>"Entre las naranjas sanguinas"</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 10]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/Naranjas_sanguinas.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
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
          <p>{texts[(this.state.lang ? 0 : 1) + 12]}</p>
        <a className="button" href="https://aliciaescribe.com"><FaGithub/></a>
        </div>

        <div className="work">
          <h4>Clasificación de dialectos - Java</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 14]}</p>
          <a className="button" href="https://aliciaescribe.com"><FaGithub/></a>
        </div>

        <div className="work">
          <h4>Sitio personal - JavaScript</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 16]}</p>
          <a className="button" href="https://github.com/kpwce/site" target='_blank' rel="noreferrer"><FaGithub/></a>
        </div>

        <div className="work">
          <h4>Haikus aleatorios - JavaScript</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 18]}</p>
          <button onClick={() => alert(pms[Math.floor(Math.random() * pms.length)])}><FaLightbulb/></button>
        </div>
    </div>
    );
  }

  getButton() {
    return(
        <div className="mystery">
        {TextArea("¿Qué hace este botón?", "What does this button do?", this.state.lang)}
        <button id="mystery-button" onClick={() => this.mystery()}><FaCoffee/></button><br/><br/>
          <iframe id="vid" width="320" height="240" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&amp"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
          <img id="pic" src={bird} alt="Chill pigeon"/>
        </div>
    );
  }

  // determines function of mystery button
  mystery() {
    let mobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    if (!mobile) {
      let elem = document.getElementById("vid");
      if (elem) {
        if (elem.style.display === "inline-block") {
          elem.style.display = "none";
          elem.setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&amp");
        } else {
          elem.setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&amp;autoplay=1");
          setTimeout(function(){if (elem) elem.style.display = "inline-block";},1000);
        }
      }
    } else {
      let elem = document.getElementById("pic");
      if (elem) {
        if (elem.style.display === "inline-block") {
          elem.style.display = "none";
        } else {
          elem.style.display = "inline-block";
        }
      }

    }

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


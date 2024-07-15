import React, {Component} from 'react';
import './TextArea'
import texts from './description';
import './App.css';
import {FaLinkedin, FaGithub, FaInstagram, FaExternalLinkAlt} from 'react-icons/fa';
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
        {this.getWriting()}
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
        <div>
            <h1>Alysa Meng</h1>
            <p>{texts[this.state.lang ? 0 : 1]}</p>
          </div>
      </div>
    );

  }

  // some selected works
  getWriting() {
    return (
      <div className="writing">
        {TextArea("Sobre literatura", "On Literature", this.state.lang)}

        <div className="work">
            <h4>Los perros alegóricos en la Revolución mexicana</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 2]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/Perros_alegoricos.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>

        <div className="work">
            <h4>Los corridos en Los de abajo, de Mariano Azuela</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 12]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/El_corrido_de_Camila.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>

        <div className="work">
          <h4>Carta de presentación escrita por un pícaro</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 6]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/Carta_de_presentacion.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>

        {TextArea("Sobre matemáticas", "On mathematics", this.state.lang)}
        <div className="work">
          <h4>Dibujos de tiza</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 4]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/Dibujos_de_tiza.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>

        <div className="work">
          <h4>An intuitive explanation of the Euclidean Algorithm</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 8]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/Euclidean_Algorithm_Intuition.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>

        <div className="work">
          <h4>Supplemental Guide on Formal Languages for CSE 311</h4>
          <p>{texts[(this.state.lang ? 0 : 1) + 10]}</p>
          <a className="button" href={process.env.PUBLIC_URL + '/work_files/CSE_311_Section_8.pdf'} target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
        </div>
      </div>
    );
  }
  getFooter() {
    return (
    <footer>
      <div className="Copyright">
        <p>© {new Date().getFullYear()} aliciaescribe </p>
      </div>
    </footer>
    );
  }


}
export default App;


import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"
import "./static/styles/App.css";
import TokenForm from "./components/TokenForm";
import Steps from "./components/Steps";

function App() {
  return(
    <div className='app'>
      <div className="row">
      <div className="column landing">
        <header>
          <h1>Tokenize</h1>
        </header>
        <main>
          <Steps className="walkthrough"/>
        </main>
        <footer>
          <p>
          Designed & Developed by Sahil Sait
          <span>
            <a
              href="https://github.com/SahilSait"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="black" />
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/sahilsaitn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter color="black" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/sahilsait/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="black" />
            </a>
          </span>
        </p>
        </footer>
      </div>
      <div className="column app_form">
        <TokenForm/>
      </div>
    </div>
    </div>
  );
}

export default App

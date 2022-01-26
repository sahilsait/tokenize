import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"
import './App.css'
import TokenForm from "./TokenForm";

function App() {
  return(
    <div className='app'>
      <header>
        <h1>Tokenize</h1>
      </header>
      <main>
        <TokenForm/>
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
  );
}

export default App

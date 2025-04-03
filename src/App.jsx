import './App.css'
import { DiGithubBadge } from "react-icons/di";
import Linkedin from './components/Linkedin';
function App() {
  

  return (
    <div className='container-app'>
      <h1>Links da Giu </h1>

      <a href="https://github.com/GiuliaSouzaDaF" 
      className='links' target='_blank'>
        <DiGithubBadge />
      
      Github
      </a>
      <Linkedin/>
    </div>
  )
}

export default App

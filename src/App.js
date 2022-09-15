import './App.css';
import me from '../src/img/me.png';
import { NavBar } from './NavBarr';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className='lg:w-2/5 m-auto text-slate-800 text-center font-black mt-6  text-2xl pb-8 animate__animated animate__fadeInDown'>Desde aquí podrás seguirme en todas mis redes sociales<br/> <FontAwesomeIcon className='mt-3 text-black' icon={faArrowDown} /> </h2>
      <div className='flex-col lg:w-2/5 w-11/12 m-auto justify-center bg-white dark:bg-slate-900 rounded-2xl border-2 border-black lg:p-8 p-8 mb-16 animate__animated animate__fadeInUp'>
        <img src={me} className="lg:w-1/3 w-2/3 m-auto pb-2" alt="reatrato" />
        <h2 className='text-center font-extrabold text-3xl p-4 dark:text-white text-slate-900'>Vicente Santiago Perea</h2>
        <h3 className='text-center font-semibold text-slate-700 dark:text-white pb-8'>Técnico en sistemas microínformaticos y redes. Estudiante de desarrollo web 💻 </h3>

        <a href='https://vicenweb.es' target="_blank" rel="noopener noreferrer"><div className='flex backdrop-blur-2xl border-2 dark:border-slate-600 hover:border-black hover:bg-slate-100 dark:hover:bg-slate-700 transition-all ease-in-out lg:w-11/12 m-auto p-4 items-center rounded-2xl mb-3'>
        <FontAwesomeIcon className='text-2xl absolute dark:text-white'  icon={faCloud} /><h2 className='w-full text-center font-bold text-xl text-slate-700 dark:text-white'>Portfolio</h2>
        </div></a>

        <a href='https://github.com/itzvicen' target="_blank" rel="noopener noreferrer"><div className='flex backdrop-blur-2xl border-2 dark:border-slate-600 lg:w-11/12 m-auto p-4 items-center rounded-2xl mb-3 hover:border-black hover:bg-slate-100 dark:hover:bg-slate-700 transition-all ease-in-out'>
        <FontAwesomeIcon className='text-2xl absolute dark:text-white'  icon={faGithub} /><h2 className='w-full text-center font-bold text-xl text-slate-700 dark:text-white'>Github</h2>
        </div></a>

        <a href='https://twitter.com/vicendev' target="_blank" rel="noopener noreferrer"><div className='flex backdrop-blur-2xl border-2 dark:border-slate-600 lg:w-11/12 m-auto p-4 items-center rounded-2xl mb-3 hover:border-black hover:bg-slate-100 dark:hover:bg-slate-700 transition-all ease-in-out'>
        <FontAwesomeIcon className='text-2xl absolute dark:text-white'  icon={faTwitter} /><h2 className='w-full text-center font-bold text-xl text-slate-700 dark:text-white'>Twitter</h2>
        </div></a>

        <a href='https://www.instagram.com/itzvicen/' target="_blank" rel="noopener noreferrer"><div className='flex backdrop-blur-2xl border-2 dark:border-slate-600 lg:w-11/12 m-auto p-4 items-center rounded-2xl mb-3 hover:border-black hover:bg-slate-100 dark:hover:bg-slate-700 transition-all ease-in-out'>
        <FontAwesomeIcon className='text-2xl absolute dark:text-white'  icon={faInstagram} /><h2 className='w-full text-center font-bold text-xl text-slate-700 dark:text-white'>Instagram</h2>
        </div></a>

        <a href='https://linkedin.com/in/vicente-santiago-perea-185363213/' target="_blank" rel="noopener noreferrer"><div className='flex backdrop-blur-2xl border-2 dark:border-slate-600 lg:w-11/12 m-auto p-4 items-center rounded-2xl mb-3 hover:border-black hover:bg-slate-100 dark:hover:bg-slate-700 transition-all ease-in-out'>
        <FontAwesomeIcon className='text-2xl absolute dark:text-white'  icon={faLinkedin} /><h2 className='w-full text-center font-bold text-xl text-slate-700 dark:text-white'>LinkedIn</h2>
        </div></a>
      </div>
      <Footer />
    </div>
  );
}

export default App;

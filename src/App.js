import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VectorOne from './assets/svg/Header/headerVector.svg'
import illustrationOne from './assets/svg/Header/illustration.svg'
import underAbout from './assets/svg/under-abt.svg'
import underAboutTwo from './assets/svg/under-abt-two.svg'
// import { Container } from 'react-bootstrap';
import { Home } from './components/Home';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { OfferCards } from './components/OfferCards';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { SecFooter } from './components/SecFooter';

function App(props) {
  return (
    <div className="App">
        <div className="illustrations col">
          <div className="headerVector">
            <img src={VectorOne} alt='vector'></img>
          </div>
          <div className="first-illustration">
            <img src={illustrationOne} alt='illustration'></img>
          </div>
        </div>
        <div className="my-container">
          <Home />
          <About />
        </div>

        <span className="under-abt">
          <img src={underAbout} alt="illustration"></img>
          <img src={underAboutTwo} alt="illustration"></img>
        </span>
        
        <div className="my-container">
          <HowItWorks />
          <OfferCards />
          <ContactForm />
        </div>

        <Footer />
        <SecFooter />
    </div>
  );
}

export default App;

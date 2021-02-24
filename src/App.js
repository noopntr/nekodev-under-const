import './App.css';
import './responsive/responsive.css'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VectorOne from './assets/svg/Header/headerVector.svg'

import underAbout from './assets/svg/under-abt.svg'
import underAboutTwo from './assets/svg/under-abt-two.svg'
import { Home } from './components/Home';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { OfferCards } from './components/OfferCards';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { Loading } from './components/Loading';

function App(props) {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <div className="App">
    {
      loading ? <Loading /> : (
        <div className="main-page">
        <div className="illustrations col">
          <div className="headerVector">
            <img src={VectorOne} alt='vector'></img>
          </div>

          {/* <div className="first-illustration">
            <img src={illustrationOne} alt='illustration'></img>
          </div> */}
          <div className="my-container">
            <Home />
            <About />
          </div>
            <div className="under-abt">
              <img src={underAbout} alt="illustration"></img>
              <img src={underAboutTwo} alt="illustration"></img>
            </div>
          <div className="my-container">
            <HowItWorks />
            <OfferCards />
            <ContactForm />
          </div>
          </div>
          <Footer />
        </div>
      )
    }
    </div>
  );
}

export default App;

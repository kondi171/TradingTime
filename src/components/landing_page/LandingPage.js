import '../../assets/scss/landing_page/landing_main.scss';
import Nav from './sections/Nav';
import Header from './sections/Header';
import About from './sections/About';
import HowItWorks from './sections/HowItWorks';
import Footer from './sections/Footer';

function LandingPage() {
  return (
    <div className='wrapper'>
      <Nav />
      <Header />
      <About />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default LandingPage;

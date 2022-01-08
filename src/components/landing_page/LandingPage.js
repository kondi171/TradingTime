import '../../assets/scss/landing_page/landing_main.scss';
import Nav from './landing_sections/Nav';
import Header from './landing_sections/Header';
import About from './landing_sections/About';
import HowItWorks from './landing_sections/HowItWorks';
import Footer from './landing_sections/Footer';

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

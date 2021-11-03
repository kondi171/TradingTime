import '../resources/scss/main.scss';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className="wrapper">
      <Nav />
      <Header />
      <About />  
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default LandingPage;

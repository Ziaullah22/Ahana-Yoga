import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Classes from '../components/Classes';
import Footer from '../components/Footer';
import NavbarBackground from '../components/NavbarBackground';
import About from '../components/About';
import AhanaSlider from '../components/AhanaSlider';

function ClassesPage() {
  const aboutAhanaParagraph ="At Ahana, we offer a diverse range of yoga classes tailored to meet the needs of practitioners at all levels. Whether you are looking to improve flexibility, build strength, or find inner peace, our classes provide a supportive and nurturing environment."
  return (
    <div>
      <Header/>
      <Navbar/>
      <NavbarBackground
                      heading="OUR CLASSES" 
                      paragraph={aboutAhanaParagraph} />
      <About/>
      <Classes/>
      <AhanaSlider/>
      <Footer/>
    </div>
  );
}

export default ClassesPage;

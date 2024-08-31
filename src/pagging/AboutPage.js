import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import NavbarBackground from '../components/NavbarBackground';
import Trainer from '../components/Trainer';
import AhanaSlider from '../components/AhanaSlider';
import Slider2nd from '../components/Slider2nd';

function AboutPage() {
  const aboutAhanaParagraph = "Ahana is a prestigious yoga institution dedicated to fostering physical and mental well-being. Our classes are designed for all levels, from beginners to advanced practitioners, providing a peaceful and supportive environment to practice yoga and meditation. Join us to rejuvenate your body, mind, and soul.";
  return (
    <div>
      <Header/>
      <Navbar/>
      <NavbarBackground 
                heading="ABOUT" 
                paragraph={aboutAhanaParagraph} 
            />
      <About/>
      <Trainer/>
      <Slider2nd/>
      <AhanaSlider/>
      <Footer/>
    </div>
  );
}

export default AboutPage;

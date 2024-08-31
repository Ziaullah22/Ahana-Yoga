import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarBackground from '../components/NavbarBackground';
import Trainer from '../components/Trainer';
import AhanaSlider from '../components/AhanaSlider';

function TrainersPage() {
  const aboutAhanaParagraph ="Our trainers are the heart of Ahana. Each instructor brings years of experience and a deep passion for yoga, creating an inspiring and educational atmosphere in every class. They are dedicated to helping you achieve your wellness goals, offering personalized guidance and encouragement."
  return (
    <div>
      <Header/>
      <Navbar/>
      <NavbarBackground
                      heading="OUR TRAINERS" 
                      paragraph={aboutAhanaParagraph} />
            <Trainer/>
            <AhanaSlider/>
      <Footer/>
    </div>
  );
}

export default TrainersPage;

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import About from '../components/About';
import Classes from '../components/Classes';
import Trainer from '../components/Trainer';
import Slider2nd from '../components/Slider2nd';
import OurPlans from '../components/Plans';
import Events from '../components/Events';
import SignUp from '../components/SignUp';
import AhanaSlider from '../components/AhanaSlider';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Slider/>
      <About/>
      <Classes/>
      <Trainer/>
      <Slider2nd/>
      <Events/>
      <OurPlans/>
      <SignUp/>
      <AhanaSlider/>
      <Footer/>
    </div>
  );
}

export default HomePage;

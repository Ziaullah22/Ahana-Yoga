import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Events from '../components/Events';
import Footer from '../components/Footer';
import NavbarBackground from '../components/NavbarBackground';
import AhanaSlider from '../components/AhanaSlider';

function EventPage() {
  const aboutAhanaParagraph ="Join us at Ahana for special events that go beyond the mat. We host workshops, retreats, and community gatherings designed to deepen your yoga practice and connect you with like-minded individuals. Our events are an opportunity to explore new techniques."
  return (
    <div>
      <Header/>
      <Navbar/>
      <NavbarBackground
                      heading="OUR EVENTS" 
                      paragraph={aboutAhanaParagraph} />
      <Events/>
      <AhanaSlider/>
      <Footer/>
    </div>
  );
}

export default EventPage;

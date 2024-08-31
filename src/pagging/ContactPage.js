import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';
import NavbarBackground from '../components/NavbarBackground';
import ContactUs from '../components/Contact';
import AhanaSlider from '../components/AhanaSlider';

function ContactPage() {
  const aboutAhanaParagraph ="Get in touch with us at Ahana! Whether you have questions about our classes, want to learn more about our events, or need assistance with your membership, we are here to help. Our friendly and knowledgeable team is available to provide the support you need."
  return (
    <div>
      <Header/>
      <Navbar/>
      <NavbarBackground
                      heading="CONTACT US" 
                      paragraph={aboutAhanaParagraph} />
      <ContactUs/>
      <AhanaSlider/> 
      <Footer/>
    </div>
  );
}

export default ContactPage;

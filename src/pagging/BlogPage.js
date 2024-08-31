import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarBackground from '../components/NavbarBackground';
import AhanaSlider from '../components/AhanaSlider';
import Blog from '../components/Blog';

function BlogPage() {
  const aboutAhanaParagraph = "Stay informed and inspired with our Ahana blog. We share insights on yoga, wellness, and mindfulness, offering tips and advice to help you lead a balanced and healthy life. From articles on the benefits of different yoga styles to guidance on meditation and nutrition."
  return (
    <div>
      <Header/>
      <Navbar/>
      <NavbarBackground
                      heading="OUR BLOGS" 
                      paragraph={aboutAhanaParagraph} />
              <Blog/>
            <AhanaSlider/>
      <Footer/>
    </div>
  );
}

export default BlogPage;

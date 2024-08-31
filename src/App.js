import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pagging/HomePage';
import ContactPage from './pagging/ContactPage';
import AboutPage from './pagging/AboutPage';
import ClassesPage from './pagging/ClassesPage';
import TrainersPage from './pagging/TrainersPage';
import EventPage from './pagging/EventsPage';
import BlogPage from './pagging/BlogPage';



const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/classes" element={<ClassesPage/>} />
                    <Route path="/trainers" element={<TrainersPage/>} />
                    <Route path="/event" element={<EventPage/>} />
                    <Route path="/blog" element={<BlogPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />

                </Routes>
            </div>
        </Router>
    );
};

export default App;

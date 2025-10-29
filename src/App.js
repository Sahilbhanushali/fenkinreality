import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Home1 from './pages/home1';
import Home1RTL from './pages/home1-rtl';
import Home2 from './pages/home2';
import Home3 from './pages/home3_construction';
import Home4 from './pages/home4_personal_architect';
import Home5 from './pages/home5_residence';
import Home6 from './pages/home6_furniture';
import Home7 from './pages/home7_landscape';
import Home7360 from './pages/home7_landscape_360';
import Home8 from './pages/home8_portfolio';
import Home10 from './pages/home10';
import AboutPage from './pages/innerpages/about';
import BlogPage from './pages/innerpages/blog';
import ContactPage from './pages/innerpages/contact';
import PortfolioPage from './pages/innerpages/portfolio';
import ServicesPage from './pages/innerpages/services';
import SinglePost from './pages/innerpages/single_post';
import SingleProject from './pages/innerpages/single_project';
import SingleProject2 from './pages/innerpages/single_project2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home5 />} />
        <Route path="/innerpages/about" element={<AboutPage />} />
        <Route path="/innerpages/blog" element={<BlogPage />} />
        <Route path="/innerpages/contact" element={<ContactPage />} />
        <Route path="/innerpages/portfolio" element={<PortfolioPage />} />
        <Route path="/innerpages/services" element={<ServicesPage />} />
        <Route path="/innerpages/single_post" element={<SinglePost />} />
        <Route path="/innerpages/single_project" element={<SingleProject />} />
        <Route
          path="/innerpages/single_project2"
          element={<SingleProject2 />}
        />
      </Routes>
    </Router>
  );
}

export default App;

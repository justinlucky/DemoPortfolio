import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './Pages/Index';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import MyServices from './Pages/My Services/myservices';
import MyCv from './Pages/My CV/mycv';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Index}/>
          <Route path='/lungchuingam/home' Component={Home}/>
          <Route path='/about-me' Component={About}/>
          <Route path='/contact-me' Component={Contact}/>
          <Route path='/my-services' Component={MyServices}/>
          <Route path='/my-cv' Component={MyCv}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

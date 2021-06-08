import React, { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import Homes from './pages/Homes';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/homes' component={Homes} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

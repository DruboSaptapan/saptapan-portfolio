import React from 'react';
// import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact'
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';
// import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Projects></Projects>
           {/* <AboutMe></AboutMe> */}
           {/* <Skills></Skills> */}
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;
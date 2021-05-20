import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import About1 from "../components/About1";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import How from "../components/How";
import image1 from "../assets/img/1.gif";
import Pricing from "../components/Pricing";
const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="App">
        <Navbar />
        <Header
          image={image1}
          text="Collect ultra rare digital Avatars"
          para="Grab & experience the thrill of unveiling ultra-rare digital avatars only you can truly own!"
          changeBackground="true"
        />
        <About />
        <Portfolio />
        <About1 />
        <How />
        <Pricing />
        {/*<Contact />*/}
        <Footer />
      </div>
    </>
  );
};

export default Home;

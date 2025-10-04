import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Services from "./components/services";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  );
}

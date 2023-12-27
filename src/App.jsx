import "./styles/reset.css";
import "./styles/common.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Sale from "./components/sale/Sale";
import Download from "./components/download/Download";
import Address from "./components/address/Address";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Arrivals />
      <Sale />
      <Download />
      <Address />
      <Footer />
    </>
  );
}

export default App;

import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import Arrivals from "../../components/arrivals/Arrivals";
import Sale from "../../components/sale/Sale";
import Download from "../../components/download/Download";
import Address from "../../components/address/Address";

function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Arrivals />
      <Sale />
      <Download />
      <Address />
    </>
  );
}

export default Home;

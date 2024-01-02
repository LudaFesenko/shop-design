import "./styles/reset.css";
import "./styles/common.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

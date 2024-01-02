import App from "./App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Catalogue from "./pages/Catalogue/Catalogue";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/fashion" element={<h1>FASHION</h1>} />
      <Route path="/favorite" element={<h1>FAVORITE</h1>} />
      <Route path="/lifestyle" element={<h1>LIFESTYLE</h1>} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  ),
  { basename: "/shop-design" }
);

export default router;

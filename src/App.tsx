import { FC } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Checkout from "./pages/checkout/Checkout";
import Root from "./components/root/Root";
import Home from "./pages/home/Home";
import { productLoader } from "./utils/loaders/productLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/:category">
        <Route index element={<Category />} />
        <Route path=":product" element={<Product />} loader={productLoader} />
      </Route>
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

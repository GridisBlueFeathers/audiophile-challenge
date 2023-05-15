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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Root />} />
      <Route path="/:category" element={<Category />}>
        <Route path="/:product" element={<Product />} />
      </Route>
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  )
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

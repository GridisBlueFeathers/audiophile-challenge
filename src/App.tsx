import { FC } from "react";
import "./App.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import Root from "./components/root/Root";
import Home from "./pages/home/Home";
import { productLoader } from "./utils/loaders/productLoader";
import SuspendedProduct from "./components/suspendedProduct/SuspendedProduct";
import SuspendedCategory from "./components/suspendedCategory/SuspendedCategory";
import { categoryLoader } from "./utils/loaders/categoryLoader";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
                <Route path="/:category">
                <Route index element={<SuspendedCategory />} loader={categoryLoader} />
                <Route path=":product" element={<SuspendedProduct />} loader={productLoader} />
            </Route>
            <Route path="checkout" element={<Checkout />} />
        </Route>
    )
);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;

import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom"
import Product from "../../pages/product/Product";
import { type DeferredRouteLoaderData } from "../../utils/firebase/types";

const SuspendedProduct = () => {
    const data = useLoaderData() as DeferredRouteLoaderData;

    return (
        <>
            <Suspense fallback={<main>Loading...</main>} >
                <Await resolve={data.productDoc} errorElement={<main>Error</main>}>
                    <Product /> 
                </Await>
            </Suspense>
        </>
    )
};

export default SuspendedProduct;
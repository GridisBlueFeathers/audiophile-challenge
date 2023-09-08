import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom"
import Product from "../../pages/product/Product";
import { DocumentSnapshot, DocumentData } from "firebase/firestore";

interface DeferredRouteLoaderData{
    productDoc: Promise<DocumentSnapshot <DocumentData, DocumentData>>
}

const SuspendedProduct = () => {
    const data = useLoaderData() as DeferredRouteLoaderData;

    return (
        <>
            <Suspense fallback={<main>Loading...</main>} >
                <Await resolve={data.productDoc} >
                    <Product /> 
                </Await>
            </Suspense>
        </>
    )
};

export default SuspendedProduct;
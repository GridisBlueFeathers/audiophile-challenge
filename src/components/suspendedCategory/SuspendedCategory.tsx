import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { DeferredRouteLoaderData } from "../../utils/firebase/types";
import Category from "../../pages/category/Category";

const SuspendedCategory = () => {
    const data = useLoaderData() as DeferredRouteLoaderData;

    return (
        <Suspense fallback={<main>Loading...</main>}>
            <Await resolve={data.categoryDoc} errorElement={<main>Error</main>}>
                <Category />
            </Await>
        </Suspense>
    )
}

export default SuspendedCategory;

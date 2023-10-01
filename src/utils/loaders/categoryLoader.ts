import { LoaderFunction, defer } from "react-router-dom";
import { getCategoryDoc } from "../firebase/getCategoryDoc";

type CategoryProduct = {
    description: string;
    name: string;
    category: string;
    uri: string;
    new: boolean;
}

export type CategoryData = {
    items: CategoryProduct[]
}

export const categoryLoader: LoaderFunction = async ({ params }) => {
    if (params.category) {
        const categoryDoc = getCategoryDoc(params.category)
        return defer({ categoryDoc: categoryDoc })
    }
}

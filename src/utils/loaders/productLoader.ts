import { LoaderFunction, defer } from "react-router-dom";
import getProductDoc from "../firebase/getProductDoc";

export type ProductData = {
    includes: { item: string; quantity: number }[];
    others: { id: string; link: string; name: string }[];
    category: string;
    name: string;
    new: boolean;
    description: string;
    price: number;
    featuresPOne: string;
    featuresPTwo: string;
    id: number
}

export const productLoader: LoaderFunction = async ({ params }) => {
    if (params.product) {
        const productDoc = getProductDoc(params.product);
        return defer({ productDoc: productDoc }) 
    }
};

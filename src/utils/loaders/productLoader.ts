import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { LoaderFunction, defer } from "react-router-dom";

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
}

export const productLoader: LoaderFunction = async ({ params }) => {
    const productDoc = getDoc(doc(firestore, `/products/${params.product}`));
    
    return defer({ productDoc: productDoc }) 
};
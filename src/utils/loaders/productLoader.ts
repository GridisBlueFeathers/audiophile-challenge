import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { LoaderFunction } from "react-router-dom";

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
    const productRef = doc(firestore, `/products/${params.product}`);
    const productDoc = await getDoc(productRef);
    
    if (productDoc.exists() && productDoc.data().category === params.category) {
        const productData = productDoc.data();
        return productData as ProductData;
    }
    
    throw new Error("Document not found");
};
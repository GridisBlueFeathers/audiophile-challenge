import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export const getProduct = async (productId: string) => {
    const productRef = doc(firestore, `/products/${productId}`); 
    const productDoc = await getDoc(productRef);
    if (productDoc.data()) {
        return productDoc;
    } else {
        throw new Error("Document not found");
    }
}
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

const getProductDoc = (productId: string) => {
    const productDoc = getDoc(doc(firestore, `/products/${productId}`))
    return productDoc;
};

export default getProductDoc;
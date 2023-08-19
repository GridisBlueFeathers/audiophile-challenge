import { FirestoreError, doc } from "firebase/firestore";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase/firebase";

type ProductData = {
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

const useProductData = (categoryId: string, productId: string): [ProductData | undefined, boolean, FirestoreError | undefined] => {
    const [value, loading, error] = useDocumentDataOnce(doc(firestore, `/products/${productId}`))

    if (value && value.category === categoryId) {
        return [value as ProductData, loading, error];
    }

    return [undefined, loading, error];
}

export default useProductData;
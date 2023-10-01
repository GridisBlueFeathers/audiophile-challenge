import { doc, getDoc } from "firebase/firestore"
import { firestore } from "./firebase"

export const getCategoryDoc = (category: string) => {
    const categoryDoc = getDoc(doc(firestore, `/categories/${category}`))

    return categoryDoc;
}

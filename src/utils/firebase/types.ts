import { DocumentSnapshot, DocumentData } from "firebase/firestore"

export type DeferredRouteLoaderData = {
    productDoc: Promise<DocumentSnapshot <DocumentData, DocumentData>>
}

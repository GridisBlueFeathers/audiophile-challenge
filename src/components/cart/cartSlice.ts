import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemProps } from "../cartItem/CartItem";

type CartState = {
    products: ItemProps[]
}

const initialState: CartState = {
    products: [
        {
            id: 4,
            name: "XX99 mk II",
            cost: 2999,
            picture: "/assets/cart/image-xx99-mark-two-headphones.jpg",
            amount: 1,
        },
        {
            id: 5,
            name: "XX59",
            cost: 899,
            picture: "/assets/cart/image-xx59-headphones.jpg",
            amount: 2,
        },
        {
            id: 2,
            name: "YX1",
            cost: 599,
            picture: "/assets/cart/image-yx1-earphones.jpg",
            amount: 1,
        },
    ]
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ItemProps>) => {
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }
        },

        decrementProduct: (state, action: PayloadAction<ItemProps>) => {
            if (action.payload.amount - 1) {
                return {
                    ...state,
                    products: state.products.map(item => {
                        if (item.id === action.payload.id) {
                            return {
                                ...action.payload,
                                amount: action.payload.amount - 1
                            };
                        }

                        return item;
                    })
                }
            }

            return {
                ...state,
                products: state.products.filter(product => {
                   if (product.id !== action.payload.id) {
                       return product; 
                   } 
                })
            };
        },
        incrementProduct: (state, action: PayloadAction<ItemProps>) => {
            return {
                ...state,
                products: state.products.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...action.payload,
                            amount: action.payload.amount + 1
                        }
                    }

                    return item;
                }) 
            };
        },
        clearCart: (state) => {
            return {
                ...state,
                products: []
            }
        }
    }
});


const { actions, reducer } = cartSlice;

export const { addProduct, decrementProduct, incrementProduct, clearCart } = actions;
export default reducer;

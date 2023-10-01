import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemProps } from "../cartItem/CartItem";

type CartState = {
    products: ItemProps[]
}

const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ItemProps>) => {
            if (state.products.filter(item => item.id === action.payload.id).length) {
                return {
                    ...state,
                    products: state.products.map(item => {
                        if (item.id === action.payload.id) {
                            return {
                                ...action.payload,
                                amount: item.amount + action.payload.amount
                            };
                        }

                        return item;
                    })
                }
            }

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

import { Type } from "./action.type";

export const initialState = {
     basket: [] 

    };


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
    // Check if the item already exists in the cart
    const existingItem = state.basket.find((item) => item.id === action.item.id);
    if (!existingItem) { return {
      ...state, basket: [...state.basket, { ...action.item, amount: 1 }], 
    
    }; 
  }else {
    // If item exists, update its amount
    const updatedBasket = state.basket.map((item) =>{
     return item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item

    })
    return { 
      ...state, 
      basket: updatedBasket
     }; 
    }


    default:
      return state;
  }
};




        
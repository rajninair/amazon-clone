export const initialState = {
    basket: [],
    user: null
}

// basket?.reduce is not working.. 
export const getBasketTotal = (basket) => basket ? basket.reduce((amount, item) => item.price + amount, 0) : 0;



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as it not in the basket!`)
            }
            // Check - wrong item deleting - todo
            return {
                ...state,
                basket: newBasket
            }

            case 'EMPTY_BASKET':
                return {
                    ...state,
                    basket: []
                }

        case 'SET_USER':
            return {
                ...state,
                user: action.user

            }

        default:
            return state
    }

}

export default reducer
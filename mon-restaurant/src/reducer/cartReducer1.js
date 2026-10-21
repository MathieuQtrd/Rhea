export const initialState = { cartCount: 0}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "add":
            console.log(1)
            return { cartCount: state.cartCount + 1}
        case "remove":
            console.log(2)
            return { cartCount: Math.max(0, state.cartCount - 1)}
        default :
            return state
    }
}
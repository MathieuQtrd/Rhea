export const initialState = { cartCount: 0, items: [], total: 0}

export const cartReducer = (state, action) => {
    let cartItems;
    let cartTotal;
    let productCartCount;

    

    switch (action.type) {        
        case "add": {
            console.log(action)
            const product = action.product 
            const cartProduct = state.items.find(item => item.id == product.id)
            if(cartProduct) {
                cartItems = state.items.map(item =>
                    item.id === product.id ? { ...item, quantity : item.quantity + 1} :  item
                )
            } else {
                cartItems = [
                    ...state.items, {
                        id: product.id,
                        name: product.name,
                        unitPrice: product.price,
                        quantity: 1,
                    }
                ]
            }
            cartTotal = state.total + product.price
            productCartCount = state.cartCount + 1
            return { cartCount: productCartCount, items: cartItems, total: cartTotal }
        }
        case "remove": {
            console.log(action)
            const product = action.product 
            const cartProduct = state.items.find(item => item.id == product.id)
            cartItems = state.items
            console.log(cartItems)
            productCartCount = Math.max(0, state.cartCount)
            if(cartProduct) {
                if(cartProduct.quantity === 1) {
                    cartItems = state.items.filter(item =>
                        item.id !== product.id 
                    )                    
                } else {
                    cartItems = state.items.map(item =>
                        item.id === product.id ? { ...item, quantity : item.quantity - 1} :  item
                    )
                }
                cartTotal = state.total - product.price
                productCartCount = Math.max(0, state.cartCount - 1)
            }
            
            return { cartCount: productCartCount , items: cartItems, total: cartTotal }
        }
        case "clear": {
            
            return initialState
        }
        default :
            return state
    }
}
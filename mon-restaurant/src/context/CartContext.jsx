import { useReducer, createContext } from 'react'
import { cartReducer, initialState } from '../reducer/cartReducer'

const CartContext = createContext()

export function CartProvider({children}) {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext value={{cart: state, dispatch}}>
            {children}
        </CartContext>
    )

}

export default CartContext

//import { createContext } from 'react';
/**
 * 
 * export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ({})
    useEffect ( () =>  {
        const cartLocal = window.localStorage.getItem('cart')
        if (cartLocal) {
            setCart(JSON.parse (cartLocal))
        }
    }, [] )

    const addToCart = (product) => {
        setCart ((old) => {
            let quantity = 0
            if (old [product.id]){
                quantity = old[product.id]. quantity
            }
        }
        
        const newCart = {
            ...old, 
            [product.id]:{
                quantity: quantity + 
                1, product,            },

        }
        
        window.localStorage.setItem ('cart',JSON.stringify(newCart))
            return newCart
        
    } ) 
    
}

    return (
        <CartContext.Provider value= {{opa: 1}}>
             {children}
        </CartContext.Provider>
           
        
    )
}*/

import { createContext, useReducer, useContext } from "react";
import {faker} from '@faker-js/faker';
import cartReducer from './Reducer';

const Cart = createContext();
faker.seed(99); // diff data when we call it. This will make it static

const Context =({children})=>{

    const products = [...Array(20)].map(()=> (
        {
            id: faker.string.uuid(), 
            name: faker.commerce.productName(), 
            price: faker.commerce.price(), 
            image: faker.image.avatar(),
            inStock: faker.helpers.arrayElement([0,3,5,6,7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.helpers.arrayElement([1,2,3,4,5])
        }
    ))
    console.log(products);

    const [state, dispatch] = useReducer(cartReducer, {
        products: products, 
        cart: []
    })

    // const [productState, productDispatch] = useReducer(productReducer, {
    //     byStock: false, 

    // })



    return(
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState=()=>{
    return useContext(Cart)
}
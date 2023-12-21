import { Card, Button } from "react-bootstrap";
import Rating from './Rating';
import './styles.css'
import { CartState } from "../context/Context";

const SingleProduct = ({prod}) =>{

    const {state: {cart}, dispatch} = CartState();

    return (
        <div className='product'>
            <Card >
                <Card.Img variant="top" src={prod.image} alt={prod.name} /> 
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom: 10}}>
                        <span>Rs {prod.price.split("."[0])}</span>
                        {prod.fastDelivery ? <div>Fast Delivery</div> : <div>4 days delivery</div>}

                        <Rating rating={prod.ratings} />
                    </Card.Subtitle>
                    { cart.some(p =>p.id === prod.id) ?
                        <Button variant="danger"
                            onClick={()=> {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod
                                })
                            }}
                        >Remove from Cart</Button> : 
                        <Button disabled={!prod.inStock} 
                           onClick={()=> {
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: prod
                            })
                           }}
                        >{prod.inStock ? 'Add to Cart' : 'Out of Stock'}</Button>
                    }
                    
                    
                </Card.Body>

            </Card>
        </div>

    )
}

export default SingleProduct ;
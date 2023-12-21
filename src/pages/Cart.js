import {useState, useEffect} from 'react';
import { CartState } from "../context/Context";
import { ListGroup, Button, Row, Col, Form, Image } from "react-bootstrap";
import Rating from "./Rating";
import { MdDelete } from "react-icons/md";

const Cart = ()=>{
    const {state: {cart}, dispatch} = CartState();

    const [total, setTotal] = useState(0); 

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=> acc+parseInt(curr.price)*curr.qty, 0))
    },[cart])

    return (
        <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {cart.map(prod =>(
                        <ListGroup.Item key={prod.id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={prod.image} alt={prod.name} rounded fluid />
                                </Col>
                                <Col md={2}>
                                    <span>{prod.name}</span>
                                </Col>
                                <Col md={2}>
                                    <span>Rs. {prod.price}</span>
                                </Col>
                                <Col md={2}>
                                    <Rating rating={prod.ratings}/>
                                </Col>
                                <Col md={2}>
                                    <Form.Control as="select" value={prod.qty}
                                        onChange={(e)=>dispatch({
                                            type:'CHANGE_CART_QTY',
                                            payload:{
                                                id: prod.id,
                                                qty: e.target.value
                                            }
                                        })}
                                    >
                                        {
                                            [...Array(prod.inStock).keys()].map(x =>(
                                                <option key={x+1}>{x+1}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button type='button' variant="light"
                                     onClick={()=> {
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod
                                        })
                                    }}>
                                        < MdDelete fontSize="35px" style={{cursor: "pointer"}}/>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        
                    ))}
                </ListGroup>
            </div>
            <div className="filters summary">
                <span className="title">Subtotal ({cart.length}) items</span>
                <span style={{ fontweight: 700, fontSize: 20}}>Total: Rs. {total} </span>
                <Button type='button' disabled={cart.length === 0} >
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    )
}

export default Cart ;
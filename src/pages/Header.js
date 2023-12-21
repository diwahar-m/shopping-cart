import { Badge, Nav, Navbar, Container, FormControl, Dropdown, Button } from "react-bootstrap";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { MdDelete } from "react-icons/md";


const Header= ()=>{

    const {state: {cart}, dispatch} = CartState();

    return(
        <Navbar bg="dark" variant="dark" style={{height: 80}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl 
                        placeholder="Search a product" 
                        className='m-auto'
                        style={{width: 500}}
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <LuShoppingCart fontSize="25px"/>
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{minWidth: "100px"}}>
                            {
                                cart.length > 0 ? 
                                <div >
                                    {
                                        cart.map(prod =>(
                                            <>
                                                <span className="cartitem" key={prod.id}>
                                                    <img src={prod.image} 
                                                        className='cartItemImg' 
                                                        alt="prod.name"
                                                    /> 
                                                    <div className="cartItemDetail">
                                                        <span>{prod.name}</span>
                                                        <span>Rs {prod.price.split(".")[0]}</span>
                                                    </div>

                                                    < MdDelete
                                                    fontSize="35px" 
                                                    style={{cursor: "pointer"}}
                                                    onClick={()=> {
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod
                                                        })
                                                    }}
                                                    />
                                                </span>
                                                
                                            </>
                                        ))
                                    }
                                    <Link to="/cart">
                                        <Button style={{width: '95%', margin: '0 10px'}}>Go to Cart</Button>
                                    </Link>
                                </div> :
                                <span style={{padding: 10}}>Empty Cart</span>
                            }
                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
} 
export default Header ;
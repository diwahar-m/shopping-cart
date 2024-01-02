import {Form, Button} from 'react-bootstrap';
import Rating from './Rating';
import './styles.css';
import { CartState } from '../context/Context';

const Filters =()=>{

    

    const {productState: {byStock, byFastDelivery, byRating, sort},
     productDispatch} = CartState();
    
    return(
        <div className='filters'>
            <span className='title'>Filters</span>
            <span>
                <Form.Check 
                    inline 
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={()=>{

                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: 'lowToHigh'
                        })
                        console.log(sort);
                    }
                    }
                    checked = { sort === 'lowToHigh' ? true : false}
                />
            </span>
            <span>
                <Form.Check 
                    inline 
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={()=>
                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: 'highToLow'
                        })
                    }
                    checked = { sort === 'highToLow' ? true : false}
                />
            </span>
            <span>
                <Form.Check 
                    inline 
                    label="Include Out of Box"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={()=>productDispatch({
                        type: 'FILTER_BY_STOCK'
                    })} 
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check 
                    inline 
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={()=>productDispatch({
                        type: 'FILTER_BY_DELIVERY'
                    })} 
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{paddingRight: 10}}>Rating: </label>
                <Rating rating={byRating} onClick={i =>
                     productDispatch({
                        type: 'FILTER_BY_RATING',
                        payload: i
                     })}
                      style={{cursor: "pointer"}} />
            </span>

            <Button variant="light" onClick={() =>
                     productDispatch({
                        type: 'CLEAR_FILTERS',
                     })}
             style={{cursor: "pointer"}}>Clear Filters</Button>
        </div>

    )
}

export default Filters ;
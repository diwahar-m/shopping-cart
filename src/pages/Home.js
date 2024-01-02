import {CartState} from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import './styles.css';

const Home = ()=>{

    const {state: {products},
        productState: {byStock, byFastDelivery, byRating, searchQuery, sort} } = CartState(); // destructured products from the state
    console.log(sort);

    const transformProducts = ()=>{
        const sortedProducts = products;
        console.log(sort)

        if(sort){
            sortedProducts = sortedProducts.sort((a,b) =>{
                sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
            })
        }
        return sortedProducts;

    }

    return (
        <div className='home'>
            <Filters/> 
            <div className='productContainer'>
                {transformProducts().map(prod =>(
                    <SingleProduct prod={prod} key={prod.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home ;
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Rating = ({rating, onClick, style})=>{

    return(
        <>
            {[...Array(5)].map((_,i)=>(
                <span key={i} onClick={()=> onClick(i+1)} style={style}>
                    {rating > i ? <FaStar fontSize="15px" /> : <FaRegStar fontSize="15px" />}
                </span>
                
            ))}
        </>
    )
}

export default Rating ;
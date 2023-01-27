import { Typography, Container } from "@mui/material";

import useNasa from "../nasa-service/useRequest";


const ObjectsQuantity = (props) => {

    const {quantity} = props;

    const {loading} = useNasa();
    

    const content =  loading ? null : <View quantity={quantity}/>;
   

    return (
           <Container>
                {content}
           </Container>
    )
}
const View = (props) => {
    const {quantity} = props;
    return(
        <Typography variant="h6" className='asteroids-quantity'> 
             Quantity of objects nears the Earth: {quantity > 0 ? quantity : null }
        </Typography>

    )
       
}



export default ObjectsQuantity;
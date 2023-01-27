import { useEffect, useState } from "react";

import { Grid , Container} from "@mui/material";

import useNasa from "../nasa-service/useRequest"; 
import NeowsItem from "../neows-item/NeowsItem";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner"
import ObjectsQuantity from "../object-quantity/objectsQuantity";

import "./neowsList.scss";


const NeowsList = () => {
    const [asteroidsList, setAsteroidsList] = useState([]);

    const {loading, error, getAllAsteroids} = useNasa();
   
    
    useEffect(() => {
        const interval = setInterval(onRequest, 5000);
        return () => clearInterval(interval);
    }, [])

    const onRequest = () => {
       getAllAsteroids()
       .then(onAsteroidsListLoaded);
    }

    const onAsteroidsListLoaded = (asteroidsList) => {
        setAsteroidsList(asteroidsList);
        
    }
    
    const quantity = asteroidsList.length;

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View asteroidsList={asteroidsList}/> : null
    

    return (
        <Container>
            <ObjectsQuantity quantity={quantity}/>
           {errorMessage}
           {spinner}
           {content}
            
            
        </Container>
        
    )
}

const View = (props) => {
    const {asteroidsList} = props;
    return (
        <Grid     container 
                  spacing={{ xs: 2, md: 3 }} 
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  className="cards-grid">
            <NeowsItem asteroidsList={asteroidsList}/>
        </Grid>
    )
}


export default NeowsList;
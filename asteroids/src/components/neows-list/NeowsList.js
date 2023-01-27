import { useEffect, useState } from "react";

import { Grid , Container, Typography} from "@mui/material";

import useNasa from "../nasa-service/useRequest"; 
import NeowsItem from "../neows-item/NeowsItem";

import "./neowsList.scss";

const NeowsList = () => {
    const [asteroidsList, setAsteroidsList] = useState([]);

    const {loading, error, getAllAsteroids} = useNasa();

    
    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = () => {
        getAllAsteroids()
            .then(onAsteroidsListLoaded);
    }

    const onAsteroidsListLoaded = (asteroidsList) => {
        setAsteroidsList(asteroidsList);
        
    }
    
   

    return (
        <Container>
            <Typography variant="h4"
                        className="header-title">
                Near orbital objects (NEO)
            </Typography>
            <Grid container 
                  spacing={{ xs: 2, md: 3 }} 
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  className="cards-grid">
                <NeowsItem asteroidsList={asteroidsList}/>
            </Grid>
        </Container>
        
    )
}



export default NeowsList;
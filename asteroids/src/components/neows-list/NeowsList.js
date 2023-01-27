import { useEffect, useState } from "react";


import useNasa from "../nasa-service/useRequest"; 
import NeowsItem from "../neows-item/NeowsItem";


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
        <div>
            <NeowsItem asteroidsList={asteroidsList}/>
        </div>
    )
}



export default NeowsList;
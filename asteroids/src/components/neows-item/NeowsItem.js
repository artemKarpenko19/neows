import React from "react";
import {Grid, Card, CardMedia, CardContent, Typography, Divider} from "@mui/material";

import "./neowsItem.scss";

const NeowsItem = (props) => {
    const {asteroidsList} = props;
   
    const visibleContent = asteroidsList.slice(0, 6);
    
    const items = visibleContent.map((item, i) => {

       const diameter = item.estimated_diameter.kilometers.estimated_diameter_max;
       const hazard = item.is_potentially_hazardous_asteroid;
       const distance = item.close_approach_data[0].miss_distance.kilometers;
       const velocity = item.close_approach_data[0].relative_velocity.kilometers_per_hour; 
       const name = item.name;
        const style = hazard ? {'backgroundColor' : 'red'} : null;
       

        return (

            <Grid item xs={4} className="neows-item" key={item.id}>
               <Card style={style}>
                    <CardMedia  sx={{ height: 200 }}
                                image='https://thumbs.dreamstime.com/b/meteor-asteroid-fireball-apocalypse-earth-planet-headed-end-world-as-crashing-ground-89615502.jpg'
                                title="asteroid">

                    </CardMedia>
                    <CardContent className="card-text">
                        <Typography variant="h6" className="card-text__title">
                            Name: {name}
                        </Typography>
                        <Divider />
                        <Typography className="card-text__descr">Diameter: {diameter} kilometers</Typography>
                        <Typography className="card-text__descr">Is potentially hazardous: { hazard ? 'yes' : 'no'}</Typography>
                        <Typography className="card-text__descr">Distance to the Earth: <br/>{distance} kilometers</Typography>
                        <Typography className="card-text__descr">Relative velocity: <br/>{velocity} kilometers per hour</Typography>
                    </CardContent>
                    
               </Card> 
                

            </Grid>
        )
    });
    return (
    <>
         {items}
    </>
       
    )
}



export default NeowsItem;
import React from "react";




const NeowsItem = (props) => {
    const {asteroidsList} = props;
    // const visibleData = asteroidsList.slice(0, 6);
    console.log(asteroidsList.length);
    
    const items = asteroidsList.map((item, i) => {

       const diameter = item[i].estimated_diameter.kilometers.estimated_diameter_max;
       const hazard = item[i].is_potentially_hazardous_asteroid;
       const distance = item[i].close_approach_data[0].miss_distance.kilometers;
       const velocity = item[i].close_approach_data[0].relative_velocity.kilometers_per_hour; 

        // console.log(diameter, hazard, distance, velocity);

        return (
            <div className="neows-item" key={item[i].id}>
                <div>{diameter}</div>
                <div>Is potentially hazardous: { hazard ? 'yes' : 'no'}</div>
                <div>Distance to the Earth: {distance}</div>
                <div>Relative velocity: {velocity} kilometers per hour</div>

            </div>
        )
    });
    return (
    <>
         {items}
    </>
       
    )
}



export default NeowsItem;
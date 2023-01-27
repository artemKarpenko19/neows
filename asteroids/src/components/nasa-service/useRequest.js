
import { useHttp } from "./useHttp";

const useNasa = () => {
    
    const {loading, request, error, clearError} = useHttp();
      
    const now = new Date();
    function transformDate  (x) {
        let startDate = 1;
        return function () {
            const today = now.getDate();
            startDate = startDate + 1;
            if (startDate === today - 1){
                startDate=1;
            }
            
            return startDate;
        }
    }
   
    let counter = transformDate();
    
    const _apiBase = 'https://api.nasa.gov/neo/rest/v1/feed?';
   
    const _apiKey = 'GoAGfLhYJ2RWzcOlKdeKR8ft1dmVHbf8ZtHEk23J';
    
    let tomorrow;

    const getAllAsteroids = async() => {

        let startDate = counter() + '';
        tomorrow =  +startDate + 1 ;
        startDate = (startDate <= 9) ? startDate = `0${startDate}`: startDate;
        tomorrow = (tomorrow <= 9) ? tomorrow = `0${tomorrow}`: tomorrow;
      
        const res = await request(`${_apiBase}start_date=2023-01-${startDate}&end_date=2023-01-${tomorrow}&api_key=${_apiKey}`);
        
    return _transformData(res);
    }
    
   const _transformData = (data) => {
    console.log(data);
    const date = `2023-01-${tomorrow}`;
        return data.near_earth_objects[date];
    }

    return {loading, error, getAllAsteroids, transformDate,  clearError}
}

export default useNasa;
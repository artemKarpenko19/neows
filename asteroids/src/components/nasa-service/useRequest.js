
import { useHttp } from "./useHttp";

const useNasa = () => {
    
    const {loading, request, error, clearError} = useHttp();

   // https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
 //   https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-01-01&end_date=2023-02-27&api_key=2BlL7dBZrIT2nx1Mao41ZJ9DRGu1eVYLonxly82c
   // "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY"

    const _apiBase = 'https://api.nasa.gov/neo/rest/v1/feed?';
    const startDate = '2023-01-01';
    const endDate =  '2023-02-27';
    const _apiKey = 'FMQbUS1PdyLIEi22Vkb1Sacn2yiR0hYjUHbQRzF7';

    const getAllAsteroids = async() => {
        // console.log(`${_apiBase}start_date=${startDate}&end_date=${endDate}&api_key=${_apiKey}`);
    const res = await request(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-01-27&end_date=2023-01-30&api_key=${_apiKey}`);
    return _transformData(res);
    }
    
    
   const _transformData = (data) => {
    // console.log(data);
    const date = '2023-01-27'
    // console.log(data.near_earth_objects[date]);
        return data.near_earth_objects[date];
    }

    return {loading, error, getAllAsteroids,  clearError}
}

export default useNasa;
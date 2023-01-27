
import { useHttp } from "./useHttp";

const useNasa = () => {
    
    const {loading, request, error, clearError} = useHttp();
    
   // https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
   // https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-01-01&end_date=2023-02-27&api_key=2BlL7dBZrIT2nx1Mao41ZJ9DRGu1eVYLonxly82c
   // "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY"
    
    let startDate = '';

    const transformDate = () => {
        const now = new Date();
      
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        const visibleMonth = (month > 8) ? month + 1 : `0${month + 1}`
        const date = `${year}-${visibleMonth}-${day}`;
        startDate = date;
    }
    transformDate();

    
   // const _apiBase = 'https://api.nasa.gov/neo/rest/v1/feed?';
   // const endDate =  '2023-01-31';
    const _apiKey = 'GoAGfLhYJ2RWzcOlKdeKR8ft1dmVHbf8ZtHEk23J';

    const getAllAsteroids = async() => {

    // const url = `${_apiBase}start_date=${startDate}&end_date=${endDate}&${_apiKey}`;
    const res = await request(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-01-27&end_date=2023-01-31&api_key=${_apiKey}`);
    
    return _transformData(res);
    }
    
    
   const _transformData = (data) => {
    console.log(data);
    const date = '2023-01-27'
        return data.near_earth_objects[date];
    }

    return {loading, error, getAllAsteroids, transformDate,  clearError}
}

export default useNasa;
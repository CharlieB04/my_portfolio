const OPEN_WEATHER_MAP_API_KEY = '10898569d25a336e964d85e20c36cd6e';
const MAIN_CITIES_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743,3514780,3117735,1850147,2267057,2950159&units=metric&appid=';
const SEARCH_CITY_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function useWeatherMainCitiesFetch() {
   try {
        const response = await fetch(MAIN_CITIES_WEATHER_URL+OPEN_WEATHER_MAP_API_KEY);
        if (!response.ok) throw new Error('Error fetching data');
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
};

export async function useSearchedCityFetch(cityName) {
    try {
         const response = await fetch(SEARCH_CITY_WEATHER_URL+'?q='+cityName+'&units=metric&appid='+OPEN_WEATHER_MAP_API_KEY);
         if (!response.ok) {
            const data = await response.json();
            if (data.message === 'city not found') {
                return {message: 'Sorry, city not found'};
            }
            else {
                throw new Error('Error Fetching data');
            }
         }
         const data = await response.json();
         return data;
     }
     catch (error) {
         return error;
     }
 };
import { Box } from '@chakra-ui/react';
import { fetchWeatherMainCitiesFetch } from '../../lib/weather_app/WeatherFetch';
import { useEffect, useState } from 'react';
import WeatherMainCitiesContainer from './WeatherMainCitiesContainer';
import LoadingSpinner from '../items/LoadingSpinner';

export default function WeatherMainCities() {
    const [citiesWeather, setCitiesWeather] = useState();

    useEffect(() => {
        fetchWeatherMainCitiesFetch()
            .then(data => setCitiesWeather(data))
            .catch(console.log);
    },[]);

    return (

        !citiesWeather ?
            (<Box w='100%' h='100%' display='grid' placeItems='center'>
                <LoadingSpinner width={['80%','80%','40%','40%']} height={['30%','60%','20%','20%']}/>
            </Box>)
        : (<WeatherMainCitiesContainer citiesWeather={citiesWeather}/>)
    );
};
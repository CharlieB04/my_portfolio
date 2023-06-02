import { Box } from '@chakra-ui/react';
import { useWeatherMainCitiesFetch } from '../../hooks/useWeatherFetch';
import { useEffect, useState} from 'react';
import WeatherMainCitiesContainer from './WeatherMainCitiesContainer';
import LoadingSpinner from '../items/LoadingSpinner';

export default function WeatherMainCities() {
    const [citiesWeather, setCitiesWeather] = useState();

    useEffect(() => {
        useWeatherMainCitiesFetch()
            .then(data => setCitiesWeather(data))
            .catch(console.log);
    },[]);

    return (

        !citiesWeather ?
            (<Box w='100%' h='100%' display='grid' placeItems='center'>
                <LoadingSpinner width='40%' height='20%'/>
            </Box>)
        : (<WeatherMainCitiesContainer citiesWeather={citiesWeather}/>)
    );
};
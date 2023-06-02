import WeatherMainCities from './WeatherMainCities';
import SearchedCityWeather from './SearchedCityWeather';

export default function WeatherView({city}) {
    return (
        <>
            {city != '' && <SearchedCityWeather city={city}/>}
            <WeatherMainCities />
        </>
    );
};
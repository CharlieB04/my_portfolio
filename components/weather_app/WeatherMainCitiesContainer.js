import WeatherInfoTemplate from './WeatherInfoTemplate';
import { getCardParams } from '../../lib/weather_app/getCardParams';
import { Box, Heading} from '@chakra-ui/react';
import styles from '../../styles/WeatherApp.module.css';

export default function WeatherMainCitiesContainer({citiesWeather}) {
  return (
    <Box mt='10px'>
        <Heading ml={['25px','25px','15px','15px']} fontSize={['xl','xl','4xl','4xl']}>Weather in Main Cities</Heading>
        <Box
            w='100%'
            className={styles.weatherMainCitiesContainer}
            gridTemplateColumns={['repeat(auto-fit, minmax(90vw, 1fr))',
                                  'repeat(auto-fit, minmax(40vw, 1fr))',
                                  'repeat(auto-fit, minmax(25vw, 1fr))',
                                  'repeat(auto-fit, 1fr)']}
            >
                {citiesWeather && citiesWeather.list.map(city => {
                  const {cardColor, fontColor, dayMoment} = getCardParams(city.dt, city.sys.timezone);
                  return (
                    <Box
                        h={['55vh','45vh','40vh','40vh']}
                        borderRadius={7}
                        bgGradient={cardColor}
                        color={fontColor}
                        position='relative'
                        key={city.id}
                    >
                        <WeatherInfoTemplate city={city} dayMoment={dayMoment}/>
                    </Box>)
                })}
        </Box>
    </Box>
  );
}

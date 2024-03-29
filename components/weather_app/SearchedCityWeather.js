import { useEffect, useState } from "react";
import { fetchSearchedCityFetch } from "../../lib/weather_app/WeatherFetch";
import { Box, Heading, Flex } from '@chakra-ui/react';
import { TimeIcon } from "@chakra-ui/icons";
import WeatherInfoTemplate from "./WeatherInfoTemplate";
import LoadingSpinner from "../items/LoadingSpinner";
import { getCardParams } from "../../lib/weather_app/getCardParams";

export default function SearchedCityWeather({city}) {
    const [cityWeatherInfo, setCityWeatherInfo] = useState();

    useEffect(() => {
        fetchSearchedCityFetch(city)
            .then(data => setCityWeatherInfo(data))
            .catch(console.log);
    }, [city]);

    return (
        !cityWeatherInfo ?
            (<Box 
                mt='10px' 
                w='100%' 
                display='grid'
                placeItems='center'
                h={['60vh', '60vh', '35vh', '35vh']}
            >
                <LoadingSpinner width={['80%','80%','40%','40%']} height={['40%','40%','40%','40%']}/>
            </Box>)

            :

            cityWeatherInfo.message ?
                (<Box 
                    mt='10px' 
                    w='100%' 
                    display='grid'
                    placeItems='center'
                    h={['30vh', '30vh', '35vh', '35vh']}
                >
                    
                    <Flex 
                        direction='column' 
                        align='center'
                        justify='space-around' 
                        h='22vh' 
                        fontSize={['1.6rem','1.6rem','3rem','3rem']}
                        textAlign='center'
                    >
                            <TimeIcon w={['2rem','2rem','3rem','3rem']} h={['2rem','2rem','3rem','3rem']} />
                            {cityWeatherInfo.message}
                    </Flex>
                </Box>)
            : 
            (<Box 
                mt='10px' 
                w='100%' 
                h='auto'
            >
                <Heading 
                    ml={['25px','25px','15px','15px']}
                    fontSize={['xl','xl','4xl','4xl']}
                >
                    Search Results
                </Heading>
                <Box
                    w={['91%','91%','97%','97%']}
                    h='60vh'
                    ml='auto'
                    mr='auto'
                    mt='15px'
                    borderRadius={7}
                    bgGradient={ getCardParams(cityWeatherInfo.dt, cityWeatherInfo.timezone).cardColor }
                    color={ getCardParams(cityWeatherInfo.dt, cityWeatherInfo.timezone).fontColor }
                    position='relative'
                    key={cityWeatherInfo.id}
                >
                    <WeatherInfoTemplate city={cityWeatherInfo} dayMoment={ getCardParams(cityWeatherInfo.dt, cityWeatherInfo.timezone).dayMoment }/>
                </Box>
            </Box>)
    );
};
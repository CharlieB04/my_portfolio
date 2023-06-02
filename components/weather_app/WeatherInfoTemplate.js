import {Heading, HStack, Text, Flex } from '@chakra-ui/react';
import {MdWaterDrop} from 'react-icons/md';
import {BiWind} from 'react-icons/bi';

export default function WeatherInfoTemplate({city, dayMoment}) {
  return (
    <>
        <Heading ml='10px'>{city.name}</Heading>
        <Heading ml='10px'>{city.main.temp+" ºC"}</Heading>
        <img src={"http://openweathermap.org/img/w/"+city.weather[0].icon+".png"} 
            alt="City weather related icon" 
            style={{width: '50px', height: '50px', marginLeft: '10px'}}
        />
        <Text ml='10px' fontSize='2xl'>{city.weather[0].description}</Text>
        <HStack w='100%' spacing={5} pl='10px' mb='10px' position='absolute'>
            <Flex align='center' gap='6px' fontSize='xl'><BiWind /><span style={{fontWeight: 'bold'}}>{city.wind.speed}m/s</span></Flex>
            <Flex  align='center' gap='6px' fontSize='xl'><MdWaterDrop /><span style={{fontWeight: 'bold'}}>{city.main.humidity}%</span></Flex>
        </HStack>
        <Text fontSize='2xl'
              ml='10px'
              position='absolute'
              right='2'
              top='1'
        >
            {dayMoment}
        </Text>
        <HStack w='100%' spacing={5} pl='10px' mb='10px' position='absolute' bottom='0'>
            <Text fontSize='xl'>Feels like: <span style={{fontWeight: 'bold'}}>{city.main.feels_like}ºC</span></Text>
            <Text fontSize='xl'>
                Min. <span style={{fontWeight: 'bold'}}>{city.main.temp_min}ºC</span> - 
                Max. <span style={{fontWeight: 'bold'}}>{city.main.temp_max}ºC</span>
            </Text>
        </HStack>
    </>
  );
}

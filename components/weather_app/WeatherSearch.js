import { useState, useRef } from 'react';
import {Box, Input, InputLeftElement, InputGroup, Button} from '@chakra-ui/react';
import {SunIcon} from '@chakra-ui/icons';
import { themeSwitch } from '../../lib/context';

export default function WeatherSearch({children}) {
    const city = useRef();
    const {darkMode} = themeSwitch();
    const [cityName, setCityName] = useState('');

    const handleSubmit = () => {
        setCityName(city.current.value);
        city.current.value = '';
    };

    const cleanSearch = () => {
        city.current.value = '';
        setCityName('');
        handleSubmit();
    };

    return (
        <>
            <Box 
                w='100%' 
                h='10%'
                display='flex'
                alignItems={['center', 'center', 'left', 'left']}
                justifyContent={['center', 'center', 'left', 'left']}
            >
                <InputGroup 
                    w={['60%', '50%', '25%', '25%']}
                    ml='20px'
                    mt='2px'>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SunIcon color={darkMode ? 'gray.300' : 'black'} />}
                    />
                    <Input 
                        placeholder='Search' 
                        ref={city}
                        borderColor={darkMode ? '' : 'black'}
                    />
                    <Button colorScheme='blue' 
                            ml='10px'
                            name='city'
                            onClick={handleSubmit}
                    >OK</Button>
                    <Button colorScheme='blue' 
                            ml='10px' 
                            onClick={cleanSearch}
                    >Clean</Button>
                </InputGroup>
            </Box> 
            {children(cityName)}
        </>
    );
}
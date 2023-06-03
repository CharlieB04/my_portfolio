import { useState, useRef, useContext } from 'react';
import {Box, Input, InputLeftElement, InputGroup, Button} from '@chakra-ui/react';
import {SunIcon} from '@chakra-ui/icons';
import { ThemeContext} from '../../lib/context';

export default function WeatherSearch({children}) {
    const city = useRef();
    const {darkMode} = useContext(ThemeContext);
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
                    w={['90%', '60%', '25%', '25%']}
                    ml={['','','','20px']}
                    mt={['10px','2px','2px','2px']}>
                    <InputLeftElement pointerEvents='none'>
                        <SunIcon color={darkMode ? 'gray.300' : 'black'} />
                    </InputLeftElement>
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
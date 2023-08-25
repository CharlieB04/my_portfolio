import { Flex, Spinner, Text } from '@chakra-ui/react';

export default function LoadingSpinner({width, height}) {
    return (
        <Flex 
            direction='column' 
            justify='space-around'
            alignItems='center'
            w={width}
            h={height}
            border='solid'
        >
            <Spinner
                ml='auto'
                mr='auto'
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
            <Text fontSize='xl'>Getting your thing...</Text>
         </Flex>
    );
};
 import Nav from './Nav';
 import { Box } from '@chakra-ui/react';
 import styles from '../styles/Nav.module.css';

 export default function Layout({children}) {
    return (
        <Box className={styles.main_wrapper}
             gridTemplateColumns={
               ['100vw', '100vw', '25vw 75vw', '25vw 75vw']
             }
             gridTemplateRows={
               ['25vh 75vh', '25vh 75vh', '100vh', '100vh']    
             } 
        >
            <Nav />
            {children}
        </Box>
    );
 }
 import Nav from './Nav';
 import { Box } from '@chakra-ui/react';
 import styles from '../../styles/Nav.module.css';

 export default function Layout({children}) {
    return (
        <Box className={styles.main_wrapper}
             gridTemplateColumns={
               ['100vw', '100vw', '25vw 75vw', '25vw 75vw']
             }
             gridTemplateRows={
               ['10vh 90vh', '10vh 90vh', 'auto', 'auto']    
             } 
        >
            <Nav />
            {children}
        </Box>
    );
 }
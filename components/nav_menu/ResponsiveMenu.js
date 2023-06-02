import { useState, useEffect, useContext } from 'react';

import {Box, IconButton} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';

import Link from 'next/link';

import ThemeMenu from './ThemeMenu';

import { ThemeContext } from '../../lib/context';

import { appRoutes } from '../../lib/appRoutes';

import styles from '../../styles/Nav.module.css';

const {motion} =  require("framer-motion");

export default function ResponsiveMenu() {
    const { darkMode } = useContext(ThemeContext);
    const [display, changeDisplay] = useState('none');
    const variants = {
        open: { opacity: 1},
        closed: { opacity: 0},
    }

    useEffect(() => {
        display == "grid" ? document.body.style.overflow = "hidden" 
        : document.body.style.overflow = "auto"
    }, [display]);
    
    return (
        <>
            <Box className={darkMode ?  [styles.nav_dark, styles.mobile_nav].join(" ") 
                    :  [styles.nav_light, styles.mobile_nav].join(" ")}
                    display={['flex', 'flex', 'none', 'none']}
                    as={motion.div}
                    initial={{y: "-100px"}}
                    animate={{y: 0}}
                    transition={{duration: 0.1, type: "tweet"}}
                >
                    <Box className={styles.logo}
                        gap={['2em', '2em', '10em', '10em']}
                    >
                        <ThemeMenu />
                        <Link href="/" onClick={() => changeDisplay('none')}>
                            <img src="/assets/logo.png"
                                className={styles.img_logo}
                                alt='Zampoña logo'
                            >    
                            </img>
                        </Link>
                        {display == "none" ? <IconButton 
                            aria-label="Open Menu"
                            _hover={{bg: "rgba(0,0,0,0.2)"}}
                            borderRadius={50}
                            background="none"
                            icon={<HamburgerIcon 
                                    color={darkMode ? "white" : "black"}
                                    w={5}
                                    h={5}/>}
                            onClick={() => changeDisplay('grid')}
                        />
                        : <IconButton 
                        aria-label="Close Menu"
                        _hover={{bg: "rgba(0,0,0,0.2)"}}
                        borderRadius={50}
                        background="none"
                        icon={<CloseIcon 
                                color={darkMode ? "white" : "black"}
                                w={3}
                                h={3}/>}
                        onClick={() => changeDisplay('none')}
                        />}
                    </Box>
            </Box>
            <Box className={darkMode ?  [styles.nav_dark, styles.mobile_menu_wrapper].join(" ") 
                    :  [styles.nav_light, styles.mobile_menu_wrapper].join(" ") }
                    display={[display, display, 'none', 'none']}
                    as={motion.div}
                    animate={display == "grid" ? "open" : "closed"}
                    variants={variants}
                    exit={{opacity: 0}} 
                >
                    <ul className={darkMode ? [styles.menu_dark, styles.menu].join(" ") :  [styles.menu_light, styles.menu].join(" ")}>
                        {appRoutes.map(route => (<li key={route.title}><Link href={route.routeName} className={styles.menu_item} onClick={() => changeDisplay('none')}>{route.title}</Link></li>))}
                    </ul>
            </Box>
        </>
    );
};
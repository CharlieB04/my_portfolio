import { useContext } from 'react';
import { Box } from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';

import ThemeMenu from './ThemeMenu';

import { ThemeContext } from '../../lib/context';

import { appRoutes } from '../../lib/appRoutes';

import styles from '../../styles/Nav.module.css';


export default function NormalMenu() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <Box className={darkMode ?  [styles.nav_dark, styles.nav].join(" ") 
                :  [styles.nav_light, styles.nav].join(" ")}
                display={['none', 'none', 'grid', 'grid']}
            >
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/assets/logo.png"
                            width="55"
                            height="55"
                            alt='Zampoña logo'
                            >
                            
                        </Image>
                    </Link>
                    <ThemeMenu />
                </div>
                <ul className={darkMode ?  [styles.menu_dark, styles.menu].join(" ") :  [styles.menu_light, styles.menu].join(" ")}>
                    {appRoutes.map(route => (<li key={route.title}><Link href={route.routeName} className={styles.menu_item}>{route.title}</Link></li>))}
                </ul>
        </Box>
    );
};
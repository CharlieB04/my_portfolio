import style from '../styles/Nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useThemeSwitch } from '../lib/context';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Nav() {
    const { darkMode, toggleTheme } = useThemeSwitch();
    return (
        <nav className={darkMode ?  [style.nav_dark, style.nav].join(" ") 
             :  [style.nav_light, style.nav].join(" ")}>
            <div className={style.logo}>
                <Link href="/">
                    <Image src="/assets/logo.png"
                        width="55"
                        height="55">
                        
                    </Image>
                </Link>
                <Menu>
                    <MenuButton as={Button} 
                                rightIcon={<ChevronDownIcon />}
                                background={darkMode ? 'rgb(9, 9, 65)' : 'rgb(238, 237, 237)'}
                                color={darkMode ? 'white' : 'black'}
                                _hover={darkMode ? 'rgb(9, 9, 65)' : 'rgb(238, 237, 237)'}
                    >
                        {darkMode ? <MoonIcon w={4} h={4} /> : <SunIcon w={4} h={4} color="black"/>}
                    </MenuButton>
                    <MenuList background={darkMode ? 'rgb(9, 9, 65)' : 'rgb(238, 237, 237)'}
                            color={darkMode ? 'white' : 'black'}
                            border='none'>
                        <MenuItem onClick={() => toggleTheme('dark')}
                                _focus={false}
                                _hover={darkMode ? { bg: 'rgb(45, 45, 103)'} : { bg: 'rgb(225, 222, 222)'}}
                                >Dark</MenuItem>
                        <MenuItem onClick={() => toggleTheme('light')}
                                _focus={false}
                                _hover={darkMode ? { bg: 'rgb(45, 45, 103)'} : { bg: 'rgb(225, 222, 222)'}}
                                >Light</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <ul className={darkMode ?  [style.menu_dark, style.menu].join(" ") :  [style.menu_light, style.menu].join(" ")}>
            <li><Link href="/" className={style.menu_item}>Home</Link></li>
                <li><Link href="/weatherApp" className={style.menu_item}>Weather App</Link></li>
                <li><Link href="#" className={style.menu_item}>Gallery App</Link></li>
                <li><Link href="#" className={style.menu_item}>Another App</Link></li>
                <li><Link href="#" className={style.menu_item}>About</Link></li>
            </ul>
        </nav>
    );
}
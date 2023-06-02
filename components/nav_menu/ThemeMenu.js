import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ThemeContext } from '../../lib/context';
import { useContext } from 'react';

export default function ThemeMenu() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <Menu>
            <MenuButton as={Button} 
                rightIcon={<ChevronDownIcon />}
                background={darkMode ? 'rgb(9, 9, 65)' : 'rgb(238, 237, 237)'}
                color={darkMode ? 'white' : 'black'}
                _hover={darkMode ? {bg: 'rgb(35, 35, 225)'}: {bg: 'rgb(122, 120, 120)'}}
            >
                {darkMode ? <MoonIcon w={4} h={4} /> : <SunIcon w={4} h={4} color="black"/>}
            </MenuButton>
            <MenuList background={darkMode ? 'rgb(9, 9, 65)' : 'rgb(238, 237, 237)'}
                      color={darkMode ? 'white' : 'black'}
                      border='none'
            >
                <MenuItem onClick={() => toggleTheme('dark')}
                        _focus={false}
                        _hover={darkMode ? { bg: 'rgb(45, 45, 103)'} : { bg: 'rgb(225, 222, 222)'}}
                >
                    Dark
                </MenuItem>
                <MenuItem onClick={() => toggleTheme('light')}
                        _focus={false}
                        _hover={darkMode ? { bg: 'rgb(45, 45, 103)'} : { bg: 'rgb(225, 222, 222)'}}
                >
                    Light
                </MenuItem>
            </MenuList>
        </Menu>
    );
};
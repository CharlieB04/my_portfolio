import { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { ThemeContext } from "../lib/context";
import WeatherSearch from '../components/weather_app/WeatherSearch';
import WeatherView from '../components/weather_app/WeatherView';
import style from '../styles/WeatherApp.module.css';

export default function WeatherApp() {
       
    const { darkMode } = useContext(ThemeContext);
    return (
        <Box className={darkMode ?  [style.wrapper_dark, style.wrapper].join(" ") 
             : [style.wrapper_light, style.wrapper].join(" ")}>
            <Head>
                <title>Weather App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box className={darkMode ?  [style.main_dark, style.main].join(" ") 
                 : [style.main_light, style.main].join(" ")}
                 width={['100vw', '100vw','75vw', '75vw']}>
                <WeatherSearch>
                    {(city) => (<WeatherView city={city}/>)}
                </WeatherSearch>
            </Box>
        </Box>
    );
}
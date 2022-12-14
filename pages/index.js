import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import style from '../styles/Home.module.css'; 
import { motion } from 'framer-motion'; 
import { Box } from '@chakra-ui/react';
import { useThemeSwitch } from '../lib/context';
import images from '../lib/images';

export default function Home() {
  const { darkMode } = useThemeSwitch();
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  const inn = useRef();
  const bar = useRef();
  
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (
    <Box className={darkMode ? [style.wrapper_dark, style.wrapper].join(" ") 
         : [style.wrapper_light, style.wrapper].join(" ")}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={darkMode ?  [style.main_dark, style.main].join(" ") 
            :  [style.main_light, style.main].join(" ")}
            width={['100vw', '100vw','75vw', '75vw']}
      >
          <motion.div ref={carousel} className={style.carousel}>
            <motion.div ref={inn} className={style.inner_carousel}
                        drag="x" 
                        dragConstraints={{right: 0, left: -width}}
                        whileTap={{cursor: "grabbing"}}
            >
              {images.map(image => {
                  return (
                      <motion.div  key={image.src} className={style.item}>
                          <img src={image.src} alt={image.src} />
                      </motion.div>
                  );
              })}
            </motion.div>
          </motion.div>
      </Box>
    </Box>
  );
}

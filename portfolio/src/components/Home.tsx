import React, { useEffect } from 'react'
import MobileNav from './MobileNav'
import Hero from './Hero'
import Story from './Story'
import Projects from './Projects/Projects'
import { useMediaQuery } from 'react-responsive'

const Home = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
    });

    useEffect(() => {
    }, [isDesktop])

    return (
        <><MobileNav isMobile={isMobile} /><Hero /><Story /><Projects /></>
    )
}

export default Home
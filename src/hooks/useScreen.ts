import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define breakpoints for different screen sizes (customize these values)
    const isMobile = windowWidth <= 768;
    const isTablet = windowWidth <= 1024;
    const isDesktop = windowWidth > 1024;

    return { isMobile, isTablet, isDesktop };
};

export default useScreenSize;

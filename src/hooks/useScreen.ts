import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0,
    );

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);

            // Initial call to set the window width
            handleResize();

            // Cleanup function to remove event listener on unmount
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Define breakpoints for different screen sizes (customize these values)
    const isMobile = windowWidth <= 768;
    const isTablet = windowWidth > 768 && windowWidth <= 1024;
    const isDesktop = windowWidth > 1024;

    return { isMobile, isTablet, isDesktop };
};

export default useScreenSize;

import useWindowDimensions from '@/hooks/useWindowDimensions';

const useScreenSize = () => {
    const dimension: any = useWindowDimensions();

    return {
        isMobile: dimension.width <= 768,
        isTablet: dimension.width <= 1024,
        isDesktop: dimension.width > 1024,
    };
};

export default useScreenSize;

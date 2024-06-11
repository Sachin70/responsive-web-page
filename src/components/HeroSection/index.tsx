import Button from '@/components/Button';

import useScreenSize from '@/hooks/useScreen';

import HeroImage from '@public/png/hero.png';
import HeroImageMobile from '@public/png/hero-mobile.png';

const HeroSection = () => {
    const { isMobile } = useScreenSize();

    return (
        <div
            className="xl:px-24 xl:pb-[200px] xl:pt-[240px] px-10 pt-[320px] pb-[120px]"
            style={{
                backgroundImage: ` linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, rgba(18, 27, 33, 0.9) 100%),
                url(${isMobile ? HeroImageMobile.src : HeroImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <p className="text-white font-semibold text-42 xl:text-7xl xl:leading-94 font-montserrat">
                Start your story <br /> with{' '}
                <span className="font-bold text-42 xl:text-7xl font-montserrat">Olvera</span>
            </p>

            <Button className="hidden xl:block xl:mt-9 py-4">
                <span className="text-black xl:font-semibold xl:text-base font-plusJakartaSans">CONTACT US</span>
            </Button>
        </div>
    );
};

export default HeroSection;

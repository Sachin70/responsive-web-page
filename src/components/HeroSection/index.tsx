import Image from 'next/image';

import Button from '@/components/Button';

import useScreenSize from '@/hooks/useScreen';

import HeroImage from '@public/png/hero.png';
import HeroImageMobile from '@public/png/hero-mobile.png';

const HeroSection = () => {
    const { isMobile } = useScreenSize();

    return (
        <div className="relative">
            <div className="relative">
                <Image src={isMobile ? HeroImageMobile : HeroImage} alt="Hero image" />
                <div className="absolute inset-0 bg-linear-gradient" />
            </div>

            <div className="absolute left-[6%] top-[57%] md:left-[11%] md:top-[33%]">
                <p className="text-white font-semibold text-42 xl:text-7xl xl:leading-94">
                    Start your story <br /> with{' '}
                    <span className="font-bold text-42 xl:text-7xl">Olvera</span>
                </p>

                <Button className="hidden md:block md:mt-9 py-4">
                    <span className="text-black xl:font-semibold xl:text-base">CONTACT US</span>
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;

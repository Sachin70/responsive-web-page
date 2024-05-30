import Image from 'next/image';

import useScreenSize from '@/hooks/useScreen';
import { aboutOlveraData } from '@/utils/constants';

import AboutImage from '@public/png/about-olvera.png';
import AboutImageMobile from '@public/png/about-olvera-mobile.png';

const AboutOlvera = () => {
    const { isMobile, isTablet } = useScreenSize();

    return (
        <div className="relative px-4 text-center md:text-left md:px-20 bg-primary">
            <div>
                <Image src={isMobile ? AboutImageMobile : AboutImage} alt="About Olvera" />
            </div>

            <p className="absolute w-[85%] text-center md:text-left text-white font-normal text-3xl leading-72 top-5 md:top-[22%]">
                {aboutOlveraData?.title}
            </p>

            <p className="absolute text-white top-24 font-extrabold text-40 leading-52 md:hidden ">
                {aboutOlveraData?.mobileHeading}
            </p>

            <p className="absolute text-white top-[270px] md:leading-30 md:top-[34%] md:right-[8%] md:font-normal md:text-lg md:max-w-[420px]">
                {aboutOlveraData?.description}
            </p>

            <div className="absolute top-[320px] md:top-[62%] flex items-center justify-between md:justify-normal gap-2 xl:gap-14 flex-wrap 2xl:justify-between 2xl:gap-40">
                {aboutOlveraData?.icons.map((iconData) => {
                    const Icon = iconData?.icon;
                    const MobileIcon = iconData?.mobileIcons;
                    return isTablet ? (
                        <MobileIcon key={iconData?.id} />
                    ) : (
                        <Icon key={iconData?.id} />
                    );
                })}
            </div>
        </div>
    );
};

export default AboutOlvera;

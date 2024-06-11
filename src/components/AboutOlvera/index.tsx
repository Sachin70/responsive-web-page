import Image from 'next/image';

import useScreenSize from '@/hooks/useScreen';
import { aboutOlveraData } from '@/utils/constants';

import AboutImage from '@public/png/about-olvera.png';
import AboutImageMobile from '@public/png/about-olvera-mobile.png';

const AboutOlvera = () => {
    const { isMobile, isTablet } = useScreenSize();

    return (
        <div
            className="px-4 py-7 text-center md:text-left md:px-24 bg-primary md:pt-28 md:pb-8"
            style={{
                backgroundImage: `url(${isMobile ? AboutImageMobile.src : AboutImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <p className="text-center md:text-left text-white font-normal text-3xl leading-72 font-plusJakartaSans">
                {aboutOlveraData?.title}
            </p>

            <p className="text-white font-extrabold text-40 leading-52 md:hidden">
                {aboutOlveraData?.mobileHeading}
            </p>

            <p className="text-white mt-5 md:mt-3 md:leading-30 md:font-normal md:text-lg md:max-w-[420px] md:ml-auto font-archivo">
                {aboutOlveraData?.description}
            </p>

            <div className="flex items-center justify-between gap-2 flex-wrap 2xl:justify-between md:mt-8">
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

'use client';

import Image from 'next/image';

import Button from '@/components/Button';

import { FooterData } from '@/utils/constants';

import PatternMobile from '@public/png/pattern.png';
import PatternDesktop from '@public/png/pattern-desktop.png';

const Footer = () => {
    const {
        title,
        description,
        mobileIcons,
        desktopIcons,
        message,
        resources,
        careers,
        companyDetails,
        copyRight,
        socialIcons,
    } = FooterData || {};

    return (
        <footer className="relative h-full w-full">
            <div className="absolute lg:hidden w-full z-10 -top-10">
                <Image src={PatternMobile} alt="Pattern" priority />
            </div>

            <div className="absolute hidden lg:block top-28 z-10 w-full">
                <Image src={PatternDesktop} alt="Pattern" priority />
            </div>

            <div className="bg-black1 absolute px-14 text-center xl:text-left flex flex-col items-center w-full xl:px-52">
                <p className="mt-12 text-white font-semibold text-xl z-20 xl:mt-[160px] xl:text-64 xl:leading-70 xl:text-center">
                    {title}
                </p>

                <p className="mt-3 mb-7 text-gray4 font-normal text-xs z-20 xl:text-xl xl:mt-16 xl:mb-12 xl:text-center">
                    {description}
                </p>

                <Button className="bg-primary2 py-[10px] px-5 z-20 xl:px-12 xl:bg-primary">
                    Get Started
                </Button>

                <div className="xl:flex xl:mt-32 xl:justify-between xl:gap-16 xl:w-full z-20">
                    <div className="mt-12 flex flex-wrap justify-between gap-12 xl:hidden z-20">
                        {mobileIcons.map((icons) => {
                            const Icon = icons?.icon;

                            return <Icon key={icons?.id} />;
                        })}
                    </div>

                    <div>
                        <div className="mt-12 xl:flex flex-col justify-between gap-6 hidden z-20 xl:mt-0">
                            {desktopIcons.map((icons) => {
                                const Icon = icons?.icon;

                                return <Icon key={icons?.id} />;
                            })}

                            <p className="text-gray4 mt-[176px] font-normal text-base hidden xl:block xl:mt-0">
                                {message}
                            </p>
                        </div>

                        <p className="text-gray4 mt-[176px] font-normal text-base xl:hidden">
                            {message}
                        </p>
                    </div>

                    <div>
                        <p className="text-white mt-10 mb-6 font-semibold text-26 leading-36 xl:mt-0 xl:text-lg">
                            Resources
                        </p>

                        <div className="flex flex-col gap-3">
                            {resources.map((resource) => (
                                <p
                                    key={resource?.id}
                                    className="text-gray4 font-normal text-2xl xl:text-base cursor-pointer"
                                >
                                    {resource?.label}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-white mt-10 mb-6 font-semibold text-26 leading-36 xl:mt-0 xl:text-lg">
                            Careers
                        </p>

                        <div className="flex flex-col gap-3">
                            {careers.map((career) => (
                                <p
                                    key={career?.id}
                                    className="text-gray4 font-normal text-2xl xl:text-base cursor-pointer"
                                >
                                    {career?.label}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col gap-4 xl:max-w-32 w-full xl:mt-0">
                        <p className="text-white font-medium text-xs xl:text-10 xl:leading-14">
                            {companyDetails?.themeMessage}
                        </p>
                        <p className="text-white font-normal text-xs xl:text-10 xl:leading-14">
                            Phone: {companyDetails?.phone}
                        </p>
                        <p className="text-white font-normal text-xs xl:text-10 xl:leading-14">
                            Email: <br />
                            {companyDetails?.email}
                        </p>

                        <p className="text-white font-normal text-xs xl:text-10 xl:leading-14">
                            Website: {companyDetails?.Website}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 mb-14 mt-16 xl:flex-row xl:justify-between xl:w-full xl:mt-32">
                    <p className="text-white font-normal text-xs xl:text-sm">{copyRight}</p>

                    <div className="flex gap-10">
                        {socialIcons.map((icons) => {
                            const Icon = icons?.icon;

                            return <Icon key={icons?.id} className="cursor-pointer" />;
                        })}
                    </div>
                </div>

                <div className="absolute bottom-[140px] h-[1px] bg-white w-full xl:bg-gray5" />
            </div>
        </footer>
    );
};

export default Footer;

import Image from 'next/image';

import Button from '@/components/Button';

import { CareerData } from '@/utils/constants';

import CircleDesktop from '@public/svg/Ellipse.svg';
import CareerImage from '@public/png/career-image.png';

const Careers = () => {
    const { title, description } = CareerData || {};

    return (
        <div className="md:pl-14 w-full gap-y-16 md:gap-16 relative flex mx-auto md:py-[72px] overflow-hidden flex-col-reverse md:flex-row">
            <div className="md:w-2/4 px-14">
                <div className="md:max-w-xl md:mx-auto md: my-0 flex flex-col gap-y-6 md:gap-y-11 relative justify-center items-center md:items-start h-full">
                    <div className="flex flex-col gap-y-5 items-center md:items-start">
                        <div className="text-primary font-semibold text-sm xl:text-22 leading-6">
                            Careers
                        </div>
                        <p className="text-black4 font-semibold text-28 leading-30 xl:text-54 xl:leading-58">
                            {title}
                        </p>
                    </div>

                    <p className="text-gray6 font-normal text-xl leading-34">{description}</p>

                    <Button className="bg-primary2 py-4 px-7 font-semibold text-base mb-16 md:mb-0">
                        Search Careers
                    </Button>

                    <CircleDesktop className="absolute right-[40px] md:right-0" />
                </div>
            </div>

            <div className="md:w-2/4">
                <Image src={CareerImage} alt="Mobile Circle" priority className="mb-8 md:mb-0" />
            </div>

            <CircleDesktop className="md:absolute md:left-[-200px] md:bottom-[-170px] hidden xl:flex" />
        </div>
    );
};

export default Careers;

import { servicesData } from '@/utils/constants';

import CircleDesktop from '@public/svg/Ellipse.svg';
import RightArrow from '@public/svg/right-arrow-icon.svg';

const Services = () => {
    const { title, description, serviceTpe } = servicesData || {};

    return (
        <div className="px-10 md:px-24 w-full gap-y-16 md:gap-16 relative flex mx-auto md:py-[72px] overflow-hidden flex-col md:flex-row">
            <div className="md:w-2/4">
                <div className="md:max-w-xl md:mx-auto md: my-0 flex flex-col gap-y-6 md:gap-y-11 relative">
                    <div className="md:flex md:flex-col md:gap-y-5">
                        <div className="text-primary hidden md:block font-semibold text-xl">
                            Services
                        </div>
                        <div className="font-extrabold text-26 leading-36 xl:text-5xl xl:leading-60 text-center xl:text-left">
                            {title}
                        </div>
                    </div>

                    <p className="font-normal text-base leading-26 text-center xl:text-left">
                        {description}
                    </p>

                    <CircleDesktop className="absolute right-[220px] md:right-0 md:top-[-70px]" />
                </div>
            </div>

            <div className="md:w-2/4">
                <div className="md: flex md: flex-col gap-y-3 md:my-14">
                    {serviceTpe?.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            {item.id > 1 && (
                                <div className="text-primary font-semibold xl:text-base xl:leading-60">
                                    0{item.id}.
                                </div>
                            )}

                            <div className="flex md:items-center justify-between md:w-full">
                                <p className="font-montSerratAlternate font-extrabold text-base">
                                    {item?.label}
                                </p>
                                <RightArrow height={30} width={50} className="cursor-pointer" />
                            </div>

                            <div className="w-full">
                                <div className="relative w-full h-[0.5px] bg-gray3">
                                    <div className="absolute h-full bg-black w-8"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CircleDesktop className="md:absolute md:left-[-100px] md:bottom-[-150px] hidden xl:flex" />
        </div>
    );
};

export default Services;

import RightArrow from '@public/svg/right-arrow-icons.svg';
import OlveraGuide from '@public/png/olvera-guides.png';

const OlveraGuides = () => {
    return (
        <div
            className="md:px-14 w-full gap-y-16 md:gap-16 relative flex mx-auto md:py-[72px] overflow-hidden flex-col-reverse md:flex-row mt-10 mb-5 md:my-0"
            style={{
                backgroundImage: `url(${OlveraGuide.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="md:w-2/4 px-14">
                <div className="md:max-w-xl md:mx-auto md: my-0 flex flex-col gap-y-6 md:gap-y-44 relative justify-center items-center md:items-start h-full">
                    <div className="flex flex-col gap-y-5 items-center md:items-start">
                        <div className="text-3xl text-white">Olvera Guides</div>
                        <div className="md:hidden text-3xl text-white">Careers at Olvera</div>

                        <div className="md:hidden text-3xl text-center text-white">
                            Ollie Restructuring Guide
                        </div>
                    </div>

                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="md:hidden  flex items-center justify-center gap-x-4 md:h-full">
                        <div className="text-white">View More</div>
                        <div className="px-3 py-6 border border-white rounded-full max-w-fit">
                            <RightArrow height={50} width={70} className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:w-2/4 hidden md:block">
                <div className="md:flex items-center justify-center gap-x-4 md:h-full">
                    <div className="text-white">View More</div>
                    <div className="px-3 py-6 border border-white rounded-full max-w-fit">
                        <RightArrow height={50} width={70} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OlveraGuides;

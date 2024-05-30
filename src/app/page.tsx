'use client';

import HeroSection from '@/components/HeroSection';
import AboutOlvera from '@/components/AboutOlvera';
import Services from '@/components/ServicesSection';

import { companyData } from '@/utils/constants';
import Careers from '@/components/Careers';
import VideoSection from '@/components/VideoSection';
import FeedbackCarousel from '@/components/FeedbackCarousel';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutOlvera />
            <div className="flex flex-wrap justify-between px-16 py-7 md:py-12 md:px-[140px]">
                {companyData.map((data) => (
                    <div key={data?.id} className="flex flex-col gap-1 md:gap-7">
                        <p className="text-primary font-extrabold text-5xl leading-76">
                            {data?.value}
                        </p>

                        <p className="text-black1 font-semibold text-xl leading-6">{data?.label}</p>
                    </div>
                ))}
            </div>
            <Services />
            <Careers />
            <VideoSection />
            <FeedbackCarousel
                heading="What our clients say about us"
                leftScrollValue={400}
                rightScrollValue={400}
            />
        </>
    );
}

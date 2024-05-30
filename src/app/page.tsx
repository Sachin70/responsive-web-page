'use client';

import HeroSection from '@/components/HeroSection';
import AboutOlvera from '@/components/AboutOlvera';
import Services from '@/components/ServicesSection';
import Careers from '@/components/Careers';
import VideoSection from '@/components/VideoSection';
import FeedbackCarousel from '@/components/FeedbackCarousel';
import OlveraGuides from '@/components/OlveraGuides';
import CompanyData from '@/components/CompanyDataSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutOlvera />
            <CompanyData />
            <Services />
            <OlveraGuides />
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

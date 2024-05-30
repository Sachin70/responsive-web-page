import Facebook from '@public/svg/facebook.svg';
import Instagram from '@public/svg/instagram.svg';
import LinkedIn from '@public/svg/linkedin.svg';
import HowardsLogo from '@public/svg/howards-logo.svg';
import CommonWealthLogo from '@public/svg/commonwealth-logo.svg';
import ElleryLogo from '@public/svg/ellery-logo.svg';
import GingeranLogo from '@public/svg/gingeran-logo.svg';
import HowardsMobile from '@public/svg/howards-mobile.svg';
import CommonWealthMobile from '@public/svg/commonwealth-mobile.svg';
import ElleryMobile from '@public/svg/ellery-mobile.svg';
import GingeranMobile from '@public/svg/gingeran-mobile.svg';
import Profile from '@public/svg/profile.svg';
import Village from '@public/svg/village.svg';
import Climate from '@public/svg/climate.svg';
import Jaaims from '@public/svg/jaaims.svg';
import Dover from '@public/svg/dover-castle.svg';
import FacebookLogo from '@public/svg/facebook-solid.svg';
import InstagramLogo from '@public/svg/InstagramLogo.svg';
import TwitterLogo from '@public/svg/TwitterLogo.svg';
import LinkedInLogo from '@public/svg/LinkedinLogo.svg';
import OlveraDesktop from '@public/svg/Olvera-First-Logo.svg';
import OlveraCapital from '@public/svg/Olvera-Capital.svg';

export const headerData = [
    { id: 1, label: 'Home', url: '/' },
    { id: 2, label: 'About Us', url: '/about-us' },
    { id: 3, label: 'Our services', url: '/our-services' },
    { id: 4, label: 'Our experience', url: '/our-experience' },
    { id: 5, label: 'Resources', url: '/resources' },
];

export const headerSocialIcons = [
    { id: 1, icon: Facebook, url: '' },
    { id: 2, icon: Instagram, url: '' },
    { id: 3, icon: LinkedIn, url: '' },
];

export const aboutOlveraData = {
    title: 'About Olvera',
    mobileHeading: 'Change is the one true constant in business',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icons: [
        { id: 1, icon: HowardsLogo, mobileIcons: HowardsMobile },
        { id: 2, icon: CommonWealthLogo, mobileIcons: CommonWealthMobile },
        { id: 3, icon: ElleryLogo, mobileIcons: ElleryMobile },
        { id: 4, icon: GingeranLogo, mobileIcons: GingeranMobile },
    ],
};

export const companyData = [
    { id: 1, label: 'Projects', value: '150+' },
    { id: 2, label: 'Clients', value: '80+' },
    { id: 3, label: 'Professionals', value: '200+' },
    { id: 4, label: 'Clients', value: '97%' },
];

export const servicesData = {
    title: 'Our services that can help your business',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    serviceTpe: [
        { id: 1, label: 'Sustainability' },
        { id: 2, label: 'Small Business' },
        { id: 3, label: 'Forensic Services' },
        { id: 4, label: 'Risk Management' },
        { id: 5, label: 'CFO Advisory' },
    ],
};

export const clientFeedbackData = [
    {
        id: 1,
        clientName: 'Aaron Boby',
        date: '2 November 2021',
        profile: Profile,
        feedback:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    },
    {
        id: 2,
        clientName: 'Daren Axell',
        date: '2 November 2021',
        profile: Profile,
        feedback:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    },
    {
        id: 3,
        clientName: 'Dion Channing',
        date: '22 August 2021',
        profile: Profile,
        feedback:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    },
    {
        id: 4,
        clientName: 'Jon Doe',
        date: '22 August 2021',
        profile: Profile,
        feedback:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    },
    {
        id: 5,
        clientName: 'Christian',
        date: '22 August 2022',
        profile: Profile,
        feedback:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    },
    {
        id: 6,
        clientName: 'Sachin sharma',
        date: '22 August 2024',
        profile: Profile,
        feedback:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    },
];

export const CareerData = {
    title: 'Careers at Olvera',
    description:
        'Navigate change, develop on-demand skills. Your turnaround journey starts with Olvera.',
};

export const FooterData = {
    title: 'We are open and accepting to all. Come work with us',
    description:
        'Experts teach you everything from the comfort of your own home. Improve your career today by enrolling in excellent courses at affordable prices.',
    desktopIcons: [
        { id: 1, icon: OlveraDesktop },
        { id: 2, icon: OlveraCapital },
    ],
    mobileIcons: [
        { id: 1, icon: Village },
        { id: 2, icon: Climate },
        { id: 3, icon: Jaaims },
        { id: 4, icon: Dover },
    ],
    message: 'Turning Uncertainty Into Your Advantage',
    resources: [
        { id: 1, label: 'Home', url: '' },
        { id: 2, label: 'Articles', url: '' },
        { id: 3, label: 'Videos & Guides', url: '' },
        { id: 4, label: 'About Us', url: '' },
    ],
    careers: [
        { id: 1, label: 'Olevera academy', url: '' },
        { id: 2, label: 'Privacy Policy', url: '' },
        { id: 3, label: 'Cookies', url: '' },
    ],
    companyDetails: {
        themeMessage: 'Liability Limited By A Scheme Approved Under Professional Services Scheme',
        phone: '(64) 09 973 4905',
        email: 'ezibuyenquiries@olveraadvisors.com',
        Website: 'olvera.co.nz/ezibuy',
    },
    copyRight: '©2023 olevra advisors. All rights reserved',
    socialIcons: [
        { id: 1, icon: FacebookLogo },
        { id: 2, icon: InstagramLogo },
        { id: 3, icon: TwitterLogo },
        { id: 4, icon: LinkedInLogo },
    ],
};

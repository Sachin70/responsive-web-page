'use client';

import Button from '@/components/Button';

import { headerData, headerSocialIcons } from '@/utils/constants';

import Logo from '@public/svg/olvera-logo-black.svg';
import Search from '@public/svg/search.svg';
import HamburgerMenu from '@public/svg/menu.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import from next/navigation

const Header = () => {
    const pathname = usePathname(); // Use usePathname
    console.log(pathname, 'router');

    return (
        <header className="px-4 py-7 xl:py-10 xl:px-24">
            <div className="flex items-center justify-between ">
                <Logo className="cursor-pointer" />

                <div className="flex gap-4 xl:hidden">
                    <Search className="cursor-pointer" />
                    <HamburgerMenu className="cursor-pointer" />
                </div>

                <div className="hidden xl:flex xl:gap-10 xl:items-center">
                    {headerData.map((data) => (
                        <Link key={data?.id} href={data?.url}>
                            <p
                                className={`font-extrabold text-base cursor-pointer  hover:opacity-70 ${
                                    pathname === data?.url
                                        ? 'text-black1 border-b-2 border-primary'
                                        : ' text-secondary'
                                }`}
                            >
                                {data?.label}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="hidden xl:flex items-center gap-6">
                    <Button className="py-[10px] px-4">
                        <span className="text-white text-sm font-semibold">CONTACT US</span>
                    </Button>

                    <div className="flex items-center gap-4">
                        {headerSocialIcons.map((icons) => {
                            const Icon = icons.icon;

                            return <Icon key={icons.id} className="cursor-pointer" />;
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

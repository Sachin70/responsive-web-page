import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './public/**/*.{ts,js,svg,png}',
    ],
    theme: {
        extend: {
            fontFamily: {
                montSerratAlternate: ['Montserrat Alternates'],
                montserrat: ['Montserrat'],
            },
            backgroundImage: {
                'linear-gradient1':
                    'linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, rgba(18, 27, 33, 0.9) 100%)',
                'linear-gradient2':
                    'linear-gradient(90.45deg, rgba(194, 39, 142, 0.51) 0.36%, rgba(15, 15, 15, 0) 99.59%)',
            },
            fontSize: {
                42: '42px',
                40: '40px',
                26: '26px',
                64: '64px',
                10: '10px',
                22: '22px',
                54: '54px',
                28: '28px',
            },
            lineHeight: {
                94: '94px',
                54: '54px',
                52: '52px',
                30: '30px',
                36: '36px',
                72: '72px',
                76: '76px',
                26: '26px',
                20: '20px',
                70: '70px',
                14: '14px',
                60: '60px',
                58: '58px',
                34: '34px',
            },
            colors: {
                primary: '#C2278E',
                primary2: '#FF74D0',
                secondary: '#292929BF',
                black1: '#1C1C1C',
                black2: ' #292929',
                black3: '#1E5068',
                black4: '#373737',
                gray1: '#5E84A1',
                gray2: '#C5E9FB',
                gray3: '#BCBCBC',
                gray4: '#E0E0E0',
                gray5: '#7C7C7C',
                gray6: '#3F3E3E',
                info: '#71C9FF',
                success: '#76CA66',
                warning: '#FBC756',
                error: '#BA0000',
            },
            boxShadow: {
                shadow1: '0px 20px 40px -40px #DBE3ED66',
            },
        },
    },
    plugins: [],
};
export default config;

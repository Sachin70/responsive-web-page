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
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            colors: {
                primary: '#C2278E',
                secondary: '#292929BF',
                black1: '#1C1C1C',
                info: '#71C9FF',
                success: '#76CA66',
                warning: '#FBC756',
                error: '#BA0000',
            },
        },
    },
    plugins: [],
};
export default config;

import React, { ReactNode, useState } from 'react';
import cx from 'classnames';

import Loader from '@/components/Loader';

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    /**
     * Prop for additional class names
     */
    className?: string;

    /**
     * Prop for button children
     */
    children?: ReactNode;

    /**
     * Function to be called when button is clicked
     */
    onClick?: () => Promise<void> | void; // Accepts async onClick handler

    /**
     * Time duration for the loader to be displayed (in milliseconds)
     */
    loaderDuration?: number;
};

const Button = (props: ButtonProps) => {
    const { className, children, onClick, loaderDuration = 10000, ...rest } = props;
    const [loading, setLoading] = useState<boolean>(false);

    const handleClick = async () => {
        if (onClick) {
            setLoading(true);
            try {
                // Introduce a delay before executing the button action
                await new Promise((resolve) => setTimeout(resolve, loaderDuration));
                await Promise.resolve(onClick()); // Ensure onClick is executed as a Promise
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <button
            type="button"
            className={cx(
                'bg-primary flex justify-center items-center py-5 px-10 rounded-full hover:opacity-90 relative',
                className,
            )}
            onClick={handleClick}
            disabled={loading}
            {...rest}
        >
            {loading ? <Loader loading={loading} /> : children}
        </button>
    );
};

/**
*This component provides a way to render button component with various styling options 
*@example
<Button className="px-4 py-6">click me</Button>
*/

export default Button;

'use client';

import { useEffect, useRef, useState, memo } from 'react';
import cx from 'classnames';

import FeedbackCard from '@/components/FeedbackCard';

import { clientFeedbackData } from '@/utils/constants';
import useScreenSize from '@/hooks/useScreen';

import RightArrow from '@public/svg/right-arrow.svg';
import LeftArrowMobile from '@public/svg/left-arrow-mobile.svg';

export enum ScrollDirection {
    LEFT = 'left',
    RIGHT = 'right',
}

interface IProductCarouselProps {
    heading: string;
    leftScrollValue: number;
    rightScrollValue: number;
    className?: string;
}

const FeedbackCarousel = (props: IProductCarouselProps) => {
    const { heading, leftScrollValue, rightScrollValue, className } = props;
    const { isMobile } = useScreenSize();

    const [leftButtonVisible, setLeftButtonVisible] = useState<boolean>(false);
    const [rightButtonVisible, setRightButtonVisible] = useState<boolean>(true);

    const scrollableRef = useRef<HTMLDivElement>(null);

    const onScroll = (direction: ScrollDirection) => () => {
        if (scrollableRef.current) {
            const scrollValue =
                direction === ScrollDirection.LEFT ? -leftScrollValue : rightScrollValue;

            scrollableRef.current.scrollBy({
                left: scrollValue,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const scrollableContainer = scrollableRef.current;

        if (scrollableContainer) {
            const handleScroll = () => {
                const { scrollLeft, scrollWidth, clientWidth } = scrollableContainer;

                setLeftButtonVisible(scrollLeft > 0);
                setRightButtonVisible(scrollLeft < scrollWidth - clientWidth - 1);
            };

            scrollableContainer.addEventListener('scroll', handleScroll);

            return () => {
                scrollableContainer.removeEventListener('scroll', handleScroll);
            };
        }

        return undefined;
    }, []);

    return (
        <div className={cx('px-4 py-11 xl:pt-0 xl:mx-24 xl:pb-24', className)}>
            <p className="text-center font-bold text-28 leading-10 xl:text-5xl xl:mb-24 mb-10">
                {heading}
            </p>

            <div
                className={cx('flex gap-10 items-center overflow-auto w-full hide_scrollbar')}
                ref={scrollableRef}
            >
                <div
                    className={cx('absolute left-0 z-50', { hidden: !leftButtonVisible })}
                    onClick={onScroll(ScrollDirection.LEFT)}
                    tabIndex={0}
                    role="button"
                    onKeyDown={onScroll(ScrollDirection.LEFT)}
                >
                    {isMobile ? <LeftArrowMobile /> : <RightArrow className="rotate-180" />}
                </div>

                {clientFeedbackData?.length ? (
                    clientFeedbackData?.map((item) => (
                        <FeedbackCard
                            key={item?.id}
                            clientName={item?.clientName}
                            date={item?.date}
                            feedback={item?.feedback}
                            clientImage={item?.profile}
                        />
                    ))
                ) : (
                    <p>No Data Found</p>
                )}

                {clientFeedbackData?.length > 4 && (
                    <div
                        className={cx('absolute right-0', { hidden: !rightButtonVisible })}
                        onClick={onScroll(ScrollDirection.RIGHT)}
                        tabIndex={0}
                        role="button"
                        onKeyDown={onScroll(ScrollDirection.RIGHT)}
                    >
                        {isMobile ? <LeftArrowMobile className="rotate-180" /> : <RightArrow />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(FeedbackCarousel);

import Image from 'next/image';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import posterImage from '@public/png/poster-image-url.png';
import PlayIcon from '@public/svg/play-icon.svg';

const ReactPlayer = dynamic(() => import('react-player'), {
    ssr: false, // Disable server-side rendering for this component
});

const VideoSection = () => {
    const [play, setPlay] = useState<boolean>(false);

    const onStart = () => {
        setPlay(true);
    };

    const onPlay = () => {
        setPlay(true);
    };

    const onClick = () => {
        setPlay(true);
    };

    return (
        <section className="relative">
            <ReactPlayer
                url="videos/MG.mp4"
                playsinline
                controls
                width="100%"
                height="100%"
                playIcon={
                    <button
                        type="button"
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <PlayIcon className="h-16 w-16 md:h-52 md:w-52" />
                    </button>
                }
                playing={play}
                light={
                    <div className="h-screen w-screen">
                        <Image
                            src={posterImage}
                            alt="Poster Image"
                            layout="fill"
                            className="absolute"
                        />
                        <div className="absolute inset-0 inset-y-10 bg-linear-gradient2" />
                    </div>
                }
                onStart={onStart}
                onPlay={onPlay}
                onClickPreview={onClick}
            />
        </section>
    );
};

export default VideoSection;

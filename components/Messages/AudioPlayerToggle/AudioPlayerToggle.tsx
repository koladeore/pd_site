"use client"
import React, { useState } from 'react';
import { SlEarphones } from 'react-icons/sl';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface AudioPlayerToggleProps {
    audio: {
        file: string;
    };
}
const AudioPlayerToggle = ({ audio }: AudioPlayerToggleProps) => {
    const [isAudioVisible, setIsAudioVisible] = useState(false);

    const toggleAudioVisibility = () => {
        setIsAudioVisible(!isAudioVisible);
    };

    return (
        <div className="">
            <button onClick={toggleAudioVisibility}>
                <SlEarphones className="hover:text-pink-400"/>
            </button>

            {isAudioVisible && (
                <div className="ml-[-100px] p-4">
                    <div className="w-96 h-16 absolute pl-4">
                        <AudioPlayer
                            autoPlay
                            src={audio.file}
                            layout="horizontal-reverse"
                            className=''
                        />
                    </div>
                </div>

            )}
        </div>
    );
};

export default AudioPlayerToggle;
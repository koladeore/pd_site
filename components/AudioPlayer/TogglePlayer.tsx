"use client"
import React, { useState } from 'react';
import { SlEarphones } from 'react-icons/sl';

const AudioPlayerToggle = ({ audio }: any) => {
    const [isAudioVisible, setIsAudioVisible] = useState(false);

    const toggleAudioVisibility = () => {
        setIsAudioVisible(!isAudioVisible);
    };

    return (
        <div className="">
            <button onClick={toggleAudioVisibility}>
                <SlEarphones />
            </button>

            {isAudioVisible && (
                <div className="ml-[-50px]">
                    <div className="max-w-md mx-auto rounded-md absolute">
                        <audio controls className="w-64 bg-pink-500 text-white rounded-md">
                            <source src={audio.file} type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
                
            )}
        </div>
    );
};

export default AudioPlayerToggle;

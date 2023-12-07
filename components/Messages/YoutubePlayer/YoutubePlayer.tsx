"use client"
import React, { useState } from 'react';
import { BsCameraVideo } from 'react-icons/bs';
import Modal from 'react-modal';

interface YoutubePlayerProps {
    audio: {
        youtubeUrl: string;
    };
    iconSize?: string;
}

const YoutubePlayer = ({ audio, iconSize = '1rem' }: YoutubePlayerProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const handleOpenModal = () => {
        setModalIsOpen(true);
        setLoading(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };
    const handleVideoLoad = () => {
        setLoading(false);
    };

    return (
        <div>
            <div className="flex gap-4 hover:text-pink-400 cursor-pointer" onClick={handleOpenModal}>
                <BsCameraVideo
                    className="hover:text-pink-400 cursor-pointer"
                    onClick={handleOpenModal}
                    style={{ fontSize: iconSize }}
                />
                {iconSize !== '1rem' ? <div>Watch</div> : "" }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="YouTube Video Modal"
                className="fixed inset-0 flex items-center justify-center md:w-[560px] w-full pr-4 pl-4 h-[400px] md:ml-[350px] mt-[200px] md:mr-4"
                overlayClassName="fixed inset-0 bg-black opacity-95"
            >
                {isLoading ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="animate-spin rounded-full border-t-4 border-gray-300 border-solid h-12 w-12"></div>
                    </div>
                ) : null}
                <div className={`w-full h-full flex justify-center items-center ${isLoading ? 'hidden' : ''}`}>
                    <iframe
                        onLoad={handleVideoLoad}
                        className="w-full h-full border-none"
                        src={audio.youtubeUrl}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
        </div>
    );
};

export default YoutubePlayer;

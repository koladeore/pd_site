"use client"
import React, { useState } from 'react';
import { BsCameraVideo } from 'react-icons/bs';
import Modal from 'react-modal';

interface YoutubePlayerProps {
    audio: {
        youtubeUrl: string;
    };
}

const YoutubePlayer = ({ audio }: YoutubePlayerProps) => {
    console.log('audioYoutube',audio.youtubeUrl)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div>
            <BsCameraVideo
                className="hover:text-pink-400 cursor-pointer"
                onClick={handleOpenModal}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="YouTube Video Modal"
                className="fixed inset-0 flex items-center justify-center md:w-[560px] w-[400px] ml-[50px] h-[315px] md:ml-[350px] mt-[200px]"
                overlayClassName="fixed inset-0 bg-black opacity-95"
            >
                <div className="w-full h-full flex justify-center items-center">
                    <iframe
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

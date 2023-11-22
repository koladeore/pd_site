"use client"
import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface AudioPlayerComponentProps {
    audioFile: string;
}
const AudioPlayerComponent = ({ audioFile }: AudioPlayerComponentProps) => {
  return (
    <div className=''>
      <AudioPlayer
        autoPlay
        src={audioFile}
      />
    </div>
  )
}

export default AudioPlayerComponent
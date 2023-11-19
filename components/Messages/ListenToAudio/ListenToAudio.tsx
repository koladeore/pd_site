import Link from 'next/link';
import React from 'react';
import { SlEarphones } from 'react-icons/sl';

const ListenToAudio = ({ audio }: any) => {
    return (
        <div>
            <Link href={`/audio/${audio.slug.current}`}>
                <SlEarphones className="hover:text-pink-400"/>
            </Link>
        </div>
    );
};

export default ListenToAudio;

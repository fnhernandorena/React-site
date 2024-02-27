import React, { useState, useEffect } from 'react';

interface MediaResponse {
    title: string;
    url: string;
    explanation: string;
    media_type: string;
}

const Example03Page: React.FC = () => {
    const [dayImage, setDayImage] = useState<MediaResponse>({
        title: '',
        url: '',
        explanation: '',
        media_type: ''
    });

    useEffect(() => {
        const getMedia = async () => {
            try {
                const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA');
                const data: MediaResponse = await res.json();
                setDayImage(data);
            } catch (error) {
                console.error('Error fetching media from NASA API:', error);
            }
        };

        getMedia();
    }, []);

    const renderMedia = () => {
        if (dayImage.media_type === 'image') {
            return <img className="my-6" src={dayImage.url} alt="Nasa Day Image" />;
        } else if (dayImage.media_type === 'video') {
            return <a href={dayImage.url}>The image of the day is a video, see this!</a>;
        } else {
            return <p className='text-3xl'>Loading...</p>;
        }
    };

    return (
        <div className="mb-32">
            <h3 className="text-center bg-gray-700 p-4 rounded-2xl m-2 text-3xl">{dayImage.title}</h3>
            {renderMedia()}
            <p className="text-2xl">{dayImage.explanation}</p>
        </div>
    );
};

export default Example03Page;

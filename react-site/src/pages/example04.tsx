import React, { useState, useEffect } from 'react';

interface ImageData {
  date: string;
  image: string;
  centroid_coordinates: {
    lat: number;
    lon: number;
  };
  caption: string;
}

const Example04Page: React.FC = () => {
  const [dayImages, setDayImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA');
        const dayImagesData: ImageData[] = await res.json();
        setDayImages(dayImagesData);
      } catch (error) {
        console.error('Error fetching NASA API images:', error);
      }
    };

    fetchImages();
  }, []);

  const getImageUrl = (image: ImageData): string => {
    const dateString = image.date;
    const dateParts = dateString.split(' ');
    const date = dateParts[0].split('-');
    return `https://api.nasa.gov/EPIC/archive/natural/${date[0]}/${date[1]}/${date[2]}/png/${image.image}.png?api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA`;
  };

  return (
    <div>
      {dayImages.map((image, index) => (
        <div key={index}>
          <img src={getImageUrl(image)} className="rounded-3xl" alt={`NASA policromatic Image ${index}`} />
          <p className="my-4">Coordinates: Latitude: {image.centroid_coordinates.lat}, Longitude: {image.centroid_coordinates.lon}</p>
          <p className="my-4 border-b-2 border-gray-500 mb-72">{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Example04Page;

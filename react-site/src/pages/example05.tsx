import React, { useState } from 'react';

interface MarsPhoto {
  id: string;
  img_src: string;
  earth_date: string;
}

const Example05Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);

  const searchPhotos = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${searchTerm}&page=1&api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA`);
      const data = await res.json();
      setPhotos(data.photos);
    } catch (error) {
      console.error('Error fetching Mars photos:', error);
    }
  };

  return (
    <div className='w-full'>
      <form className="flex gap-5 mb-10 w-full" onSubmit={searchPhotos}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Write the sun number"
          className="h-10 block w-1/2 text-sm font-medium rounded-2xl text-gray-900 pl-2"
        />
        <button type="submit" className="bg-gray-700 p-2 rounded-2xl hover:bg-sky-600 duration-300">Search</button>
      </form>

      <ul>
        {photos.map((image, index) => (
          <li key={index}>
            <article>
              <img
                src={image.img_src}
                alt={image.id}
                className="aspect-[11/16] w-full h-auto object-cover rounded-lg"
              />
              <h2 className="text-white flex justify-between items-center">{image.earth_date}</h2>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Example05Page;

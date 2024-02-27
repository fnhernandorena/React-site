import React, { useState } from 'react';
import axios from 'axios';

interface Fact {
  fact: string;
}

const Example01Page: React.FC = () => {
  const [fact, setFact] = useState<Fact | null>(null);

  const getFact = async () => {
    try {
      const response = await axios.get<Fact>('https://catfact.ninja/fact');
      setFact(response.data);
    } catch (error) {
      console.error('Error at get Cat Fact', error);
    }
  };

  return (
    <div className="flex flex-col items-center mb-32">
      <button
        onClick={getFact}
        className="bg-gray-700 hover:bg-sky-500 text-white font-bold py-4 px-8 rounded-xl mb-10"
      >
        Get Cat Fact!
      </button>
      {fact ? (
        <p className="text-3xl text-yellow-400">{fact.fact}</p>
      ) : (
        <p className="text-3xl text-red-500">Click to get cat fact!</p>
      )}
    </div>
  );
};

export default Example01Page;

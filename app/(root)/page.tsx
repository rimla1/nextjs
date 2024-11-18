import Image from 'next/image';
import { Test } from '../components/test';

const Home = async () => {
  const response = await fetch('https://api.deezer.com/search?q=eminem');
  if (!response.ok) throw new Error('Failed to fetch data');
  const songs = await response.json();

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {songs?.data?.map((song: { id: number; title: string }) => (
        <div
          key={song.id}
          className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
        >
          <h3 className="text-lg font-bold truncate">{song.title}</h3>
          <p className="text-sm text-gray-400">ID: {song.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;


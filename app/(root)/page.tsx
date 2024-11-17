import Image from 'next/image';
import { Test } from '../components/test';


export default function Home() {
  console.log('Simple console log from SERVER component!');

  return (
    <>
      <h1 className='text-3xl'>Hello from Next</h1>
      <Test />
    </>
  );
}

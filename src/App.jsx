import { useState } from 'react';
import './App.css';
import {requestToGroqAI} from './aigroq/groq';


function App() {
  const [data, setData] = useState('');

  const handleSubmit = async () => {
    const aiGroq = await requestToGroqAI(content.value);
    setData(aiGroq);
  }
 return (
   <main className='flex min-h-[80vh] flex-col items-center justify-center'>
    <h1 className='font-bold text-4xl text-indigo-500'>ARDIANA ABDUL GUMELAR | GROQ AI</h1>
    <form action="" className='mt-2'>
      <input type="text" placeholder='Ketik permintaan' id="content" className='border rounded border-indigo-500 px-2 py-1' />
      <button type="button" onClick={handleSubmit} className='rounded bg-indigo-500 px-2 py-1 ms-2 font-bold'>Kirim</button>
    </form>
    <div v-if="data">
      <p className='mt-2'>{data}</p>
    </div>
   </main>
 )
}

export default App

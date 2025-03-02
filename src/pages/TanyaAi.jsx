import { useState } from "react";
import '../App.css';
import { requestToGroqAI } from "../aigroq/groq";

const TanyaAi = () => {
    const [data, setData] = useState('');

    const handleSubmit = async () => {
      const aiGroq = await requestToGroqAI(content.value);
      setData(aiGroq);
    }
    const home = () => {
      window.location.href = "/";
    }
    return (
      <main className='flex  flex-col items-center justify-center'>
        <div className='flex items-center justify-start w-full'>
          <button type="button" onClick={home} className='rounded font-semibold hover:bg-violet-50 hover:text-zinc-950 bg-indigo-500 px-2 py-1'>Home</button>
        </div>
        <div className='flex flex-col items-center justify-center w-full pt-10'>
          <h1 className='font-bold text-4xl text-indigo-500'>ARDIANA ABDUL GUMELAR | GROQ AI</h1>
          <form action="" className='mt-2'>
            <textarea type="text" placeholder='Ketik permintaan' id="content" className='border rounded w-[400px] h-[50px] border-indigo-500 p-2' />
          </form>
            <button type="button" onClick={handleSubmit} className='rounded bg-indigo-500 px-2 py-1 ms-2 font-bold'>Kirim</button>
          <div v-if="data">
            <p className='mt-2'>{data}</p>
          </div>
        </div>
       </main>
    )
}

export default TanyaAi
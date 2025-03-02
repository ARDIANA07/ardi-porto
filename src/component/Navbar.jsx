import React from "react"


const Navbar = () => {
    const tanyaai = () => {
        window.location.href = "/tanyaai";
    }
    return (
        <div className="w-full bg-slate-400 flex items-center justify-between p-4">
             <h1 className="text-lg font-semibold">Kasir App</h1>
             <button type="button" onClick={tanyaai} className=" rounded bg-indigo-500 hover:text-zinc-950 hover:bg-indigo-200 px-2 py-1 ms-2 font-bold">Tanya AI</button>
        </div>
    )
}

export default Navbar

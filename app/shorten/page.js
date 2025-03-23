"use client"

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [link, setLink] = useState('');
  const [generated, setGenerated] = useState('')

  const submit = () => {
    const genUrl = `http://localhost:3000/${shortUrl}`
    setLink(genUrl)
    console.log(url,shortUrl)
    setGenerated(genUrl)
    axios.post('/api/shorturl', {
      url: url,
      shortUrl: shortUrl
    })
   .then((response) => {
    console.log(response)
  })
}

  return (
    <main className="w-[100vw] h-[100vh] py-30 ">
      <div className="flex flex-col items-center justify-center bg-amber-950 py-5 w-[80vw] mx-auto rounded-2xl text-white bg-blue-200/20 ">
      <h1 className="font-bold text-2xl my-5">Url Shortner</h1>
      <section className="flex flex-col items-center gap-2.5 py-4 w-[100%] mx-auto rounded-2xl outline-none border-none">

        <input 
        className="bg-blue-200/20 rounded-xl px-4 py-2 w-[80%]"
        type="text" 
        placeholder="Enter Url ex. https://www.google.com" 
        onChange={(e) => {setUrl(e.target.value)}} />

        <input 
        className="bg-blue-200/20 rounded-xl px-4 py-2 w-[80%]"
        type="text" 
        placeholder="Enter Name ex. nomi or google"
        onChange={(e) => {setShortUrl(e.target.value)}} />

        <button 
        onClick={submit}
        className="bg-blue-400 font-bold rounded-xl px-4 py-2 my-2 text-white" >Shorten</button>

{generated  && (
  <>
    <p className="font-bold">Your Short Url:</p>
    <code><a target="_blank" rel="noopener noreferrer" href={generated}>{generated}</a></code>
  </>
)}


      </section>
    </div>
    </main>
  );
};

export default Shorten;

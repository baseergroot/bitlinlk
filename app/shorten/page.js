"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [link, setLink] = useState("");
  const [generated, setGenerated] = useState("");
  const [urlError, setUrlError] = useState("");
  const [nameError, setNameError] = useState("");

  const submit = () => {
    const genUrl = `${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`;
    console.log(genUrl);
    setLink(genUrl);
    console.log(url, shortUrl);
    setGenerated(genUrl);                
    axios
      .post("/api/shorturl", {
        url: url,
        shortUrl: shortUrl,
      })
      .then((response) => {
        const {success, message} = response.data
        if (success) {
          // Set success message
          setNameError("");
        } else {
          console.log("error msg is: ", message)
          setNameError(message); // Set error message from the server
        }
        
      })
      .catch((error) => {
        console.log({data});
        setNameError(error.message);
      });
  };

  return (
    <main className="w-[100vw]  h-[100vh] py-20 ">
      <h1 className="text-center text-3xl font-bold text-white bg-blue-200/20 py-5 rounded-xl w-[80%] mx-auto">
        Grootly
      </h1>
      <div className="flex flex-col items-center justify-center my-20 py-5 w-[80vw]  mx-auto rounded-2xl text-white bg-blue-200/20 ">
        <h2 className="font-bold text-2xl my-5">Url Shortner</h2>
        <section className="flex flex-col items-center gap-2.5 py-4 w-[100%] mx-auto rounded-2xl outline-none border-none">
          <input
            className="bg-blue-200/20 rounded-xl px-4 py-2 w-[80%]"
            type="text"
            placeholder="Enter Url ex. https://www.google.com"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />

          <div className="text-red-500">{urlError}</div>

          <input
            className="bg-blue-200/20 rounded-xl px-4 py-2 w-[80%]"
            type="text"
            placeholder="Enter Name ex. nomi or google"
            onChange={(e) => {
              setShortUrl(e.target.value);
            }}
          />
          <div className="text-red-500">{nameError}</div>

          <button
            onClick={submit}
            className="bg-blue-400 font-bold rounded-xl px-4 py-2 my-2 text-white"
          >
            Shorten
          </button>

          {generated && (
            <>
              <p className="font-bold mt-2">Your Short Url:</p>
              <code className="text-center">
                <a target="_blank" rel="noopener noreferrer" href={generated} className="">
                  {generated}
                </a>
              </code>
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default Shorten;

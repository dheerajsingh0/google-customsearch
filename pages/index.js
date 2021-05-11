import Head from 'next/head';
import Avatar from '../components/Avatar';
import{MicrophoneIcon,ViewGridIcon} from '@heroicons/react/solid';
import Image from "next/image";
import {SearchIcon} from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react';
import {useRouter} from "next/router";
export default function Home() {
  const router=useRouter();
  const searchInputRef=useRef(null);
  const search=(e)=>{
    e.preventDefault();
    const term= searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);
   
};
  return (

    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex  space-x-4 items-center">
          <a href="https://about.google" className="link">About</a>
          <a href="https://store.google.com/in/?hl=en-GB" className="link">Store</a>
          
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center ">
        <a href="https://mail.google.com/mail/" className="link">Gmail</a>
          <a href="https://photos.google.com/?pageId=none" className="link">Image</a>
          {/* Icons */}
          <ViewGridIcon className="h-10 w-10 p-2 animate-spin rounded-full cursor-pointer hover:bg-gray-100 hover:animate-none"/>
          <Avatar  url="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/132428238_3108656229458035_825116709791161565_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=SzM_WgoLlIsAX9EsUtN&_nc_ht=scontent.fblr8-1.fna&tp=27&oh=de105c7a880365f6d4028e2630855c68&oe=60C18101"/>
        </div>
      </header>
      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5" >
      <Image 
      src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      height={100}
      width={300}

      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500"/>
        <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow text-gray-900 font-bold" name="" id=""/>
        <MicrophoneIcon className="h-5"/>
        
      </div>
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
      sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn ">Google Search </button>
           <button onClick={search} className="btn ">I'm Feeling Lucky</button>
        </div>
      </form>
      {/* footer */}
      <Footer/>
    </div>
  )
}

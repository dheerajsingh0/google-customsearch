import Head from 'next/head'
import Avatar from '../components/avatar'
import{MicrophoneIcon,ViewGridIcon} from '@heroicons/react/solid'
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
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center ">
          <p className="link">Gmail</p>
          <p className="link">Image</p>
          {/* Icons */}
          <ViewGridIcon className="h-10 w-10 p-2 animate-spin rounded-full cursor-pointer hover:bg-gray-100"/>
          <Avatar  url="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.6435-9/132428238_3108656229458035_825116709791161565_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=2qldBuuj4CcAX8qw3B4&_nc_ht=scontent.fblr8-1.fna&oh=6d4b3c6f926aad0f4555a7e44f408f97&oe=6095713E"/>
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

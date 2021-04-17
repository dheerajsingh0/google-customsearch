import {useRouter} from "next/router"
import Image from "next/image";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
const Header = () => {
    const router =useRouter();
    const searchInputRef=useRef(null);
    const search=e=>{
        e.preventDefault();
        const term =searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    };
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image
            src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            onClick={()=>router.push('/')}
            className="cursor-pointer"
            />
            <form className="flex flex-grow h-8 px-6 py-3 ml-10 mr-5 border border-gray-200
            rounded-full shadow-lg max-w-3xl items-center">
               <input ref={searchInputRef}
               defaultValue={router.query.term} 
               className="djinsearch"  type="text"/>
               <XIcon className="h-5 sm:mr-3 text-gray-500 cursor-pointer
                 transition duration-100 transform hover:scale-110 "
               onClick={()=>{searchInputRef.current.value=""}}/>
               <MicrophoneIcon className=" mr-3 h-5 hidden sm:inline-flex  
               border-l-2 pl-4 border-gray-300" />
               <SearchIcon className="h-5 text-blue-500 hidden sm:inline-flex" onClick="{search}" />
                <button hidden type="submit" onClick={search}>Search</button>
            
            </form>
            <Avatar className="ml-auto" url="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.6435-9/132428238_3108656229458035_825116709791161565_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=2qldBuuj4CcAX8qw3B4&_nc_ht=scontent.fblr8-1.fna&oh=6d4b3c6f926aad0f4555a7e44f408f97&oe=6095713E"/>
            </div>
            {/*Header option */}
            <HeaderOptions/>
        </header>
    )
}

export default Header

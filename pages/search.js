import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import {API_KEY, CONTEXT_KEY} from '../keys';
import Response from "../Response";

function search({results}) {
    const router =useRouter();
   // console.log(results);
    return (
        <div>
         <Head>
             <title>{router.query.term}-Google Search</title>
             <link rel="icon" href="/favicon.ico"/>
         </Head>   
         <Header/>
         <SearchResults results={results}/>
        </div>
    );
}

export default search


export async function getServerSideProps(context){
    const useDummyData=false;
    const startIndex =context.query.start || "0";
    console.log(startIndex);
    const data =useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(response=> response.json());

    //console.log(data);
   //after the server has rendered .. pass the result to the cleint
   return{
       props:{
           results:data,
       }
   }
}


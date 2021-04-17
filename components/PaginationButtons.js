import { useRouter } from 'next/router';
import Link from 'next/link';
import {ChevroneLeftIcon,ChevronRightIcon} from "@heroicons/react/solid";

function PaginationButtons() {
    const router =useRouter();
    const startIndex=Number(router.query.start)||0;
    return (
        <div className="flex  justify-between text-blue-700 mb-10 mx-w-lg">
            {startIndex >=10 &&(
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                <div className="flex flow-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevroneLeftIcon className="h-5"/>
                    <p>Previous</p>
                </div>
                </Link>
            )}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
            <div className="flex flow-grow flex-col items-center cursor-pointer hover:underline" >
                <ChevronRightIcon className="h-5"/>
                <p>Next</p>
            </div>
            </Link>
        </div>
    )
}

export default PaginationButtons

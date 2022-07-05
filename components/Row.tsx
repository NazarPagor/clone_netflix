import {Movie} from "../types/typings";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";
import Thumbnail from "./Thumbnail";
import {useRef, useState} from "react";


interface Props {
    title: string,
    movies: Movie[],
    /*| DocumentData  for firebase*/
}

const Row = ({title, movies}: Props) => {

    const rowRef = useRef<HTMLDivElement>(null);
    const [isMove, setIsMove] = useState(false);


    const handleClick = (direction: string) => {
        setIsMove(true);
        if (rowRef.current) {
            const {scrollLeft, clientWidth} = rowRef.current;
            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;
                rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"});
        }
    }

    return (
        <div className="h-60 space-y-0.5 md:space-y-2">
            <div className="group relative md:ml-2">
                <h2 className="w-56 cursor-pointer text-sm font-semibold transition duration-200 text-[#e5e5e5] md:text-2xl hover:text-white">
                    {title}
                </h2>
                <div>
                    <ChevronLeftIcon className={`w-9 h-9 absolute top-0 bottom-0 left-2 z-40 m-auto cursor-pointer
                opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMove && 'invisible'}`}
                                     onClick={() => handleClick('left')}
                    />

                    <div ref={rowRef}
                         className="flex items-center space-x-0.5 overflow-hidden overflow-y-hidden md:space-x-3 md:p-2">
                        {movies.map((movie) => (
                            <Thumbnail key={movie.id} movie={movie}/>
                        ))}
                    </div>

                    <ChevronRightIcon className="w-9 h-9 absolute top-0 right-2 bottom-0  z-40 m-auto cursor-pointer
                opacity-0 transition hover:scale-125 group-hover:opacity-100"
                                      onClick={() => handleClick('right')}
                    />
                </div>
            </div>
        </div>

    );
};

export default Row;
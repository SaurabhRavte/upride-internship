import { usePagination, DOTS } from "../usePagination";

export default function Pagination(props){
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if(currentPage === 0 || paginationRange.length < 2){
        return null;
    }
    
    const onNext = () => {
        onPageChange(currentPage + 1);
    }

    const onPrev = () => {
        onPageChange(currentPage - 1);
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className={`flex list-none items-center select-none ${className}`}>
            <li className={`px-3 h-8 text-center my-auto mx-1 flex text-black items-center justify-center rounded-full text-sm hover:bg-[#FB8085] cursor-pointer ${currentPage === 1 ? 'pointer-events-none' : ''}`}
            onClick={onPrev}
            >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
            </li>
            {paginationRange.map(pageNumber => {
                if(pageNumber === DOTS){
                    return <li className={``}>&#8230;</li>
                }

                return (
                    <li className={`px-3 h-8 text-center my-auto mx-1 flex text-black items-center justify-center rounded-lg text-sm hover:bg-gray-200 cursor-pointer ${currentPage === pageNumber ? 'bg-gradient-to-b from-[#FB8085] to-[#FF5757] text-white' : ''}`}
                    onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            }
            )}
            <li className={`px-3 h-8 text-center my-auto mx-1 flex text-black items-center justify-center rounded-full text-sm hover:bg-[#FF5757] cursor-pointer ${currentPage === lastPage ? 'pointer-events-none' : ''}`} onClick={onNext}>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </li>
        </ul>
    ); 
}
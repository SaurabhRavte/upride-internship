// eslint-disable-next-line no-unused-vars
import { React, } from 'react'
import Pagination from './Pagination';

import { useState, useMemo } from 'react';


let PageSize = 7;


const convdate = (date) => {
    const d = new Date(date)
    let mmddyyyy = d.toDateString().slice(4)
    mmddyyyy = mmddyyyy.slice(0, 6) + ',' + mmddyyyy.slice(6)
    return mmddyyyy
}
function Data(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        // eslint-disable-next-line react/prop-types
        return props.data.slice(firstPageIndex, lastPageIndex);
    // eslint-disable-next-line react/prop-types
    }, [currentPage, props.data]);
    return (
        <section className="w-full items-center text-center justify-center">
            <div className="w-full mb-3 overflow-hidden rounded-lg shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] mt-5">
                <div className="w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead className='shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]'>
                            <tr className="text-xs font-semibold font-opensans tracking-wide text-center text-gray-900 bg-[#D9D9D94D]">
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Package Details</th>
                                <th className="px-4 py-3">Payment Mode</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {currentTableData.map(item => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <tr className="text-black">
                                        <td className="px-4 py-3 ">
                                            <div className="flex items-center text-sm">
                                                <div className="hidden relative w-8 h-8 mr-3 rounded-full md:block">
                                                    <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                </div>
                                                <div className='w-full md:w-min'>
                                                    <p className="font-semibold text-black text-xs font-algreya">{item.clientName}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=" py-3 text-[10px] font-normal font-sans">{convdate(item.bookingEpochTime)}</td>
                                        <td className="px-4 py-3 text-ms font-normal text-xs text-center">{item.packageTitle}</td>
                                        <td className="py-3 text-center items-center justify-center flex ">
                                            <div className={`py-1 px-2 font-medium font-inter text-white max-w-[100px] text-[10px]/[12px] ${!item.offlineBooking?"bg-[#35DBA2]":"bg-[#FFCA28]"} rounded-full`}> {item.cat ==="offline_bookings" ? "Offline Payment" : "Online Payment"}</div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination
                className="justify-center font-semibold text-lg"
                currentPage={currentPage}
                // eslint-disable-next-line react/prop-types
                totalCount={props.data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)} />
        </section>
        // </div >
    )
}

export default Data
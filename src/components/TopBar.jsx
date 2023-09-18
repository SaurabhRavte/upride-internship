import React  from 'react'
import { Bars3Icon} from '@heroicons/react/24/outline'
import profile from "../assets/images/profile.jpg"

function TopBar(props) {
    return (
        <div className=' h-min w-full shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] bg-white flex justify-between'>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className=" z-30 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => props.setMobile(!props.currMobile)}
                >
                    <span className="sr-only">Open main menu</span>
                    {!props.currMobile ? <Bars3Icon className="h-8 w-8" aria-hidden="true" /> : ""}
                </button>
            </div>
            <div className='flex'>

                <div className="relative text-gray-600 w-min md:ml-8 my-4 ">
                    <input type="search" name="serch" placeholder="Search bookings" className="bg-white w-[180px] md:w-[331px] h-10 px-4 pr-10 rounded-full text-sm focus:outline-none border-[1px] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]" />
                    <button type="submit" className="absolute  right-2 mt-1 h-8 w-8">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2491 17.1422C16.4513 17.94 15.3928 18.3788 14.2641 18.3788C13.1353 18.3788 12.0769 17.94 11.2791 17.1422C10.4813 16.3453 10.0434 15.2859 10.0434 14.1581C10.0434 13.0303 10.4822 11.9709 11.2791 11.1731C12.0769 10.3753 13.1353 9.93656 14.2641 9.93656C15.3928 9.93656 16.4513 10.3753 17.2491 11.1731C18.0469 11.97 18.4847 13.0303 18.4847 14.1581C18.4847 15.2859 18.0469 16.3453 17.2491 17.1422ZM30 15C30 23.2706 23.2706 30 15 30C6.72938 30 0 23.2706 0 15C0 6.72938 6.72938 0 15 0C23.2706 0 30 6.72844 30 15ZM21.6741 20.22L19.1934 17.7328C19.9527 16.6954 20.3613 15.4428 20.3597 14.1572C20.3597 12.5287 19.7259 10.9978 18.5747 9.84656C17.4234 8.69531 15.8934 8.06063 14.2641 8.06063C12.6347 8.06063 11.1047 8.69531 9.95344 9.84656C8.80219 10.9978 8.16844 12.5287 8.16844 14.1572C8.16844 15.7856 8.80313 17.3166 9.95344 18.4669C10.5181 19.0348 11.1899 19.4852 11.9298 19.7917C12.6698 20.0983 13.4631 20.255 14.2641 20.2528C15.5636 20.254 16.8289 19.8365 17.8725 19.0622L20.3466 21.5428C20.4335 21.6304 20.5369 21.6998 20.6508 21.7471C20.7648 21.7944 20.8869 21.8187 21.0103 21.8184C21.1954 21.8182 21.3763 21.7632 21.5302 21.6604C21.684 21.5575 21.804 21.4114 21.875 21.2405C21.946 21.0695 21.9648 20.8814 21.929 20.6998C21.8933 20.5182 21.8045 20.3513 21.6741 20.22Z" fill="url(#paint0_linear_1_71)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_71" x1="2.49023" y1="7.38281" x2="45.2344" y2="31.8457" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF5757" />
                                    <stop offset="1" stop-color="#FF5757" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
                <button className="hidden font-opensans text-base  shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  bg-gradient-to-b from-[#FB8085] to-[#FF5757] rounded-full px-8 my-4 mx-5  text-md text-white sm:flex items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                        <path d="M8 15.9054C7.4066 15.9054 6.92578 15.4246 6.92578 14.8312V1.16882C6.92578 0.575425 7.4066 0.0946045 8 0.0946045C8.5934 0.0946045 9.07422 0.575425 9.07422 1.16882V14.8312C9.07422 15.4246 8.5934 15.9054 8 15.9054Z" fill="white" />
                        <path d="M14.8312 9.07422H1.16883C0.575429 9.07422 0.0946083 8.5934 0.0946083 8C0.0946083 7.4066 0.575429 6.92578 1.16883 6.92578H14.8312C15.4246 6.92578 15.9054 7.4066 15.9054 8C15.9054 8.5934 15.4246 9.07422 14.8312 9.07422Z" fill="white" />
                    </svg>

                    New Booking
                </button>
            </div>
            <div className='flex rounded-full border-[1px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] items-center justify-center sm:mr-4 my-4'>
                <div className="hidden relative w-8 h-8 mx-1 rounded-full md:block">
                    <img className="object-cover w-full h-full rounded-full " src={profile} alt="" loading="lazy" />
                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div className='px-2 text-sm font-normal font-roboto'>
                    Hello Lokesh! 👋
                </div>
            </div>
        </div>
    )
}

export default TopBar
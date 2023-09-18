import { useContext, useState } from 'react';
import Logo from '../assets/images/Logo.png'
import { Disclosure } from '@headlessui/react'
import {XMarkIcon } from '@heroicons/react/24/outline'
export default function SideBar(props) {
    const [click1, setClick1] = useState(true);
    const [click2, setClick2] = useState(false);

    const[active, setActive] = useState(0)
    return (
        <div className={` transition-all duration-300 ${!props.currMobile && 'hidden'} fixed z-20 lg:block  h-full lg:h-[100%] min-h-screen bg-gradient-to-b from-[#EB6B9D] to-[#FF5757B2] lg:relative`}>
            <div className='pt-5 ml-11 flex justify-between items-center'>
                <img src={Logo} alt='logo' className='w-[60%]' />
                {props.currMobile && <button onClick={() => props.setMobile(!props.currMobile)} ><XMarkIcon className="h-8 w-8 mr-4 lg:hidden" aria-hidden="true" /></button> }
            </div>
            <div className="w-full px-9 pt-12">
                <div className="mx-auto w-full max-w-md rounded-lg bg-white p-2">
                    <Disclosure defaultOpen={true}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg  text-left text-[12px]/[15px] text-[#1E293DB0]  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                                    <div className='flex'>

                                        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99811 0.825714C4.20334 0.825714 1.87238 3.077 1.87238 5.95145C1.87238 7.045 2.20098 8.02013 2.83163 8.93388L6.60585 14.8232C6.78895 15.1095 7.20764 15.1089 7.39037 14.8232L11.181 8.91384C11.798 8.0415 12.1238 7.0172 12.1238 5.95145C12.1238 3.12512 9.82444 0.825714 6.99811 0.825714ZM6.99811 8.28133C5.71347 8.28133 4.66823 7.23608 4.66823 5.95145C4.66823 4.66681 5.71347 3.62157 6.99811 3.62157C8.28274 3.62157 9.32799 4.66681 9.32799 5.95145C9.32799 7.23608 8.28274 8.28133 6.99811 8.28133Z" fill="url(#paint0_linear_1_26)" />
                                            <path d="M10.6409 11.5337L8.29456 15.2021C7.6872 16.149 6.30565 16.1459 5.70122 15.203L3.35102 11.5347C1.28321 12.0127 0.00848389 12.8886 0.00848389 13.9352C0.00848389 15.7513 3.60979 16.731 6.99812 16.731C10.3864 16.731 13.9878 15.7513 13.9878 13.9352C13.9878 12.8878 12.7113 12.0115 10.6409 11.5337Z" fill="url(#paint1_linear_1_26)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1_26" x1="6.99811" y1="0.825714" x2="6.99811" y2="15.0377" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FC8F8F" />
                                                    <stop offset="1" stop-color="#FF5757" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1_26" x1="6.99812" y1="11.5337" x2="6.99812" y2="16.731" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FC8F8F" />
                                                    <stop offset="1" stop-color="#FF5757" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <span className='ml-2 font-semibold font-opensans'>Rajarajeshwari Nagar</span>
                                    </div>
                                    <svg className={`${!open ? 'rotate-180 transform' : ''
                                        } h-3 w-3 text-black`} width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_1_40)">
                                            <path d="M10.7958 0.610295C10.6598 0.474207 10.4987 0.406219 10.3124 0.406219H0.687552C0.501235 0.406219 0.340164 0.474207 0.204076 0.610295C0.0679876 0.746534 0 0.907605 0 1.09381C0 1.27998 0.0679876 1.44105 0.204076 1.57717L5.01652 6.38962C5.15276 6.52571 5.31383 6.59385 5.5 6.59385C5.68617 6.59385 5.84739 6.52571 5.98336 6.38962L10.7958 1.57713C10.9317 1.44105 11 1.27998 11 1.09377C11 0.907605 10.9317 0.746534 10.7958 0.610295Z" fill="#FF5757" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_1_40" x="-2" y="0.406219" width="15" height="10.1876" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="2" />
                                                <feGaussianBlur stdDeviation="1" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_40" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_40" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-sm text-gray-500 mt-3">
                                    <div className='text-[#00000059] text-[10px]/[15px] flex justify-between'>
                                    <input className='ml-5 outline-none' placeholder='Branch2' />
                                        <div>
                                            <button onClick={()=>setClick1(!click1)}>
                                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.536743" y="0.99942" width="10.7265" height="10.7265" rx="5.36327" stroke="#FF5757" fill={click1 && "url(#paint0_linear_1_36)"} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1_36" x1="6.35103" y1="0.634125" x2="6.35103" y2="13.2627" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#FC8F8F" />
                                                            <stop offset="1" stop-color="#FF5757" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='border my-1'></div>
                                    <div className='text-[#00000059] text-[10px]/[15px] flex justify-between'>
                                        <input className='ml-5 outline-none' placeholder='Branch3' />
                                            
                                        <div>
                                            <button onClick={()=>setClick2(!click2)}>
                                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.536743" y="0.99942" width="10.7265" height="10.7265" rx="5.36327" stroke="#FF5757" fill={click2 && "url(#paint0_linear_1_36)"} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1_36" x1="6.35103" y1="0.634125" x2="6.35103" y2="13.2627" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#FC8F8F" />
                                                            <stop offset="1" stop-color="#FF5757" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
            <div className='flex items-center text-center '>

                <button className="sm:hidden  bg-gradient-to-b from-[#FB8085] to-[#FF5757] rounded-full px-8 py-4 my-4 mx-5 shadow-md text-md text-white flex items-center w-full h-full justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                        <path d="M8 15.9054C7.4066 15.9054 6.92578 15.4246 6.92578 14.8312V1.16882C6.92578 0.575425 7.4066 0.0946045 8 0.0946045C8.5934 0.0946045 9.07422 0.575425 9.07422 1.16882V14.8312C9.07422 15.4246 8.5934 15.9054 8 15.9054Z" fill="white" />
                        <path d="M14.8312 9.07422H1.16883C0.575429 9.07422 0.0946083 8.5934 0.0946083 8C0.0946083 7.4066 0.575429 6.92578 1.16883 6.92578H14.8312C15.4246 6.92578 15.9054 7.4066 15.9054 8C15.9054 8.5934 15.4246 9.07422 14.8312 9.07422Z" fill="white" />
                    </svg>

                    New Booking
                </button>
            </div>
            <nav className='w-full mt-8 flex flex-col items-center justify-center font-semibold font-opensans'>
                <ul className='w-full text-center'>
                    <li>
                        <div className={`text-[#fff] text-xl font-semibold py-5 hover:bg-[#D9D9D926] ${active==0 && 'bg-[#D9D9D926]'} flex`}>
                            <div className='ml-10 w-[20%]'>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.3529 10.4388L23.3513 10.4372L13.5612 0.647484C13.1439 0.229922 12.589 0 11.9989 0C11.4088 0 10.854 0.229781 10.4365 0.647297L0.651482 10.432C0.648201 10.4353 0.64492 10.4388 0.641639 10.4421C-0.21533 11.304 -0.21383 12.7023 0.645857 13.562C1.03858 13.955 1.55734 14.1825 2.11197 14.2064C2.13447 14.2086 2.1572 14.2096 2.18008 14.2096H2.57026V21.4143C2.57026 22.84 3.73023 24 5.15626 24H8.98642C9.37464 24 9.68954 23.6852 9.68954 23.2969V17.6484C9.68954 16.9979 10.2188 16.4687 10.8693 16.4687H13.1285C13.7791 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0114 24H18.8416C20.2676 24 21.4276 22.84 21.4276 21.4144V14.2097H21.7894C22.3794 14.2097 22.9342 13.9799 23.3518 13.5624C24.2125 12.7013 24.2128 11.3005 23.3529 10.4388Z" fill="white" />
                                </svg>
                            </div>
                            <div className='w-[70%] text-left'>
                                Home
                            </div>
                        </div>
                    </li>
                    <li className={`text-[#fff] text-xl font-semibold py-5 hover:bg-[#D9D9D926] ${active==1 && 'bg-[#D9D9D926]'} flex`}>
                        <div className='ml-10 w-[20%]'>

                            <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1_46)">
                                    <path d="M15.9565 19.0804C13.7009 19.0804 12.2451 19.8221 12.2451 20.3158C12.2451 20.812 13.6756 21.5543 15.9565 21.5543C18.2374 21.5543 19.6653 20.812 19.6653 20.3158C19.6653 19.8221 18.2096 19.0804 15.9565 19.0804Z" fill="white" />
                                    <path d="M12.2451 23.8079V24.8817C12.2451 25.3754 13.6756 26.1171 15.9565 26.1171C18.2374 26.1171 19.6653 25.3754 19.6653 24.8817V23.8079C18.7866 24.3577 17.3592 24.6589 15.9565 24.6589C14.5543 24.6589 13.1263 24.3855 12.2451 23.8079Z" fill="white" />
                                    <path d="M12.2451 21.5543V22.6255C12.2451 23.1192 13.6756 23.8635 15.9565 23.8635C18.2374 23.8635 19.6653 23.1192 19.6653 22.6255V21.5543C18.7866 22.1036 17.3592 22.4072 15.9565 22.4072C14.5543 22.4072 13.1263 22.1036 12.2451 21.5543Z" fill="white" />
                                    <path d="M4.02771 19.2727V20.3439C4.02771 20.8381 5.45819 21.5799 7.73909 21.5799C9.99219 21.5799 11.4479 20.8381 11.4479 20.3439V19.2727C10.5697 19.8225 9.13925 20.1236 7.73909 20.1236C6.3369 20.0959 4.90641 19.8225 4.02771 19.2727Z" fill="white" />
                                    <path d="M4.02771 21.5543V22.6255C4.02771 23.1192 5.45819 23.8635 7.73909 23.8635C9.99219 23.8635 11.4479 23.1192 11.4479 22.6255V21.5543C10.5697 22.1036 9.13925 22.4072 7.73909 22.4072C6.3369 22.3774 4.90641 22.1036 4.02771 21.5543Z" fill="white" />
                                    <path d="M4.02771 23.8079V24.8817C4.02771 25.3754 5.45819 26.1171 7.73909 26.1171C9.99219 26.1171 11.4479 25.3754 11.4479 24.8817V23.8079C10.5697 24.3577 9.13925 24.6589 7.73909 24.6589C6.3369 24.6589 4.90641 24.3855 4.02771 23.8079Z" fill="white" />
                                    <path d="M4.02771 16.9887V18.062C4.02771 18.5581 5.45819 19.2999 7.73909 19.2999C9.99219 19.2999 11.4479 18.5581 11.4479 18.062V16.9887C10.5697 17.538 9.13925 17.8416 7.73909 17.8416C6.3369 17.8139 4.90641 17.538 4.02771 16.9887Z" fill="white" />
                                    <path d="M7.71138 14.5169C5.45828 14.5169 4 15.2587 4 15.7529C4 16.2465 5.43048 16.9888 7.71138 16.9888C9.96448 16.9888 11.4202 16.2465 11.4202 15.7529C11.4202 15.2587 9.99227 14.5169 7.71138 14.5169Z" fill="white" />
                                    <path d="M21.2049 8.96137C21.2049 9.07304 21.1241 9.15389 21.0129 9.15389H19.7769C19.9417 9.40199 20.0786 9.67788 20.1342 9.97954H21.0129C21.1241 9.97954 21.2049 10.0629 21.2049 10.1721V10.9138C21.2049 11.025 21.1241 11.1063 21.0129 11.1063H20.1342C19.8861 12.2331 18.871 13.0588 17.6886 13.0588H17.5238L19.9973 15.5605C20.0508 15.6161 20.0786 15.6974 20.025 15.753C19.9973 15.8339 19.9417 15.8617 19.8583 15.8617H18.7315C18.6784 15.8617 18.6229 15.8339 18.5951 15.8086L16.1494 13.3069C16.1217 13.2791 16.0939 13.223 16.0939 13.1674V12.0406C16.0939 11.932 16.1772 11.8481 16.2859 11.8481H17.7164C18.2378 11.8481 18.7037 11.547 18.924 11.0785H16.3142C16.205 11.0785 16.1217 10.9972 16.1217 10.886V10.1443C16.1217 10.0351 16.205 9.95175 16.3142 9.95175H18.924C18.7037 9.48536 18.2378 9.18168 17.7164 9.18168H16.2859C16.1772 9.18168 16.0939 9.10083 16.0939 8.98916V8.19181C16.0939 8.08267 16.1772 7.99929 16.2859 7.99929H21.0129C21.1241 7.99929 21.2049 8.08267 21.2049 8.19181V8.96137ZM27.225 13.9931C26.2629 10.2832 24.4757 5.6901 21.3444 3.95796L23.3772 1.98024C24.1189 1.26374 23.5975 0 22.5798 0H14.719C13.676 0 13.1521 1.26374 13.9216 1.98024L15.9291 3.95796C12.7953 5.6901 11.0081 10.2832 10.048 13.9653C11.284 14.2968 12.2178 14.8996 12.2178 15.753V19.1082C13.099 18.5584 14.527 18.2547 15.9291 18.2547C18.1267 18.2547 20.4631 18.9687 20.4631 20.3158V20.5917C21.3444 20.5639 22.1417 20.4831 22.8557 20.3997C25.9617 20.0424 27.9945 17.0168 27.225 13.9931Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_46" x="0" y="0" width="31.3882" height="34.1171" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_46" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_46" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-[70%] text-left'>
                            My Earnings
                        </div>
                    </li>
                    <li className={`text-[#fff] text-xl font-semibold py-5 hover:bg-[#D9D9D926] ${active==2 && 'bg-[#D9D9D926]'} flex`}>
                        <div className='ml-10 w-[20%]'>

                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7632 0C12.0827 0 10.6653 1.41725 10.6653 3.09765C10.6653 4.77805 12.0827 6.1953 13.7632 6.1953C15.4438 6.1953 16.8104 4.77805 16.8104 3.09765C16.8104 1.41725 15.4438 0 13.7632 0ZM17.1452 6.1953C16.308 7.12352 15.1089 7.71873 13.7632 7.71873C12.4176 7.71873 11.1677 7.12352 10.3305 6.1953C9.59959 7.00571 9.14171 8.06739 9.14171 9.24216V10.0039C9.14171 10.4249 9.48243 10.7656 9.90349 10.7656H17.5722C17.9932 10.7656 18.334 10.4249 18.334 10.0039V9.24216C18.334 8.06739 17.8761 7.00571 17.1452 6.1953ZM7.35998 23.3798L3.47785 15.5974C3.103 14.8459 2.19068 14.5394 1.43819 14.9122L0.423534 15.4148C0.0457371 15.6021 -0.107992 16.0612 0.0805763 16.4383L4.65131 25.5789C4.83927 25.9559 5.2965 26.1059 5.67125 25.9211L6.67285 25.4249C7.42829 25.0507 7.7362 24.1342 7.35998 23.3798ZM25.378 12.5785C24.7533 12.1215 23.8849 12.2129 23.3669 12.7765L19.2025 17.8953C18.913 18.2 18.3645 18.3828 18.075 18.3828H14.525C14.0984 18.3828 13.7632 18.0477 13.7632 17.621C13.7632 17.1944 14.0984 16.8593 14.525 16.8593H17.5722C18.4101 16.8593 19.0958 16.1738 19.0958 15.3359C19.0958 14.498 18.4101 13.8125 17.5722 13.8125H13.5804C13.2007 13.8125 13.0114 13.5717 12.712 13.3097C11.5333 12.2491 9.76896 11.7382 7.98282 12.1521C6.99107 12.382 6.32227 12.7826 5.64397 13.3197L5.62137 13.3014L4.51952 14.271L8.84974 22.9531H17.5722C19.0043 22.9531 20.3756 22.2675 21.2288 21.1249L25.6979 14.7265C26.2007 14.0562 26.0636 13.0813 25.378 12.5785Z" fill="white" />
                            </svg>

                        </div>
                        <div className='w-[70%] text-left'>
                            My Savings
                        </div>
                    </li>
                    <li className={`text-[#fff] text-xl font-semibold py-5 hover:bg-[#D9D9D926] ${active==3 && 'bg-[#D9D9D926]'} flex`}>
                        <div className='ml-10 w-[20%]'>
                            <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1_45)">
                                    <path d="M17.8795 3.43274C18.943 4.12172 19.6887 5.28762 19.8244 6.64096C20.2704 6.85772 20.757 6.97033 21.2499 6.97077C23.113 6.97077 24.6231 5.41041 24.6231 3.48553C24.6231 1.56036 23.113 0 21.2499 0C19.4045 0.000593181 17.9076 1.53308 17.8795 3.43274ZM15.6696 10.5693C17.5328 10.5693 19.0429 9.00865 19.0429 7.08377C19.0429 5.1589 17.5325 3.59854 15.6696 3.59854C13.8068 3.59854 12.2958 5.15919 12.2958 7.08407C12.2958 9.00894 13.8068 10.5693 15.6696 10.5693ZM17.1005 10.8069H14.2382C11.8567 10.8069 9.91921 12.8092 9.91921 15.27V18.8869L9.9281 18.9435L10.1692 19.0215C12.4419 19.7553 14.4164 20 16.0416 20C19.2159 20 21.0558 19.0648 21.1692 19.0052L21.3945 18.8875H21.4186V15.27C21.4195 12.8092 19.482 10.8069 17.1005 10.8069ZM22.6813 7.20864H19.8411C19.8122 8.34184 19.3511 9.41731 18.5581 10.2006C20.6749 10.8511 22.2238 12.8795 22.2238 15.2753V16.3899C25.0281 16.2837 26.6441 15.4625 26.7506 15.4073L26.9759 15.2892H27V11.6711C27 9.21062 25.0625 7.20864 22.6813 7.20864ZM9.75072 6.97136C10.4106 6.97136 11.0246 6.77235 11.5447 6.43335C11.7079 5.34263 12.2695 4.35803 13.1139 3.68217C13.1173 3.61692 13.1234 3.55227 13.1234 3.48642C13.1234 1.56125 11.613 0.000889708 9.75072 0.000889708C7.8873 0.000889708 6.3775 1.56125 6.3775 3.48642C6.3775 5.4107 7.8873 6.97136 9.75072 6.97136ZM12.7801 10.2006C11.9915 9.42105 11.531 8.35244 11.4979 7.22525C11.3925 7.21724 11.2884 7.20864 11.181 7.20864H8.31899C5.93748 7.20864 4 9.21062 4 11.6711V15.2887L4.0089 15.3444L4.25001 15.423C6.07324 16.0112 7.70044 16.2822 9.11379 16.3677V15.2753C9.11436 12.8795 10.6626 10.8517 12.7801 10.2006Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_45" x="0" y="0" width="31" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_45" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_45" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-[70%] text-left'>
                            My Assets
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
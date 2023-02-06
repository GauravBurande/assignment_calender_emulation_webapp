import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi"
import { GrClose } from "react-icons/gr"
import db, { auth } from "../firebase"
import UserContext from "../context/UserContext";
import Image from "next/image";
import { collection, doc, setDoc } from "firebase/firestore/lite";

export default function Calender() {

    const userEmail = typeof window !== "undefined" && window.localStorage.getItem('userEmail')

    useEffect(() => {
        if (!userEmail) {
            router.push('/')
        }
    }, [])

    useEffect

    const context = useContext(UserContext)
    const { userData } = context
    const router = useRouter()

    const [displayAllMeetings, setDisplayAllMeetings] = useState(false)
    const [displayMeeting, setDisplayMeeting] = useState(false)
    const [meeting, setMeeting] = useState({ date: "", title: "", description: "" })
    const [AllmeetingsData, setAllMeetingsData] = useState([])

    const handleChange = (e) => {
        setMeeting({ ...meeting, [e.target.name]: e.target.value })
    }

    const toggleDisplayAll = () => {
        setDisplayAllMeetings(!displayAllMeetings)
    }

    const toggleDisplayOfMeeting = () => {
        setDisplayMeeting(!displayMeeting)
    }

    const signOut = () => {
        auth.signOut().then(() => {
            localStorage.removeItem('userEmail')
            router.push('/');
        }).catch((error) => {
            alert(error.message)
        })
    }

    const handleAdd = async () => {
        const meetingData = {
            email: userData.email,
            meeting
        }
        try {
            const meetingRef = collection(db, "meetingData");
            await setDoc(doc(meetingRef, meeting.title), meetingData).then((data) => { toggleDisplayOfMeeting() })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between flex-wrap py-8 px-4">
                <div className="hidden lg:flex flex-col justify-between items-center shadow-2xl rounded-lg text-gray-100 bg-gray-500 p-10 h-[85vh] my-auto w-60">
                    <div>
                        <Image
                            className="rounded-full"
                            src={userData ? userData.avatar : '/favicon.ico'}
                            alt={userData && userData.name}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div onClick={toggleDisplayAll} className="bg-gray-700 cursor-pointer rounded-full p-3 shadow-md">
                        see all meetings
                    </div>
                    <div onClick={signOut}>
                        <p className="flex items-center justify-center cursor-pointer">Sign Out <FiLogOut className="ml-1" /></p>
                    </div>
                </div>

                <div className="2xl:w-2/3 xl:w-2/3 lg:w-4/5 lg:-translate-x-28 sm:w-full w-full shadow-lg">
                    <div className="md:py-16 md:pb-12 p-5 dark:bg-gray-800 rounded-xl bg-white">
                        <div className="px-4 flex items-center justify-between">
                            <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">February 2023</h1>
                            <p onClick={toggleDisplayOfMeeting} className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full cursor-pointer ml-4">Book A Meeting</p>

                            {/* <div className="flex items-center text-gray-800 dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler ml-3 icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </div> */}

                        </div>
                        <div className="flex items-center justify-between pt-12 overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl text-center text-gray-800 dark:text-gray-100">Mo</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl text-center text-gray-800 dark:text-gray-100">Tu</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl text-center text-gray-800 dark:text-gray-100">We</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl text-center text-gray-800 dark:text-gray-100">Th</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl text-center text-gray-800 dark:text-gray-100">Fr</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl text-center text-gray-800 dark:text-gray-100">Sa</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl text-center text-gray-800 dark:text-gray-100">Su</p>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pt-6">
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">1</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">2</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">3</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">4</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">5</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">6</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">7</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">8</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">9</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">10</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">11</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">12</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">13</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">14</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">15</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">16</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">17</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">18</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">19</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">20</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">21</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">22</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">23</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">24</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">25</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">26</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">27</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">28</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">29</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 hover:underline decoration-white relative py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">30</p>
                                                <div className="p-1 rounded-full h-fit bg-blue-500"></div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                        <div className="px-4">
                            <div className="border-b pb-4 border-gray-400 border-dashed">
                                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                                <p className="text-lg  leading-5 text-gray-800 dark:text-gray-100 pt-2">Zoom call with design team</p>
                                <p className="text-sm pt-2 leading-4 text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
                            </div>
                            <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">10:00 AM</p>
                                <p className="text-lg  leading-5 text-gray-800 dark:text-gray-100 pt-2">Orientation session with new hires</p>
                            </div>
                            <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                                <p className="text-lg  leading-5 text-gray-800 dark:text-gray-100 pt-2">Zoom call with design team</p>
                                <p className="text-sm pt-2 leading-4 text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>

            <div className="flex items-center h-16 justify-between mx-auto bg-gray-200 shadow-2xl w-[80vw] lg:hidden py-3 px-6 rounded-full mb-5">
                <div>
                    <Image
                        className="rounded-full"
                        src={userData ? userData.avatar : '/favicon.ico'}
                        alt={userData && userData.name}
                        width={50}
                        height={50}
                    />
                </div>
                <div className="cursor-pointer" onClick={toggleDisplayAll}>
                    see all meetings
                </div>
                <div onClick={signOut}>
                    <p className="flex items-center justify-center cursor-pointer">Sign Out <FiLogOut className="ml-1" /></p>
                </div>
            </div>

            {
                displayAllMeetings && <div className="absolute transition-all duration-200 inset-0 flex min-h-[100vh] w-full items-center justify-center z-20 bg-white">
                    <div className="text-3xl lg:w-2/3 px-32">
                        You don't have any meeting for now, please book a meeting.
                    </div>
                    <div onClick={toggleDisplayAll} className="absolute md:right-96 right-20 top-16 md:top-32 shadow-md rounded-full p-3 cursor-pointer">
                        <GrClose />
                    </div>
                </div>
            }

            {
                displayMeeting && <div className="absolute transition-all duration-200 inset-0 flex flex-col min-h-[100vh] w-full items-center justify-center z-20 bg-white">
                    <div className="text-3xl px-32">
                        {/* You don't have any meeting today. */}
                        <p className="font-bold py-5">Add Meeting</p>
                    </div>

                    <div>
                        <div>
                            <div>
                                <label className="w-3/4" htmlFor="date">date (only DD)</label>
                                <input onChange={handleChange} value={meeting.data} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="date" id="date" />
                            </div>
                            <div>
                                <label htmlFor="title">title</label>
                                <input onChange={handleChange} value={meeting.title} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="title" id="title" />
                            </div>
                            <div>
                                <label htmlFor="description">description</label>
                                <input onChange={handleChange} value={meeting.description} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="description" id="description" />
                            </div>
                            <div>
                                <p onClick={handleAdd} className="px-4 py-2 bg-gray-300 mt-6 shadow-2xl rounded-full cursor-pointer w-fit">add</p>
                            </div>
                        </div>
                    </div>

                    <div onClick={toggleDisplayOfMeeting} className="absolute md:right-96 right-20 top-16 md:top-32 shadow-md rounded-full p-3 cursor-pointer">
                        <GrClose />
                    </div>
                </div>
            }
        </div >
    );
}

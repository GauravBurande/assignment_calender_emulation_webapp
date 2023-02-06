import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi"
import { GrClose } from "react-icons/gr"
import { BsThreeDotsVertical } from "react-icons/bs"
import db, { auth } from "../firebase"
import UserContext from "../context/UserContext";
import Image from "next/image";
import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite";

export default function Calender() {

    const userEmail = typeof window !== "undefined" && window.localStorage.getItem('userEmail')

    useEffect(() => {
        if (!userEmail) {
            router.push('/')
        }
    }, [])

    const context = useContext(UserContext)
    const { userData } = context
    const router = useRouter()

    const [displayAllMeetings, setDisplayAllMeetings] = useState(false)
    const [displayMeeting, setDisplayMeeting] = useState(false)
    const [meeting, setMeeting] = useState({ date: "", title: "", description: "", startTime: "", endTime: "" })
    const [allmeetingsData, setAllMeetingsData] = useState([])
    const [fetchMeets, setFetchMeets] = useState(1)

    const meetingDates = []
    allmeetingsData && allmeetingsData.forEach((meeting) => {
        meetingDates.push(parseInt(meeting.meeting.date))
    })

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
            email: userData ? userData.email : userEmail,
            meeting
        }
        try {
            const meetingRef = collection(db, "meetingData");
            await setDoc(doc(meetingRef, meeting.title), meetingData).then((data) => { setFetchMeets(Math.random()) })
            toggleDisplayOfMeeting()
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const deleteMeeting = async (doctitle) => {
        await deleteDoc(doc(db, "meetingData", doctitle))
        setFetchMeets(Math.random())
    }

    const editMeeting = async (meetingData) => {
        setMeeting(meetingData)
        setDisplayMeeting(true)
    }

    useEffect(() => {
        const q = query(collection(db, "meetingData"), where("email", "==", userData ? userData.email : userEmail));

        const fetchData = async () => {
            const querySnapshot = await getDocs(q);
            let meetsData = []
            querySnapshot.forEach((doc) => {
                meetsData.push(doc.data());
            });
            setAllMeetingsData(meetsData)
            console.log("fetching meetings...");
        }
        fetchData()
    }, [fetchMeets])

    return (
        <div>
            <div className="flex items-center justify-between flex-wrap py-8 px-4">
                <div className="hidden lg:flex flex-col justify-between items-center shadow-2xl rounded-lg text-gray-100 bg-gray-500 p-10 h-[85vh] my-auto w-60">
                    <div>
                        <Image
                            className="rounded-full"
                            src={userData ? userData.avatar : '/favicon.ico'}
                            alt={userData ? userData.name : 'calender'}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div onClick={toggleDisplayAll} className="bg-gray-700 hover:bg-gradient-to-br from-violet-200 to-pink-200 hover:text-black cursor-pointer rounded-full p-3 shadow-md">
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
                            <p onClick={toggleDisplayOfMeeting} className="bg-gray-500 text-center text-white font-bold py-2 px-4 rounded-full cursor-pointer ml-4 hover:bg-gradient-to-br from-violet-200 to-pink-200 hover:text-black">Book A Meeting</p>

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
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">1</p>
                                                {meetingDates.includes(1) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">2</p>
                                                {meetingDates.includes(2) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">3</p>
                                                {meetingDates.includes(2) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">4</p>
                                                {meetingDates.includes(4) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">5</p>
                                                {meetingDates.includes(5) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">6</p>
                                                {meetingDates.includes(6) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">7</p>
                                                {meetingDates.includes(7) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">8</p>
                                                {meetingDates.includes(8) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">9</p>
                                                {meetingDates.includes(9) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">10</p>
                                                {meetingDates.includes(10) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">11</p>
                                                {meetingDates.includes(11) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">12</p>
                                                {meetingDates.includes(12) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">13</p>
                                                {meetingDates.includes(13) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">14</p>
                                                {meetingDates.includes(14) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">15</p>
                                                {meetingDates.includes(15) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">16</p>
                                                {meetingDates.includes(16) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">17</p>
                                                {meetingDates.includes(17) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">18</p>
                                                {meetingDates.includes(18) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">19</p>
                                                {meetingDates.includes(19) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">20</p>
                                                {meetingDates.includes(20) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">21</p>
                                                {meetingDates.includes(21) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">22</p>
                                                {meetingDates.includes(22) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">23</p>
                                                {meetingDates.includes(23) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">24</p>
                                                {meetingDates.includes(24) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">25</p>
                                                {meetingDates.includes(25) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">26</p>
                                                {meetingDates.includes(26) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">27</p>
                                                {meetingDates.includes(27) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">28</p>
                                                {meetingDates.includes(28) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">29</p>
                                                {meetingDates.includes(29) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`px-4 relative py-4 flex w-full justify-center`}>
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">30</p>
                                                {meetingDates.includes(30) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>

            <div className="flex items-center h-16 justify-between mx-auto bg-gray-200 shadow-2xl w-[80vw] lg:hidden py-3 px-6 rounded-full mb-5">
                <div>
                    <Image
                        className="rounded-full"
                        src={userData ? userData.avatar : '/favicon.ico'}
                        alt={userData ? userData.name : 'calender'}
                        width={50}
                        height={50}
                    />
                </div>
                <div className="cursor-pointer underline hover:underline-offset-4" onClick={toggleDisplayAll}>
                    see all meetings
                </div>
                <div onClick={signOut}>
                    <p className="flex items-center justify-center cursor-pointer">Sign Out <FiLogOut className="ml-1" /></p>
                </div>
            </div>

            {
                displayAllMeetings && <div className="absolute transition-all duration-200 inset-0 flex min-h-[100vh] w-full items-center justify-center z-20 bg-white">

                    {allmeetingsData.length !== 0
                        ? <div className="md:w-[75vw] w-[80vw] flex flex-col items-center mt-44 h-[60vh] overflow-scroll">
                            {
                                allmeetingsData.map((meetingData, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="md:w-[50vw] relative w-[70vw] my-3 rounded-2xl px-10 md:px-16 py-4 bg-gray-300">
                                                <div className="flex items-center justify-between">
                                                    <div className="font-bold text-xl">
                                                        {meetingData.meeting.title}
                                                    </div>
                                                    <div className="text-sm">
                                                        <p>{meetingData.meeting.date} February, 2023</p>
                                                        <p>{meetingData.meeting.startTime} - {meetingData.meeting.endTime}</p>
                                                    </div>
                                                </div>
                                                <div className="w-2/3 py-6">
                                                    {meetingData.meeting.description}
                                                </div>

                                                <div className="absolute group top-4 right-4">
                                                    <BsThreeDotsVertical />

                                                    <div className="absolute space-y-2 top-0 -left-5 md: opacity-0 group-hover:opacity-100 p-3 rounded-xl bg-gray-500 cursor-pointer">
                                                        <div onClick={() => { deleteMeeting(meetingData.meeting.title) }}>
                                                            delete
                                                        </div>
                                                        <div onClick={() => { editMeeting(meetingData.meeting) }} className="group">
                                                            edit
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : <div className="text-3xl lg:w-2/3 px-32">
                            You don't have any meeting for now, please book a meeting.
                        </div>}

                    <div onClick={toggleDisplayAll} className="absolute md:right-72 right-20 top-16 md:top-12 shadow-md rounded-full p-3 cursor-pointer">
                        <GrClose />
                    </div>
                </div>
            }

            {
                displayMeeting && <div className="absolute transition-all duration-200 inset-0 flex flex-col min-h-[100vh] w-full items-center justify-center z-20 bg-white">
                    <div className="text-3xl px-32">
                        {/* You don't have any meeting today. */}
                        {/* <p className="font-bold py-5">Add Meeting</p> */}
                    </div>

                    <div>
                        <div className="mt-10 px-10 md:px-1">
                            <div>
                                <label className="w-3/4" htmlFor="date">date (only DD)</label>
                                <input onChange={handleChange} value={meeting.date} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="date" id="date" />
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
                                <label htmlFor="startTime">startTime</label>
                                <input onChange={handleChange} value={meeting.startTime} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="startTime" id="startTime" />
                            </div>
                            <div>
                                <label htmlFor="endTime">endTime</label>
                                <input onChange={handleChange} value={meeting.endTime} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="endTime" id="endTime" />
                            </div>
                            <div>
                                <p onClick={handleAdd} className="px-4 py-2 bg-gray-300 hover:bg-gradient-to-br from-violet-200 to-pink-200 my-6 shadow-2xl rounded-full cursor-pointer w-fit ">submit</p>
                            </div>
                        </div>
                    </div>

                    <div onClick={toggleDisplayOfMeeting} className="absolute md:right-24 lg:right-52 right-10 top-2 md:top-14 shadow-md rounded-full p-3 cursor-pointer">
                        <GrClose />
                    </div>
                </div>
            }
        </div >
    );
}

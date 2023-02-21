import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi"
import db, { auth } from "../firebase"
import UserContext from "../context/UserContext";
import Image from "next/image";
import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite";
import CalenderCard from "../components/calenderCard";
import Meetings from "../components/meetings";
import AddMeeting from "../components/addMeeting";

export default function Calender() {

    const userEmail = typeof window !== "undefined" && window.localStorage.getItem('userEmail')

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                router.push('/')
            }
        })
    }, [])

    const context = useContext(UserContext)
    const { userData } = context
    const router = useRouter()

    const [displayAllMeetings, setDisplayAllMeetings] = useState(false)
    const [displayMeeting, setDisplayMeeting] = useState(false)
    const emptyInputs = { date: "", title: "", description: "", startTime: "", endTime: "" }
    const [meeting, setMeeting] = useState(emptyInputs)
    const [allmeetingsData, setAllMeetingsData] = useState([])
    const [fetchMeets, setFetchMeets] = useState(1)


    const allDates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", ""]

    const handleChange = (e) => {
        if (e.target.name === 'date') {
            if (allDates.includes(e.target.value)) {
                setMeeting({ ...meeting, date: e.target.value })
            }
        } else {
            setMeeting({ ...meeting, [e.target.name]: e.target.value })
        }
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

    const handleAdd = async (e) => {
        e.preventDefault()
        const meetingData = {
            email: userData ? userData.email : userEmail,
            meeting
        }
        try {
            const meetingRef = collection(db, "meetingData");
            await setDoc(doc(meetingRef, meeting.title), meetingData).then((data) => { setFetchMeets(Math.random()), setMeeting(emptyInputs) })
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

                <CalenderCard toggleDisplayOfMeeting={toggleDisplayOfMeeting} allmeetingsData={allmeetingsData} />
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
                displayAllMeetings && <Meetings allmeetingsData={allmeetingsData} deleteMeeting={deleteMeeting} editMeeting={editMeeting} toggleDisplayAll={toggleDisplayAll} />
            }

            {
                displayMeeting && <AddMeeting toggleDisplayOfMeeting={toggleDisplayOfMeeting} handleChange={handleChange} handleAdd={handleAdd} meeting={meeting} />
            }
        </div >
    );
}

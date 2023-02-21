import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { GrClose } from "react-icons/gr"

const Meetings = ({ allmeetingsData, deleteMeeting, editMeeting, toggleDisplayAll }) => {
    return (
        <div>
            <div className="absolute transition-all duration-200 inset-0 flex min-h-[100vh] w-full items-center justify-center z-20 bg-white">

                {allmeetingsData.length !== 0
                    ? <div className="md:w-[75vw] w-[80vw] flex flex-col items-center mt-44 h-[60vh] overflow-scroll">
                        {
                            allmeetingsData.map((meetingData, index) => {
                                return (
                                    <div key={index}>
                                        <div className="md:w-[50vw] relative w-[70vw] my-3 rounded-2xl px-10 md:px-16 py-4 bg-gray-300">
                                            <div className="flex items-center justify-between">
                                                <div className="font-bold text-xl mr-2">
                                                    {meetingData.meeting.title}
                                                </div>
                                                <div className="text-xs">
                                                    <p>{meetingData.meeting.date} Feb, 2023</p>
                                                    <p>{meetingData.meeting.startTime} - {meetingData.meeting.endTime}</p>
                                                </div>
                                            </div>
                                            <div className="w-2/3 py-6">
                                                {meetingData.meeting.description}
                                            </div>

                                            <div className="absolute group top-4 right-4">
                                                <BsThreeDotsVertical />

                                                <div className="absolute space-y-2 top-0 -left-5 hidden group-hover:block p-3 rounded-xl bg-gray-500 cursor-pointer">
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
        </div>
    )
}

export default Meetings

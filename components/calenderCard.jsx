import React from 'react'

const CalenderCard = ({ toggleDisplayOfMeeting, allmeetingsData }) => {

    const meetingDates = []
    allmeetingsData && allmeetingsData.forEach((meeting) => {
        meetingDates.push(parseInt(meeting.meeting.date))
    })

    return (
        <>
            <div className="2xl:w-2/3 xl:w-2/3 lg:w-4/5 lg:-translate-x-28 sm:w-full w-full shadow-lg">
                <div className="md:py-16 md:pb-12 p-5 dark:bg-gray-800 rounded-xl bg-white">
                    <div className="px-4 flex items-center justify-between">
                        <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">February 2023</h1>
                        <p onClick={toggleDisplayOfMeeting} className="bg-gray-500 text-center text-white font-bold hover:font-thin py-2 px-4 rounded-full cursor-pointer ml-4 hover:bg-gradient-to-br from-violet-200 to-pink-200 hover:text-black">Book A Meeting</p>

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
                                            {meetingDates.includes(3) && <div className="p-1 rounded-full h-fit bg-blue-500"></div>}
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CalenderCard

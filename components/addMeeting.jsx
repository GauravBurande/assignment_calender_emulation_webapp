import { GrClose } from "react-icons/gr"

const AddMeeting = ({ toggleDisplayOfMeeting, handleAdd, handleChange, meeting }) => {
    return (
        <>
            <div className="absolute transition-all duration-200 inset-0 flex flex-col min-h-[100vh] w-full items-center justify-center z-20 bg-white">
                <div>
                    <div className="mt-10 px-10 md:px-1">
                        <form onSubmit={handleAdd} method="POST">
                            <div>
                                <label className="w-3/4" htmlFor="date">date (only DD)</label>
                                <input onChange={handleChange} value={meeting.date} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="date" id="date" required />
                            </div>
                            <div>
                                <label htmlFor="title">title</label>
                                <input onChange={handleChange} value={meeting.title} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="title" id="title" required />
                            </div>
                            <div>
                                <label htmlFor="description">description</label>
                                <input onChange={handleChange} value={meeting.description} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="description" id="description" required={true} />
                            </div>
                            <div>
                                <label htmlFor="startTime">startTime</label>
                                <input onChange={handleChange} value={meeting.startTime} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="startTime" id="startTime" required={true} />
                            </div>
                            <div>
                                <label htmlFor="endTime">endTime</label>
                                <input onChange={handleChange} value={meeting.endTime} className="bg-gray-300 px-6 rounded-xl shadow-md my-2 py-2 w-full outline-none" type="text" name="endTime" id="endTime" required={true} />
                            </div>
                            <div>
                                <button className="px-4 py-2 bg-gray-300 hover:bg-gradient-to-br from-violet-200 to-pink-200 my-6 shadow-2xl rounded-full cursor-pointer w-fit ">submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div onClick={toggleDisplayOfMeeting} className="absolute md:right-24 lg:right-52 right-10 top-2 md:top-14 shadow-md rounded-full p-3 cursor-pointer">
                    <GrClose />
                </div>
            </div>
        </>
    )
}

export default AddMeeting

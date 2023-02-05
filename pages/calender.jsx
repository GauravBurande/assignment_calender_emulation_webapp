import React from "react";

export default function Calender() {
    return (
        <div>
            <div className="flex items-center justify-between flex-wrap py-8 px-4">
                <div className="hidden pl-40 lg:block">
                    hello world
                </div>

                <div className="2xl:w-1/3 xl:w-1/2 lg:w-3/5 lg:-translate-x-28 sm:w-4/5 w-full shadow-lg">
                    <div className="md:py-16 md:pb-12 p-5 dark:bg-gray-800 rounded-xl bg-white">
                        <div className="px-4 flex items-center justify-between">
                            <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">February 2023</h1>
                            <p className="text-white ml-4">click on the date to see, add and delete the meetings on that date.</p>

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
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">1</p>
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">2</p>
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">3</p>
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">4</p>
                                            </div>
                                        </td>
                                        <td className="pt-6">
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">5</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">6</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">7</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                {/* <p className="text-2xl w-14 h-14 flex items-center justify-center  text-white bg-indigo-700 rounded-full">8</p> */}
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">8</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">9</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">10</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">11</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">12</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">13</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">14</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">15</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">16</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">17</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">18</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">19</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">20</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">21</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">22</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">23</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">24</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100">25</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">26</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">27</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">28</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">29</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                                <p className="text-2xl text-gray-500 dark:text-gray-100 ">30</p>
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

            <div className="flex items-center h-16 justify-center mx-auto bg-gray-200 shadow-2xl w-[80vw] md:hidden py-3 px-6 rounded-full">
                this is a comment
            </div>
        </div>
    );
}

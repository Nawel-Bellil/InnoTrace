import {  FaCogs, FaUser, FaTasks, FaQuestionCircle, FaSignOutAlt, FaBars } from "react-icons/fa";
import React, { useState } from "react";
import DashboardCon from '/images/Layout/Dashboard.png'
import MachineCon from '/images/Layout/machines.png'
import UserCon from '/images/Layout/Users.png'
import TasksCon from '/images/Layout/Tasks.png'
import SettingsCon from '/images/Layout/setting.png'
import HelpCon from '/images/Layout/Help.png'
import ContactCon from '/images/Layout/contact-Us.png'

const Layout = ({ profile }) => {
    const [isOpen, setIsOpen] = useState(false);  // State to manage sidebar visibility

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const { role } = profile;
    console.log(profile);

    return (
        <>
            <div className="flex">
                {/* Toggle button for mobile view */}
                <button
                    className="text-gray-800 p-3 focus:outline-none lg:hidden z-20" // Added z-index to ensure button is on top
                    onClick={toggleSidebar}
                >
                    <FaBars size={24} />
                </button>

                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-screen bg-gray-100 shadow-lg w-64 transition-transform transform lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:h-full lg:w-64 z-10 overflow-y-auto`}>
                    {/* Logo */}
                    <div className="flex items-center justify-center py-6">
                        <h1 className="text-xl font-bold">Aeon</h1>
                    </div>

                    {/* Menu */}
                    <ul className="flex flex-col space-y-4 px-4">
                        <li className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-l cursor-pointer">
                            <img className="text-gray-600" src={DashboardCon} alt="DashboardCon" />
                            <span>Dashboard</span>
                        </li>
                        <li className="flex items-center justify-between space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer relative">
                            <div className="flex items-center">
                                <img className="" src={MachineCon} alt="MachineCon"/>
                                <span className="ml-3">Machines</span>
                            </div>
                            <span className="text-sm bg-red-500 text-white rounded-full px-2 absolute right-2">2</span>
                        </li>
                        <li className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                            <img src={UserCon} alt="UserCon" />
                            <span>Users</span>
                        </li>
                        <li className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                            <img src={TasksCon} alt="Tasks con" />
                            <span>Tasks</span>
                        </li>
                        <li className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                            <img src={SettingsCon} alt="Settings con" />
                            <span>Settings</span>
                        </li>
                    </ul>

                    {/* Help Centre and Log Out */}
                    <div className="mt-auto px-4">
                        <ul className="flex flex-col space-y-4">
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                                <img src={HelpCon} alt="Help con" />
                                <span>Help Centre</span>
                            </li>
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                                <img src={ContactCon} alt="contact us" />
                                <span>Contact Us</span>
                            </li>
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                                <FaSignOutAlt className="text-red-600" />
                                <span className="text-red-600">Log out</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main content (example content) */}
                <div className="flex-1 p-8">
                    {/* Your main content goes here */}
                    <h2 className="text-3xl font-bold">Main Content Area</h2>
                </div>
            </div>
        </>
    );
};

export default Layout;

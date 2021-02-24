import React from 'react';
import Header from '../../header/Header';
import userData from '../../../data';
import { FaCloudDownloadAlt, FaUserAlt, FaSmile, FaMobile, FaCode, FaMedal } from 'react-icons/fa';
import  { IoGlobeOutline } from 'react-icons/io5';

export default class Aboutme extends React.Component {
    render() {
        const { aboutmeRef} = this.props;
        return(
            <div ref={aboutmeRef}>
                <Header heading="About Me" tagline="Main information about me and what i do" />
                <div className="grid grid-cols-1 lg:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10 gap-10 max-w-screen-xl">
                    <div className="col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-4 shadow-sm rounded-sm border border-gray-50 p-2">
                        <img src="/avatar.jpeg" className="port-about-me-profile-pic" />
                    </div>
                    <div className="col-span-6">
                        <p className="font-semibold	text-xl capitalize text-gray-900 mb-4">Hello, I'm <span className="primary-icons">{userData.name}</span></p>
                        <p className="leading-7 font-thin" style={{ color: '#343a40' }}>I am a Website & Mobile App Developer with 2+ years of experience.Expertised in creating Ecommerce Web & Mobile Application with Reach UI designs.I always try's to explore new things and to face challengings situations in that process.
                            I believe in punctuality, honesty & quality of my work provided. Having an experience of creating more than 25 Ecommerce websites and 5 mobile applications which can stackable to N number of stores.
                        </p>
                        <div className="grid grid-cols-2 mt-5">
                            <div>
                                <p className="leading-10 text-gray-500 text-sm"><span className="text-gray-900">Name:</span>&nbsp; {userData.name}</p>
                                <p className="leading-10 text-gray-500 text-sm"><span className="text-gray-900">Date of birth:</span>&nbsp; {userData.dob}</p>
                                <p className="leading-10 text-gray-500 text-sm"><span className="text-gray-900">Nationality:</span>&nbsp; {userData.nationality}</p>
                                <p className="leading-10 text-gray-500 text-sm"><span className="text-gray-900">Work status:</span>&nbsp; {userData.work_status}</p>
                            </div>
                            <div>
                                <p className="leading-10 text-gray-500 text-sm" ><span className="text-gray-900">Phone:</span>&nbsp; {userData.phone}</p>
                                <p className="leading-10 text-gray-500 text-sm" ><span className="text-gray-900">Email:</span>&nbsp; {userData.email}</p>
                                <p className="leading-10 text-gray-500 text-sm" ><span className="text-gray-900">Address:</span>&nbsp; {userData.location}</p>
                                <p className="leading-10 text-gray-500 text-sm" ><span className="text-gray-900">Experience:</span>&nbsp; {userData.work_experience}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <a href="/manne_nikhil.docx" download>
                            <button className="rounded inline-flex items-center capitalize text-white p-2 pl-4 text-sm pr-4 primary-color hover:bg-blue-900">
                                <FaCloudDownloadAlt size={16} />
                                &nbsp;&nbsp;Download my cv
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6 xl:grid-cols-6 gap-6 items-stretch w-full max-w-max" style={{ maxWidth: '100%' }}>
                    <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                        <FaMobile size={25} />
                        <p className="text-center mt-4 text-gray-500">Created 5 <br /> Mobile Apps</p>   
                    </div>
                    <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                        <IoGlobeOutline size={25} />
                        <p className="text-center mt-4 text-gray-500">Created 30+ <br/> Live Websites</p>   
                    </div>
                    <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                        <FaSmile size={25} />
                        <p className="text-center mt-4 text-gray-500">Satisfied customers</p>   
                    </div>
                    <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                        <FaMobile size={25} />
                        <p className="text-center mt-4 text-gray-500">Mobile App Developer</p>   
                    </div>
                    <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                        <FaMedal size={25} />
                        <p className="text-center mt-4 text-gray-500">Quality work provided</p>   
                    </div>
                    <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                        <FaCode size={25} />
                        <p className="text-center mt-4 text-gray-500">Reusable<br /> code</p>   
                    </div>
                </div>
            </div>
        )
    }
}
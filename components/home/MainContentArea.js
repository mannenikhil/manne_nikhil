import React from 'react';
import Aboutme from './sections/Aboutme';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Image from './sections/Image';
import FeaturedProjects from './sections/FeaturedProjects';
import TechnicalSkills from './sections/TechnicalSkills';
import MyWorks from './sections/MyWorks';

const userDetails= {
    name: 'Manne Nikhil',
    role: 'Software engineer',
    email: 'manne.nikhil1996@gmail.com',
    phone: '9966554819',
    profile_pic: '/images/avatar.jpeg',
    show_phone: true,
    location: 'Hyderabad',
    facebook: 'https://www.facebook.com/nikhil.mudhiraj.37/',
    linkedin: 'https://www.linkedin.com/in/manne-nikhil-634b06164/',
    instagram: 'https://www.instagram.com/nikhil_mudhiraj_/',
    powered_by: 'nikhil',
}

export default class MainContentArea extends React.Component {
    render() {
        return(
            <div className="port-main-content-container">
                <Image />
                <div className="port-section port-container p-5">
                    <Aboutme />
                </div>
                <div className="port-section port-container p-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 items-stretch gap-10 max-w-screen-xl">
                        <div>
                            <Experience />
                        </div>
                        <div>
                            <Education />
                        </div>
                    </div>
                </div>
                <div className="port-section port-container p-5">
                    <FeaturedProjects />
                </div>
                <div className="port-section port-container p-5">
                    <MyWorks />
                </div>
                <div className="port-section port-container p-5">
                    <TechnicalSkills />
                </div>
            </div>
        )
    }
}
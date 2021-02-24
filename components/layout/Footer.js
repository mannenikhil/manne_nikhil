import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import userDetails from '../../data';

export default class Footer extends React.Component{
    render() {
        return(
            <div className="bg-gray-700 p-4 py-12">
                <div className="port-container flex flex-col text-center justify-center">
                    <img src="/my-logo.png" className="h-20 object-contain" />
                    <div className="flex flex-row mt-5 justify-center">
                        <a href={userDetails.facebook} target="_blank">
                            <FaFacebookF className="port-social-icon" color="#ffffff99" size={18} />
                        </a>
                        <a href={userDetails.instagram} target="_blank">
                            <FaInstagram className="port-social-icon" color="#ffffff99" size={18} />
                        </a>
                        <a href={userDetails.linkedin} target="_blank">
                            <FaLinkedin className="port-social-icon" color="#ffffff99" size={18} />
                        </a>
                    </div>
                    <div className="mt-5">
                        <p className="text-sm" style={{ color: '#ffffff99' }}>©2021 Manne nikhil | All Right Reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}
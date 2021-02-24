import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaUserAlt } from 'react-icons/fa';
import userDetails from '../../../data';

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            counter: 0,
        }
    }

    componentDidMount() {
        this.timer=setInterval(() => {
            const { counter } = this.state;
            this.setState({ counter: counter + 1 });
        }, 2000);
    }

    render() {
        const { counter } = this.state;
        const { scrollTo } = this.props;
        return(
            <div className="port-my-profile-content">
            <div className="port-container p-3">
                <div className="port-image-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl xl:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">
                    <div className="mt-20 lg:mt-0 xl:mt-0 2xl:mt-0">
                        <p className="port-secondary-header" style={{ marginBottom: 0 }}>Hi There, </p>
                        <h1 className="text-2xl lg:text-4xl 2xl:text-4xl xl:text-4xl font-bold mb-5 pt-3">
                            I am a <br />
                            <span>
                                <b className={`${counter % 2 === 0 ? 'port-visible' : 'port-hidden'} port-primary-header pt-3`}>Web Developer</b>
                                <b className={`${counter % 2 !== 0 ? 'port-visible' : 'port-hidden'} port-primary-header pt-3`}>Mobile App Developer</b>
                            </span>
                        </h1>
                        <p className="port-secondary-header ">Welcome to my portfolio website.</p>
                        <button className="rounded inline-flex items-center capitalize text-white primary-color p-2 pl-4 text-sm pr-4 hover:bg-blue-900" style={{ marginTop: '1rem' }} onClick={() => scrollTo('aboutMe')}>
                            <FaUserAlt style={{ marginRight: 5 }} />
                            More About Me
                        </button>
                    </div>
                    <div className="hidden lg:block xl:block">
                        <img src="/uideveloper.gif" />
                    </div>
                    </div>
                </div>
                <div className="port-user-details-section hidden lg:block xl:block">
                    <div className="flex flex-row">
                        <div className="port-data">
                            <p className="port-small-header">Email</p>
                            <p className="port-small-header-value">{userDetails.email}</p>
                        </div>
                        <div className="port-data">
                            <p className="port-small-header">Phone</p>
                            <p className="port-small-header-value">{userDetails.phone}</p>
                        </div>
                        <div className="port-data">
                            <p className="port-small-header">Location</p>
                            <p className="port-small-header-value">{userDetails.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { RiSendPlaneFill } from 'react-icons/ri';
import Header from '../../header/Header';
import Firebase from '../../../Firebase';

export default class Contactme extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            email: '',
            phone: '',
            message: '',
            showSuccessMessage: false,
            loading: false,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = (name, text) => {
        const { value } = text.target;
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message } = this.state;
        this.setState({ loading: true });
        Firebase.sendContactDetails(name, email, phone, message).then(() => this.setState({ showSuccessMessage: true, loading: false }));
    }

    render() {
        const { name, email, phone, message, showSuccessMessage, loading } = this.state;
        const disabled = name.length === 0 && email.length === 0 && message.length === 0;
        return(
            <div>
                <Header heading="Contact Me" tagline="Feel Free To Contact Me Any Time" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-2 xl:grid-cols-2 items-stretch 2xl:grid-cols-2 max-w-screen-xl">
                    <div className="project-card p-10 rounded-lg">
                        {showSuccessMessage ? (
                            <div className="flex items-center justify-center flex-1 h-full">
                                <h1 className="font-semibold text-center text-gray-800">Thank you for getting in touch!.I will get back to you in short time</h1>
                            </div>
                        ) : (
                        <div className="relative">
                            <form onSubmit={this.onSubmit}>
                                <input className="w-full rounded h-10 mb-5 bg-transparent border leading-none pl-2" placeholder="Name" onChange={(e) => this.onChange('name', e)} />
                                <input className="w-full rounded h-10 mb-5 bg-transparent border leading-none pl-2" type="email" placeholder="Email" onChange={(e) => this.onChange('email', e)} />
                                <input required className="w-full rounded h-10 mb-5 bg-transparent border leading-none pl-2" type="number" placeholder="Phone number" onChange={(e) => this.onChange('phone', e)} />
                                <textarea className="w-full rounded h-10 mb-5 bg-transparent border leading-none h-20 pt-2 pl-2" placeholder="Message" onChange={(e) => this.onChange('message', e)} />
                                <button className="rounded inline-flex items-center capitalize text-white primary-color p-2 pl-4 text-sm pr-4 hover:bg-blue-900" disabled={disabled}>
                                    <RiSendPlaneFill size={16} />
                                    &nbsp;&nbsp;Send Message
                                </button>
                            </form>
                            {loading ? (
                                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}} className="absolute w-full left-0 top-0 h-full">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <svg class="animate-pulse primary-color rounded-full h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        )}
                    </div>
                    <div className="p-4">
                        <div>
                            <h1 className="font-semibold primary-icons text-xl mb-5">Let's talk about everything!</h1>
                            <p className="text-gray-800 leading-7">
                                If you like my work, feel free to contact me. Here below are my contact no. & work email. Let's talk about what you want,
                                I am ready to create it for you. Thankyou.
                            </p>
                        </div>
                        <div className="mt-5">
                            <h1 className="font-semibold text-gray-800 leading-10 text-xl">Phone:</h1>
                            <p className="flex items-center text-gray-800 text-sm mt-1"><FaPhoneAlt size={20} className="primary-icons" />&nbsp; &nbsp;(+91)9966554819</p> 
                        </div>
                        <div className="mt-5">
                            <h1 className="font-semibold text-gray-800 leading-10 text-xl">Email:</h1>
                            <p className="flex items-center text-gray-800 text-sm mt-1"><GrMail size={20} className="primary-icons" />&nbsp; &nbsp;manne.nikhil1996@gmail.com</p> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
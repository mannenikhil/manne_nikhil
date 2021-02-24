import React from 'react';

export default class Experience extends React.Component {
    render() {
        return(
            <div>
                <h1 className="font-semibold text-xl">My <span className="primary-icons">Experience</span></h1>
                <div className="shadow p-4 mt-4 rounded shadow-lg">
                    <div className="border-l relative experience-border">
                        <div className="stepper-point p-7">
                            <h1 className="text-gray-800 font-medium leading-7">WML Technologies Pvt Ltd. - UI Developer</h1>
                            <p className="text-gray-400 mt-1 mb-4 text-sm">1st feb, 2019 - Till Now</p>
                            <p className="text-gray-600 text-sm">I have played an important role in my company and i have switched my role according to company's requirement as Web & Mobile App Developer.</p>
                        </div>
                        <div className="relative">
                            <div className="stepper-point p-7">
                                <h1 className="text-gray-800 font-medium leading-7">Nestor Analytics - Web Developer</h1>
                                <p className="text-gray-400 mt-1 mb-4 text-sm">1st oct, 2018 - 31st jan, 2019</p>
                                <p className="text-gray-600 text-sm">Worked on Creating fusion decks templates for childrens.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="stepper-point p-7">
                                <h1 className="text-gray-800 font-medium leading-7">Sukshi Deep Focus - Research & Development Engineer</h1>
                                <p className="text-gray-400 mt-1 mb-4 text-sm">1st june, 2018 - 15th sep, 2019.</p>
                                <p className="text-gray-600 text-sm">Worked on Web Technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
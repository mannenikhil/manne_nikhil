import React from 'react';

export default class Education extends React.Component {
    render() {
        return(
            <div>
                <h1 className="font-semibold text-xl">My <span className="primary-icons">Education</span></h1>
                <div className="shadow p-4 mt-4 rounded shadow-lg">
                    <div className="border-l relative experience-border">
                        <div className="stepper-point p-7">
                            <h1 className="text-gray-800 font-medium leading-7">Bachelor's Of Technology - JNTUH</h1>
                            <p className="text-gray-400 mt-1 mb-4 text-sm">2014 - 2018</p>
                            <p className="text-gray-600 text-sm">I have been graduated from  malla reddy college of engineering from ECE stream.</p>
                        </div>
                        <div className="relative">
                            <div className="stepper-point p-7">
                                <h1 className="text-gray-800 font-medium leading-7">Intermediate - Narayana jr college</h1>
                                <p className="text-gray-400 mt-1 mb-4 text-sm">2012-2014</p>
                                <p className="text-gray-600 text-sm">I have conquered my intermediate education from narayan jr college.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="stepper-point p-7">
                                <h1 className="text-gray-800 font-medium leading-7">10th Degree - St.Aurobindo high school</h1>
                                <p className="text-gray-400 mt-1 mb-4 text-sm">2012</p>
                                <p className="text-gray-600 text-sm">I have completed my 10th standard in St.Aurobindo high scool from SSC board.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import Header from '../../header/Header';

export default class MyWork extends React.Component {
    render() {
        return(
            <div>
                <Header heading="My Works" tagline="Projects which i have learned a lot from" />
                <div className="mt-10">
                    <h1 className="text-gray-800 font-bold mb-4">Mobile Apps</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 gap-6 items-stretch w-full mt-0 max-w-max">
                    <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/html.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">HTML</p>   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import { GrShare } from 'react-icons/gr';
import Header from '../../header/Header';


const data = [
     {
        header: 'Mobile Apps',
        work: [
            // { name: 'Agnicart', image: '/agnicart.png', link: 'https://play.google.com/store/apps/details?id=com.agnicartmerchant.prd' },
            { name: 'Designr app', image: '/designr.png', link: 'https://play.google.com/store/apps/details?id=com.designr.prd' },
            { name: 'Rudraaksha', image: '/Rudraaksha_logo.png', link: 'https://play.google.com/store/apps/details?id=com.rudraaksha' },
            { name: 'Designr Trail room', image: '/designr.png' }
        ],
    },
    {
        header: 'Web work',
        work: [
            { name: 'Agnicart', image: '/bronx.png', link: 'https://play.google.com/store/apps/details?id=com.agnicartmerchant.prd' },
            { name: 'Designr app', image: '/charu.png', link: 'https://play.google.com/store/apps/details?id=com.designr.prd' },
            { name: 'Rudraaksha', image: '/APTS.png', link: 'https://play.google.com/store/apps/details?id=com.rudraaksha' },
            { name: 'Designr Trail room', image: '/designr.png' }
        ]
    }
]

export default class MyWork extends React.Component {

    renderWorks = (works) => {
        const projects = works.map((work) => {
            if(work.link) {
                return(
                    <a href={work.link} target="_blank">
                        <div className="col-span-1 group rounded border-1 border-gray-400 cursor-pointer shadow-lg project-card">
                            <div className="w-full bg-indigo-50 group-hover:bg-indigo-100">
                                <img src={work.image} className="object-cover" />
                            </div>
                            <div className="w-full flex p-3 justify-between">
                                <p className="font-semibold text-gray-800 group-hover:text-blue-800">{work.name}</p> 
                                <GrShare />
                            </div>  
                        </div>
                    </a>
                )
            }
            return(
                <div className="col-span-1 group rounded border-1 border-gray-400 cursor-pointer shadow-lg project-card">
                    <div className="w-full g-indigo-50 group-hover:bg-indigo-100">
                        <img src={work.image} className="object-scale-down h-24" />
                    </div>
                    <p className="font-semibold p-3 text-gray-800 group-hover:text-blue-800">{work.name}</p>   
                </div>
            )
        });

        return projects;
    }

    renderRows = () => {
        const rows = data.map((row) => {
            return(
                <div className="mt-10">
                    <h1 className="text-gray-800 font-bold mb-4">{row.header}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 gap-6 items-stretch w-full mt-0 max-w-max" style={{ maxWidth: '100%' }}>
                        {this.renderWorks(row.work)}
                    </div>
                </div>
            )
        });
        return rows;
    }

    render() {
        return(
            <div>
                <Header heading="My Works" tagline="My works using Mobile and web technologies" />
                {/* <div className="mt-10">
                    <h1 className="text-gray-800 font-bold mb-4">Mobile Apps</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 gap-6 items-stretch w-full mt-0 max-w-max" style={{ maxWidth: '100%' }}>
                        <a href="https://play.google.com/store/apps/details?id=com.agnicartmerchant.prd" target="_blank">
                            <div className="col-span-1 group rounded border-1 border-gray-400 cursor-pointer shadow-lg project-card">
                                <div className="w-full bg-indigo-50 group-hover:bg-indigo-100">
                                    <img src="/agnicart.png" className="object-scale-down h-24" />
                                </div>
                                <p className="font-semibold p-3 text-gray-800 group-hover:text-blue-800">Agnicart</p>   
                            </div>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.designr.prd" target="_blank">
                            <div className="col-span-1 rounded shadow-lg project-card">
                                <div className="w-full relative bg-indigo-50">
                                    <img src="/designr.png" className="object-scale-down h-24 " />
                                </div>
                                <p className="font-semibold p-3 text-gray-800">designr App</p>   
                            </div>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.rudraaksha" target="_blank">
                            <div className="col-span-1 rounded shadow-lg project-card">
                                <div className="w-full bg-indigo-50">
                                    <img src="/Rudraaksha_logo.png" className="object-scale-down h-24" />
                                </div>
                                <p className="font-semibold p-3 text-gray-800">rudraaksha</p>   
                            </div>
                        </a>
                        <div className="col-span-1 rounded shadow-lg project-card">
                            <div className="w-full bg-indigo-50">
                                <img src="/designr.png" className="object-scale-down h-24 " />
                            </div>
                            <p className="font-semibold p-3 text-gray-800">Designr Trailroom</p>   
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-gray-800 font-bold mb-4">Websites</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 gap-6 items-stretch w-full mt-0 max-w-max" style={{ maxWidth: '100%' }}>
                        <a href="https://play.google.com/store/apps/details?id=com.agnicartmerchant.prd" target="_blank">
                            <div className="col-span-1 group rounded border-1 border-gray-400 cursor-pointer shadow-lg project-card">
                                <div className="w-full bg-indigo-50 group-hover:bg-indigo-100">
                                    <img src="/agnicart.png" className="object-scale-down h-24" />
                                </div>
                                <p className="font-semibold p-3 text-gray-800">Agnicart</p>   
                            </div>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.designr.prd" target="_blank">
                            <div className="col-span-1 rounded shadow-lg project-card">
                                <div className="w-full relative bg-indigo-50">
                                    <img src="/designr.png" className="object-scale-down h-24 " />
                                </div>
                                <p className="font-semibold p-3 text-gray-800">designr App</p>   
                            </div>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.rudraaksha" target="_blank">
                            <div className="col-span-1 rounded shadow-lg project-card">
                                <div className="w-full bg-indigo-50">
                                    <img src="/Rudraaksha_logo.png" className="object-scale-down h-24" />
                                </div>
                                <p className="font-semibold p-3 text-gray-800">rudraaksha</p>   
                            </div>
                        </a>
                        <div className="col-span-1 rounded shadow-lg project-card">
                            <div className="w-full bg-indigo-50">
                                <img src="/designr.png" className="object-scale-down h-24 " />
                            </div>
                            <p className="font-semibold p-3 text-gray-800">Designr Trailroom</p>   
                        </div>
                    </div>
                </div> */}
                {this.renderRows()}
            </div>
        )
    }
}
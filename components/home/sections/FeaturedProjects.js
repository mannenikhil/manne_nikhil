import React from 'react';
import Header from '../../header/Header';

export default class FeaturedProjects extends React.Component {
    render() { 
        return(
            <div>
                <Header heading="Featured Projects" tagline="Projects which i have learned a lot from" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch xl:grid-cols-3 2xl:grid-cols-3 gap-4 max-w-screen-xl">
                    <div className="shadow-xl flex flex-col overflow-hidden rounded">
                        <div className="bg-gradient-to-r from-red-100 to-pink-100  w-full duration:500 transition transform hover:scale-110">
                            <img src="/agnicart.png" className="m-auto p-5 py-10  object-contain" />
                        </div>
                        <div className="m-5">
                            <h1 className="font-semibold text-gray-800">Agnicart Mobile & Web app</h1>
                            <p className="mt-2 text-sm text-gray-500 leading-6">Agnicart is an online Ecommerce store provider which helps to transformation store into digital store where you can sell your products online, on Facebook, or in person.</p>
                        </div>
                    </div>
                    <div className="shadow-xl flex flex-col overflow-hidden rounded">
                        <div className="bg-gradient-to-r from-red-100 to-pink-100  w-full duration:500 transition transform hover:scale-110">
                            <img src="/designr.png" className="m-auto p-5 py-10  object-contain" />
                        </div>
                        <div className="m-5">
                            <h1 className="font-semibold text-gray-800">Designr Mobile & Web App</h1>
                            <p className="mt-2 text-sm text-gray-500 leading-6">Designr is Ecommerce platform where all fashion designers can onboard there latest collections to sell there products online.</p>
                        </div>
                    </div>
                    <div className="shadow-xl flex flex-col overflow-hidden rounded">
                        <div className="bg-gradient-to-r from-red-100 to-pink-100  w-full duration:500 transition transform hover:scale-110">
                            <img src="/APTS.png" className="m-auto p-5 py-10  object-contain" />
                        </div>
                        <div className="m-5">
                            <h1 className="font-semibold text-gray-800">Gcart</h1>
                            <p className="mt-2 text-sm text-gray-500 leading-6">Gcart is an e-commerce platform developed for Andhra Pradesh government. Through this portal Andhra Pradesh govt. employees can order various products online for office purpose as well as personal products.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
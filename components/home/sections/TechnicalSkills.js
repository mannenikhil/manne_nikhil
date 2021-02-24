import React from 'react';
import Header from '../../header/Header';

export default class TechnicalSkills extends React.Component {
    render() {
        return (
            <div>
                <Header heading="Technical Skill" tagline="Technologies i have worked on" />
                <div className="mt-10">
                    <h1 className="text-gray-800 font-bold mb-4">Web Technologies</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 gap-6 items-stretch w-full mt-0 max-w-max" style={{ maxWidth: '100%' }}>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/html.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">HTML</p>   
                        </div>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/css.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">CSS</p>   
                        </div>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/js.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">Javascript</p>   
                        </div>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/html.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">HTML5</p>   
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-800 font-bold mb-4">Web Frameworks</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 gap-6 items-stretch w-full mt-0 max-w-max" style={{ maxWidth: '100%' }}>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/react.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">ReactJs</p>   
                        </div>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/nextjs.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">NextJs</p>   
                        </div>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/jquery.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">JQuery</p>   
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-800 font-bold mb-4">Mobile Frameworks</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 gap-6 items-stretch w-full mt-0 max-w-max" style={{ maxWidth: '100%' }}>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/react.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">React Native</p>   
                        </div>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/react.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">React Native Elements</p>   
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-800 font-bold mb-4">CSS Frameworks</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 gap-6 items-stretch w-full mt-0 max-w-max" style={{ maxWidth: '100%' }}>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/semantic.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">Semantic Ui React</p>   
                        </div>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/tailwind.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">Tailwind css</p>   
                        </div>
                        <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/bootstrap.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">Bootstrap</p>   
                        </div>
                        {/* <div className="col-span-1 rounded flex flex-col  items-center  justify-center py-5 project-card">
                            <img src="/reactnativeelement.png" className="object-scale-down h-24" />
                            <p className="text-center font-semibold mt-4 text-gray-800">React Native Elements</p>   
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
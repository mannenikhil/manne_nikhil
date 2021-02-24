import React from 'react';

export default class Header extends React.Component {
    render() {
        const { scrollTo } = this.props;
        return(
            <div className="py-2 sticky top-0">
                <div className="port-container">
                    <div className="flex flex-row items-center justify-between">
                        <img src="/my-logo.png" className="h-16 object-contain" />
                        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                            <span class="font-medium text-gray-700 hover:text-indigo-600 cursor-pointer" onClick={() => scrollTo('aboutMe')}>About me</span>
                            <span class="font-medium text-gray-700 hover:text-indigo-600 cursor-pointer" onClick={() => scrollTo('experience')}>My Experience</span>
                            <span class="font-medium text-gray-700 hover:text-indigo-600 cursor-pointer" onClick={() => scrollTo('project')}>Projects</span>
                            <span class="font-medium text-gray-700 hover:text-indigo-600 cursor-pointer" onClick={() => scrollTo('technical')}>Technical Skills</span>
                            <span class="font-medium text-gray-700 hover:text-indigo-600 cursor-pointer" onClick={() => scrollTo('contact')}>Contact me</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
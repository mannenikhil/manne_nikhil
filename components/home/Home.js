import React from 'react';
import Aboutme from './sections/Aboutme';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Image from './sections/Image';
import FeaturedProjects from './sections/FeaturedProjects';
import TechnicalSkills from './sections/TechnicalSkills';
import MyWorks from './sections/MyWorks';
import Contact from './sections/Contactme';

export default class Home extends React.Component {
    render() {
        const { aboutRef, experienceRef, myWorksRef, technicalref, contactRef, projectsRef, scrollTo } = this.props;
        return(
            <div className="port-home" ref={this.experienceRef}>
                <div className="port-main-content-container">
                    <Image scrollTo={scrollTo}  />
                    <div className="port-section port-container p-5" ref={aboutRef}>
                        <Aboutme />
                    </div>
                    <div>
                    <div className="port-section port-container p-5" ref={experienceRef}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 items-stretch gap-10 max-w-screen-xl">
                            <Experience />
                            <Education />
                        </div>
                    </div>
                    </div>
                    <div className="port-section port-container p-5" ref={projectsRef}>
                        <FeaturedProjects />
                    </div>
                    <div className="port-section port-container p-5" ref={myWorksRef}>
                        <MyWorks />
                    </div>
                    <div className="port-section port-container p-5" ref={technicalref}>
                        <TechnicalSkills />
                    </div>
                    <div className="port-section port-container p-5" ref={contactRef}>
                        <Contact />
                    </div>
                </div>
            </div>
        )
    }
}
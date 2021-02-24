import React from 'react';
import Home from '../home/Home';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.aboutmeRef = React.createRef();
        this.experienceRef = React.createRef();
        this.projectsRef = React.createRef();
        this.myWorksRef = React.createRef();
        this.technicalref = React.createRef();
        this.contactRef = React.createRef();
    }

    scrollTo = (section) => {
        switch(section) {
            case 'aboutMe':
               return this.aboutmeRef.current.scrollIntoView({ behavior: 'smooth' });
            case 'experience':
              return  this.experienceRef.current.scrollIntoView({ behavior: 'smooth' });
            case 'project':
              return  this.projectsRef.current.scrollIntoView({ behavior: 'smooth' });
            case 'work':
               return this.experienceRef.current.scrollIntoView({ behavior: 'smooth' });
            case 'technical':
               return this.technicalref.current.scrollIntoView({ behavior: 'smooth' });
            case 'contact':
               return this.contactRef.current.scrollIntoView({ behavior: 'smooth' });
            default:
                return null;
        }
    }

    render() {
        return(
            <div>
                <Header scrollTo={this.scrollTo} />
                <Home aboutRef={this.aboutmeRef} experienceRef={this.experienceRef} myWorksRef={this.myWorksRef} technicalref={this.technicalref} contactRef={this.contactRef} projectsRef={this.projectsRef} scrollTo={this.scrollTo} />
                <Footer />
            </div>
        )
    }
}
import React from 'react';

export default class Header extends React.Component {
    render() {
        const { heading, tagline } = this.props;
        const titleWords = heading.split(' ');
        const firstWord = titleWords[0];
        titleWords.splice(0, 1);
        return(
            <div className="port-header-container">
                <h1 className="port-heading font-extrabold text-2xl lg:text-3xl md:text-3xl xl:text-3xl 2xl:text-3xl	capitalize">
                    <span>{`${firstWord} `}</span>
                    <span className="primary-icons">{titleWords.join(' ')}</span>
                </h1>
                <p className="port-tagline capitalize">{tagline}</p>
            </div>
        )
    }
}
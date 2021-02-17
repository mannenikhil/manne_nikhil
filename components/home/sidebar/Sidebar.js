import React from 'react';

export default class Sidebar extends React.Component {
    render() {
        return(
            <div className="port-sidebar-container hidden xl:block 2xl:block">
                <div className="port-sidebar">
                    <img src="/my-logo.png" className="port-logo" />
                </div>
            </div>
        )
    }
}
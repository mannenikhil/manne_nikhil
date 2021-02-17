import React from 'react';
import MenuSidebar from './sidebar/Sidebar';
import MainContentArea from './MainContentArea';

export default class Home extends React.Component {
    render() {
        return(
            <div className="port-home">
                <MenuSidebar />
                <MainContentArea />
            </div>
        )
    }
}
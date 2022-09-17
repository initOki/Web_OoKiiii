import React from 'react';
import Header from '../components/default/Header';
import Navigation from '../components/default/Navigation';

interface SubLayoutProps {
    children: React.ReactNode;
}

const SubLayout = ({ children }: SubLayoutProps) => {
    return (
        <React.Fragment>
            <Header />
            <Navigation />
            {children}
        </React.Fragment>
    );
};

export default SubLayout;

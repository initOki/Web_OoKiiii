import React from 'react';
import FixLoginButton from '../components/fix/FixLoginButton';

import Header from '../components/default/Header';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <FixLoginButton />
        </React.Fragment>
    );
};

export default DefaultLayout;

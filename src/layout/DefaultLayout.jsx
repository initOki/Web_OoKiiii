import React, { useEffect, useState } from 'react';
import FixLoginButton from 'components/fix/FixLoginButton';

import Header from '../components/default/Header';

const DefaultLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <FixLoginButton />
        </React.Fragment>
    );
};

export default DefaultLayout;

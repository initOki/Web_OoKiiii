import React, { useEffect, useState } from 'react';
import Header from '../components/default/Header';
import Navigation from '../components/default/Navigation';
import { styled } from '@stitches/react';

const SubLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Navigation />
            {children}
        </React.Fragment>
    );
};

export default SubLayout;

import { styled } from '@stitches/react';

export const NavigationWrapper = styled('div', {
    position: 'fixed',
    top: 0,
    width: '30rem',
    minWidth: '30rem',
    height: '100vh',
    background: '#4775bf',
    borderRight: '.1rem solid #ffffff',
    zIndex: 999999,
});

export const NavigationBox = styled('div', {
    padding: '10rem 3rem',
});

export const NavigationUnset = styled('li', {
    fontSize: '2rem',
    textAlign: 'center',
});

export const NavigationList = styled('li', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '2rem 0',
    cursor: 'pointer',
    a: {
        fontSize: '2rem',
    },
});

export const NavigationImg = styled('img', {
    position: 'fixed',
    left: '-2rem',
    bottom: '-2rem',
    width: '30rem',
});

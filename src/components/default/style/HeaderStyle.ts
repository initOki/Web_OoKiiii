import { styled } from '@stitches/react';

export const HeaderWrapper = styled('div', {
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '6rem',
    background: '#4774cf',
    borderBottom: '.2rem solid #ffffff',
    zIndex: '99999',
});

export const HeaderContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    fontSize: '2rem',
    color: '#161616',
});

export const HeaderListBox = styled('ul', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
});

export const HeaderListContent = styled('li', {
    margin: '0 1rem',
    padding: '0 1rem',
    borderLeft: '0.1rem solid #ffffff',
    borderRight: '0.1rem solid #ffffff',
    a: {
        fontSize: '2rem',
    },
    '&:last-child': {
        marginRight: '5rem',
    },
});

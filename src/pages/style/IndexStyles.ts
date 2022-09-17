import { styled } from '@stitches/react';

export const MainWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
});

export const MainText = styled('h3', {
    fontSize: '3rem',
});

export const MainContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
});

export const MainLinkBox = styled('div', {
    margin: '5rem 0',
});

export const MainLinkList = styled('ul', {
    display: 'flex',
    padding: '2rem 0',
});

export const MainLinkListContent = styled('li', {
    width: '20rem',
    textAlign: 'center',
    cursor: 'pointer',
    a: {
        fontSize: '2.4rem',
    },
});

export const MainExplain = styled('span', {
    display: 'block',
    margin: '2rem 0',
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: '3rem',
});

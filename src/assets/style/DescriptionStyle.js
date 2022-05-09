import { styled } from '@stitches/react';

const DescriptionWrapper = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '88%',
    padding: '7rem 5rem 3rem 35rem',
    marginBottom: '3rem',
});

const DescriptionBox = styled('div', {
    minHeight: '88%',
    // padding: '7rem 5rem 3rem 35rem',
    marginBottom: '3rem',
});

const DescriptionTitle = styled('h4', {
    margin: '5rem 0 3rem 0',
    fontSize: '3rem',
    textAlign: 'left',
});

const DescriptionSubTitle = styled('h5', {
    margin: '3rem 0 1rem 0',
    fontSize: '2.4rem',
});

const DescriptionExplain = styled('span', {
    display: 'block',
    fontSize: '2rem',
    margin: '2rem 0',
    lineHeight: '3rem',
    a: {
        fontSize: '2rem',
    },
});

const DescriptionCodeWrapper = styled('div', {
    width: '100%',
});

const DescriptionCodeBox = styled('pre', {
    padding: '1rem 3rem',
    backgroundColor: '#2d3354',
    borderRadius: '5px',
    code: {
        fontSize: '1.6rem',
    },
});

export {
    DescriptionWrapper, //
    DescriptionTitle,
    DescriptionSubTitle,
    DescriptionBox,
    DescriptionExplain,
    DescriptionCodeWrapper,
    DescriptionCodeBox,
};

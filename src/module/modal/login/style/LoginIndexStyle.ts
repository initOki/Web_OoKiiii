import { styled } from '@stitches/react';

export const LoginWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
});

export const Input = styled('input', {
    width: '100%',
    maxWidth: '400px',
    height: '100%',
    maxHeight: '50px',
    margin: '10px 0',
    padding: '5px',
    color: '#000000',
    fontSize: '16px',
});

export const Button = styled('button', {
    width: '100%',
    maxWidth: '400px',
    height: '100%',
    maxHeight: '50px',
    marginTop: '50px',
    color: '#fff',
    fontSize: '14px',
    backgroundColor: '#5775cf',
    border: '1px solid #fff',
    borderRadius: '8px',
    transition: 'all 0.3s ease-in-out',

    '&:active': {
        backgroundColor: '#294090',
    },

    '&:disabled': {
        transition: 'all 0.3s ease-in-out',
        backgroundColor: '#c4c4c4',
        pointerEvents: 'none',
    },
});

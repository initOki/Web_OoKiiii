import { styled } from '@stitches/react';

export const ModalWrapper = styled('div', {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '999999',
});

export const ModalInner = styled('div', {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: '100%',
    maxWidth: '700px',
    height: '100%',
    maxHeight: '500px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
});

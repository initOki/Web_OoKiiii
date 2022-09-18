import React from 'react';
import { useStore } from '../../store';

// components
import LoginIndex from './login/LoginIndex';

// style
import { ModalInner, ModalWrapper } from './style/indexStyle';

const ModalIndex = () => {
    const { common } = useStore();

    const renderSwitch = () => {
        switch (common.isModalType) {
            case 'login':
                return <LoginIndex />;
            default:
                return;
        }
    };

    return (
        <React.Fragment>
            {common.isModalType !== null && (
                <ModalWrapper>
                    <ModalInner>{renderSwitch()}</ModalInner>
                </ModalWrapper>
            )}
        </React.Fragment>
    );
};

export default ModalIndex;

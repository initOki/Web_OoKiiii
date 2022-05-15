import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useStoreAuth } from 'store';

type stateType = {
    username: string;
    isOpen: boolean;
};

const FixLoginButton: React.FC = () => {
    const [state, setState] = useState<stateType>({
        username: '',
        isOpen: false,
    });

    // action
    const setLogin = useStoreAuth(state => state.setLogin);
    const setLogout = useStoreAuth(state => state.setLogout);

    // state
    const getStatus = useStoreAuth(state => state.isLogin);

    const handleChange = (e: object) => {
        setState({
            ...state,
            username: e.target.value,
        });
    };

    const handleOpen = () => {
        setState({
            username: '',
            isOpen: !state.isOpen,
        });
    };

    const onLogin = (data: string) => {
        setLogin(data);
        setState({
            username: '',
            isOpen: false,
        });
    };

    const onLogout = () => {
        setLogout();
        setState({
            username: '',
            isOpen: false,
        });
    };

    return (
        <FixWrapper>
            <InputWrapper className={state.isOpen ? 'open' : ''}>
                {getStatus ? (
                    <Button onClick={() => onLogout()}>로그아웃</Button>
                ) : (
                    <>
                        <Input type="text" placeholder="Github Username" value={state.username} onChange={e => handleChange(e)} />
                        <Submit onClick={() => onLogin(state.username)}>확인</Submit>
                    </>
                )}
            </InputWrapper>
            <Button onClick={() => handleOpen()}>L</Button>
        </FixWrapper>
    );
};

const FixWrapper = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
`;

const InputWrapper = styled.div`
    position: fixed;
    bottom: 50px;
    right: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* display: none; */
    opacity: 0;
    transition: all 0.15s ease-in-out;
    &.open {
        /* display: block; */
        opacity: 1;
    }
`;

const Input = styled.input`
    width: 200px;
    height: 30px;
    padding: 0 10px;
    font-size: 16px;
    color: #000000;
    &:focus {
        border: none;
    }
`;

const Submit = styled.button`
    width: 30px;
    height: 32px;
    background: none;
    border: 1px solid #ececec;
    cursor: pointer;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid #ececec;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
`;

export default FixLoginButton;

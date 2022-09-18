import React from 'react';

// store
import { useStore } from '../../../store';

// style
import { LoginWrapper, Input, Button, Close } from './style/LoginIndexStyle';

const LoginIndex = () => {
    const { common } = useStore();
    return (
        <React.Fragment>
            <LoginWrapper>
                <Close onClick={() => common.setModalControl?.(null)}>&times;</Close>
                <Input type="text" placeholder={'아이디를 입력해주세요.'} />
                <Input type="text" placeholder={'비밀번호를 입력해주세요.'} />
                <Button disabled={false}>로그인</Button>
            </LoginWrapper>
        </React.Fragment>
    );
};

export default LoginIndex;

import React from 'react';

// style
import { LoginWrapper, Input, Button } from './style/LoginIndexStyle';

const LoginIndex = () => {
    return (
        <React.Fragment>
            <LoginWrapper>
                <Input type="text" placeholder={'아이디를 입력해주세요.'} />
                <Input type="text" placeholder={'비밀번호를 입력해주세요.'} />
                <Button disabled={false}>로그인</Button>
            </LoginWrapper>
        </React.Fragment>
    );
};

export default LoginIndex;

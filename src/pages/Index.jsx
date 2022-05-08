import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Main = () => {
    return (
        <MainWrapper>
            <MainContainer>
                <MainText className="text-blue">그냥 혼자 이것저것 적어놓는 곳</MainText>
                <MainLinkBox>
                    <MainLinkList>
                        <MainLinkListContent>
                            <Link to="/html">HTML</Link>
                        </MainLinkListContent>
                        <MainLinkListContent>
                            <Link to="/css">CSS</Link>
                        </MainLinkListContent>
                        <MainLinkListContent>
                            <Link to="/javascript">Javascript</Link>
                        </MainLinkListContent>
                    </MainLinkList>
                    <MainLinkList>
                        <MainLinkListContent>
                            <Link to="/react">React.js</Link>
                        </MainLinkListContent>
                        <MainLinkListContent>
                            <Link to="/vue">Vue.js</Link>
                        </MainLinkListContent>
                        <MainLinkListContent>
                            <Link to="/react-native">React-Native</Link>
                        </MainLinkListContent>
                    </MainLinkList>
                </MainLinkBox>

                <MainExplain>
                    이곳에 작성되어 있는 글은 직접 퍼블리싱하고 모든 컴포넌트를 직접 작성해서 만든 것 입니다.
                    <br />
                    백엔드, DB작업은 전혀 되어 있지 않습니다.
                </MainExplain>
            </MainContainer>
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const MainText = styled.h3`
    font-size: 3rem;
`;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const MainLinkBox = styled.div`
    margin: 5rem 0;
`;

const MainLinkList = styled.ul`
    display: flex;
    padding: 2rem 0;
`;

const MainLinkListContent = styled.li`
    width: 20rem;
    text-align: center;
    cursor: pointer;
    a {
        font-size: 2.4rem;
    }
`;

const MainExplain = styled.span`
    display: block;
    margin: 2rem 0;
    text-align: center;
    font-size: 2rem;
    line-height: 3rem;
`;

export default Main;

import React from 'react';
import { Link } from 'react-router-dom';

// store
import { useStore } from '../store';
import { navigationState } from '../store/navigation.d';

// style
import { MainWrapper, MainText, MainContainer, MainLinkBox, MainLinkList, MainLinkListContent, MainExplain } from './style/IndexStyles';

const Main = () => {
    const { navigation } = useStore();

    const handleNavigation = (payload: navigationState['isType']) => {
        navigation.setNavigation?.(payload);
    };

    return (
        <MainWrapper>
            <MainContainer>
                <MainText className="text-blue">그냥 혼자 이것저것 적어놓는 곳</MainText>
                <MainLinkBox>
                    <MainLinkList>
                        <MainLinkListContent>
                            <Link to="/html" onClick={() => handleNavigation('html')}>
                                HTML
                            </Link>
                        </MainLinkListContent>
                        <MainLinkListContent>
                            <Link to="/css" onClick={() => handleNavigation('css')}>
                                CSS
                            </Link>
                        </MainLinkListContent>
                        <MainLinkListContent>
                            <Link to="/javascript" onClick={() => handleNavigation('javascript')}>
                                Javascript
                            </Link>
                        </MainLinkListContent>
                    </MainLinkList>
                    <MainLinkList>
                        <MainLinkListContent>
                            <Link to="/react" onClick={() => handleNavigation('react')}>
                                React.js
                            </Link>
                        </MainLinkListContent>
                        {/* <MainLinkListContent>
                            <Link to="/vue" onClick={() => setNavigationType('')}>Vue.js</Link>
                        </MainLinkListContent>
                        <MainLinkListContent>
                            <Link to="/react-native" onClick={() => setNavigationType('')}>React-Native</Link>
                        </MainLinkListContent> */}
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

export default Main;

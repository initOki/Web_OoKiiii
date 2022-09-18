import React from 'react';
import { Link } from 'react-router-dom';

// store
import { useStore } from '../../store';

// style
import { HeaderWrapper, HeaderContainer, HeaderListBox, HeaderListContent } from './style/HeaderStyle';

const Header = () => {
    const { auth, navigation } = useStore();

    return (
        <React.Fragment>
            <HeaderWrapper>
                <HeaderContainer>
                    <HeaderListBox>
                        <HeaderListContent>
                            <Link to="/" onClick={() => navigation.setNavigation?.('')}>
                                HOME
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link to="/html" onClick={() => navigation.setNavigation?.('html')}>
                                HTML
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link to="/css" onClick={() => navigation.setNavigation?.('css')}>
                                CSS
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link to="/javascript" onClick={() => navigation.setNavigation?.('javascript')}>
                                JavaScript
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link to="/react" onClick={() => navigation.setNavigation?.('react')}>
                                React
                            </Link>
                        </HeaderListContent>
                        {auth.isLogin ? (
                            <HeaderListContent>
                                <Link to="/vue" onClick={() => navigation.setNavigation?.('vue')}>
                                    Vue
                                </Link>
                            </HeaderListContent>
                        ) : (
                            ''
                        )}
                    </HeaderListBox>
                </HeaderContainer>
            </HeaderWrapper>
        </React.Fragment>
    );
};

export default Header;

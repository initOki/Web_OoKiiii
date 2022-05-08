import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useStoreNavigation } from '../../store';

const Header = () => {
    // state
    const navigationType = useStoreNavigation(state => state.isType);

    // action
    const setNavigationType = useStoreNavigation(state => state.setNavigation);

    return (
        <React.Fragment>
            <HeaderWrapper>
                <HeaderContainer>
                    <HeaderListBox>
                        <HeaderListContent>
                            <Link to="/" onClick={() => setNavigationType('')}>
                                HOME
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link to="/html" onClick={() => setNavigationType('html')}>
                                HTML
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link to="/css" onClick={() => setNavigationType('css')}>
                                CSS
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link to="/javascript" onClick={() => setNavigationType('javascript')}>
                                JavaScript
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link to="/react" onClick={() => setNavigationType('react')}>
                                React
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link to="/vue" onClick={() => setNavigationType('vue')}>
                                Vue
                            </Link>
                        </HeaderListContent>
                    </HeaderListBox>
                </HeaderContainer>
            </HeaderWrapper>
        </React.Fragment>
    );
};

const HeaderWrapper = styled.div`
    width: 100%;
    border-bottom: 0.2rem solid #ffffff;
    height: 6rem;
    position: fixed;
    top: 0;
    background: #4775bf;
    z-index: 99999;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    font-size: 2rem;
    color: #161616;
`;

const HeaderListBox = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

const HeaderListContent = styled.li`
    margin: 0 1rem;
    padding: 0 1rem;
    border-left: 0.1rem solid #ffffff;
    border-right: 0.1rem solid #ffffff;
    a {
        font-size: 2rem;
    }
    &:last-child {
        margin-right: 5rem;
    }
`;

export default Header;

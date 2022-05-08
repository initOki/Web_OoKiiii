import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FixBackground from '../../assets/images/bg-fix.png';
import { styled } from '@stitches/react';
import NavigationData from '../../json/SubNavList.json';
import { useStoreNavigation } from '../../store';

const Navigation = props => {
    const [list, setList] = useState();

    // state
    const navigationType = useStoreNavigation(state => state.isType);

    const SwitchList = () => {
        switch (navigationType) {
            case 'html':
                return setList(NavigationData.NavigationList.HTML);
            case 'css':
                return setList(NavigationData.NavigationList.CSS);
            case 'javascript':
                return setList(NavigationData.NavigationList.JavaScript);
            case 'react':
                return setList(NavigationData.NavigationList.React);
            case 'vue':
                return setList(NavigationData.NavigationList.Vue);
            default:
                return setList('unset');
        }
    };

    useEffect(() => {
        SwitchList();
    }, [navigationType]);

    return (
        <NavigationWrapper>
            <NavigationBox>
                <ul>
                    {list === 'unset' ? (
                        <NavigationUnset>OoKiiii</NavigationUnset>
                    ) : (
                        list?.map((data, index) => {
                            return (
                                <NavigationList key={index}>
                                    <Link to={data.path}>{data.title}</Link>
                                </NavigationList>
                            );
                        })
                    )}
                </ul>
                <NavigationImg src={FixBackground} alt="네비게이션 이미지" />
            </NavigationBox>
        </NavigationWrapper>
    );
};

const NavigationWrapper = styled('div', {
    position: 'fixed',
    top: 0,
    width: '30rem',
    minWidth: '30rem',
    height: '100vh',
    background: '#4775bf',
    borderRight: '.1rem solid #ffffff',
    zIndex: 999999,
});

const NavigationBox = styled('div', {
    padding: '10rem 3rem',
});

const NavigationUnset = styled('li', {
    fontSize: '2rem',
    textAlign: 'center',
});

const NavigationList = styled('li', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '2rem 0',
    cursor: 'pointer',
    a: {
        fontSize: '2rem',
    },
});

const NavigationImg = styled('img', {
    position: 'fixed',
    left: '-2rem',
    bottom: '-2rem',
    width: '30rem',
});

export default Navigation;

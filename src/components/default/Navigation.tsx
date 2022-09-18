import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavigationData from '../../json/SubNavList.json';
import { useStore } from '../../store';

// style
import FixBackground from '../../assets/images/bg-fix.png';
import { NavigationWrapper, NavigationBox, NavigationList, NavigationImg } from './style/NavigationStyle';

interface NavigationDataType {
    path: string;
    title: string;
}

const Navigation = () => {
    const { navigation } = useStore();
    const [list, setList] = useState<null | NavigationDataType[]>(null);

    const SwitchList = () => {
        switch (navigation.isType) {
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
                return setList(null);
        }
    };

    useEffect(() => {
        SwitchList();
    }, [SwitchList, navigation.isType]);

    return (
        <>
            {list === null ? (
                ''
            ) : (
                <NavigationWrapper>
                    <NavigationBox>
                        <ul>
                            {list?.map((data, index) => {
                                return (
                                    <NavigationList key={index}>
                                        <Link to={data.path}>{data.title}</Link>
                                    </NavigationList>
                                );
                            })}
                        </ul>
                        <NavigationImg src={FixBackground} alt="네비게이션 이미지" />
                    </NavigationBox>
                </NavigationWrapper>
            )}
        </>
    );
};

export default Navigation;

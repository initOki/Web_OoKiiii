import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import history from './history';

////////// defalut //////////
import DefaultLayout from '../layout/DefaultLayout';
import SubLayout from '../layout/SubLayout';

////////// component //////////
import Index from '../pages/Index';
import Portfolio from '../components/Portfolio';
import Animation from '../components/item/Animation';
import QnA from '../components/qna/QnA';
import Introduce from '../components/IntroduceBox';

////////// html //////////
import HTMLMain from '../components/study/html';
import HTML1 from '../components/study/html/html';

////////// css //////////
import CssMain from '../components/study/css';
import MediaQuery from '../components/study/css/MediaQuery';

////////// javascript //////////
import JavaScriptMain from '../components/study/javascript';

////////// react //////////
import ReactMain from '../components/study/react';
import ReduxPersist from '../components/study/react/ReduxPersist';

////////// vue //////////
import VueMain from '../components/study/vue';

////////// react-native //////////
import ReactNativeMain from '../components/study/react-native';

const IndexRouter = () => {
    return (
        <BrowserRouter>
            {/* <DefaultLayout> */}
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="/intro" element={<Introduce />} />
                {/* <Route exact path="/" element={Login} /> */}
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/util" element={<Animation />} />
                <Route path="/qna" element={<QnA />} />
            </Routes>
            {/* </DefaultLayout> */}

            {/*<Footer />*/}

            <SubLayout>
                <Routes>
                    <Route path="/html" element={<HTMLMain />} />
                    <Route path="/css" element={<CssMain />} />
                    <Route path="/javascript" element={<JavaScriptMain />} />
                    <Route path="/react" element={<ReactMain />} />
                    <Route path="/vue" element={<VueMain />} />

                    {/* HTML */}
                    <Route path="/html/1" element={<HTML1 />} />

                    {/* CSS */}
                    <Route path="/css/1" element={<MediaQuery />} />

                    {/* JavaScript */}

                    {/* React */}

                    <Route path="/react/1" element={<ReduxPersist />} />

                    {/* Vue */}

                    {/* React-Native */}
                </Routes>
            </SubLayout>
        </BrowserRouter>
    );
};

export default IndexRouter;

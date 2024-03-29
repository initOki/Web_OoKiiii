import {
    DescriptionWrapper, //
    DescriptionBox,
    DescriptionTitle,
    DescriptionSubTitle,
    DescriptionExplain,
    DescriptionCodeWrapper,
    DescriptionCodeBox,
} from 'assets/style/DescriptionStyle';

const ReduxPersist = () => {
    return (
        <DescriptionWrapper>
            <DescriptionBox>
                <DescriptionTitle>Redux-Persist를 사용해보자</DescriptionTitle>

                <DescriptionExplain>
                    현재 페이지에서 보이는 좌측메뉴는 redux를 사용해서 json파일에 있는 리스트를 불러오는 형식으로 작업이 되어있다. <br />
                    그렇다 보니 새로고침을 하면 좌측의 메뉴가 사라지는 현상이 발생하게 되었고 그 현상을 고치기 위해서 Redux-Persist라는 것을 사용했다.
                </DescriptionExplain>

                <DescriptionExplain>그걸 까먹지 않기 위해서 글을 쓴다.</DescriptionExplain>

                <DescriptionExplain>
                    redux를 사용하면 store에 상태가 저장되지만 새로고침을 하면 그 값이 초기화 되어서 깨끗해진다.
                    <br />
                    헤더에 있는 메뉴를 클릭해서 현재 페이지로 이동하면 리덕스를 통해서 좌측 메뉴에 내가 추가한 메뉴들이 생기게 되지만 새로고침을 하면 아무것도 없는 상태가 되어 버린다.
                    <br />이 현상을 고쳐야 한다.
                </DescriptionExplain>

                <DescriptionSubTitle>- react 프로젝트에 redux-persist를 추가</DescriptionSubTitle>

                <DescriptionCodeWrapper>
                    <DescriptionCodeBox>
                        <code>yarn add redux-persist</code>
                    </DescriptionCodeBox>
                </DescriptionCodeWrapper>

                <DescriptionSubTitle>- reducer에 redux-persist 추가</DescriptionSubTitle>

                <DescriptionCodeWrapper>
                    <DescriptionCodeBox>
                        <code>
                            {`
// reducers/index.jsx

import { combineReducers } from 'redux'

import authReducer from './auth.reducers'
import commonReducer from './common.reducers'
import navigationReducer from './navigation.reducers'

---------- 1. 추가해야하는 항목 ----------
// localStorage - import storage from 'redux-persist/lib/storage
// session Storage - import storageSession from 'redux-persist/lib/storage/session

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["navigationReducer"]
};
--------------------------------------

const rootReducer = combineReducers({
  common: commonReducer,
  navigation: navigationReducer
});

---------- 2. 추가해야하는 항목 ----------
export default persistReducer(persistConfig, rootReducer);
--------------------------------------
              `}
                        </code>
                    </DescriptionCodeBox>
                </DescriptionCodeWrapper>

                <DescriptionExplain>1번과 2번을 추가해준다.</DescriptionExplain>

                <DescriptionSubTitle>- redux-persist 사용</DescriptionSubTitle>

                <DescriptionCodeWrapper>
                    <DescriptionCodeBox>
                        <code>
                            {`
// src/index.js

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App';
import rootReducer from './store/reducers'
import * as serviceWorker from './serviceWorker'

---------- 1. 추가해야하는 항목 ----------
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
--------------------------------------

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
    ))
)

---------- 2. 추가해야하는 항목 ----------
const persistor = persistStore(store);
--------------------------------------

ReactDOM.render(
  <Provider store={store}>
  
    ---------- 3. 추가해야하는 항목 ----------
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    --------------------------------------
    
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister()
              `}
                        </code>
                    </DescriptionCodeBox>
                </DescriptionCodeWrapper>

                <DescriptionExplain>이렇게 하면 로컬스토리지에 저장이 되면서 새로고침을 해도 메뉴가 사라지지 않는다.</DescriptionExplain>

                <DescriptionExplain>
                    출처 :{' '}
                    <a href="https://kyounghwan01.github.io/blog/React/redux/redux-persist/#%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5" target="_blank">
                        https://kyounghwan01.github.io/blog/React/redux/redux-persist/#%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5
                    </a>
                </DescriptionExplain>
            </DescriptionBox>
        </DescriptionWrapper>
    );
};

export default ReduxPersist;

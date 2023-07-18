import React from 'react';
import ReactDOM from 'react-dom/client';
import {ButtonTest} from "./page/index/ButtonTest";

// DOM 노드
const rootNode = document.getElementById('root');

// DOM 노드에 React 요소 렌더링
ReactDOM.createRoot(rootNode).render(
    <div className="app">
        React App 매뉴얼 구성
        <ButtonTest/>
    </div>
);
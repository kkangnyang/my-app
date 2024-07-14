/*
React는 ref가 다른 노드에 연결될 때마다 callback을 호출

아래 예제코드 처럼 callback-ref 방식을 사용하게 되면 자식 컴포넌트가
변경되었을 때 알림을 받을 수 있고 이를 통해 다른 정보들을 업데이트 할 수 있다

useCallback Hook 의존성 배열이 비어있는 배열로 넣었는데 
이렇게 하면 h1 태그가 mount, unmount 될 때만 callback 함수가 호출되며 재렌더링이 일어날 때에는
호출되지 않는다.
*/

/* HOOK의 규칙

1. Hook은 무조건 최상위 레벨에서만 호출해야 한다.

2. 리액트 함수 컴포넌트에서만 Hook을 호출해야 한다.

*/

import React, { useCallback } from "react";

function MeasureExample(props) {
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return (
        <>
            <h1 ref={measuredRef}>안녕, 리액트</h1>
            <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
        </>
    )
}

export default MeasureExample;
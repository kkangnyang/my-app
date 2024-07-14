// useEffect : useEffect() 함수는 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다.
/* useEffect() 사용법
    useEffect(() => {
        // 실행할 작업
    }, [의존값]);

    useEffect(이펙트 함수, 의존성 배열);

    기본적으로 useEffect() 함수는 처음 컴포넌트가 렌더링 된 이후와 업데이트로 인한 재렌더링 이후에 실행

    만약 이펙트 함수가 mount, unmount 시에 단 한번씩만 실행되게 하고 싶은 경우
    의존성 배열에 빈 배열을 넣어주면 됨
    => useEffect(이펙트 함수, []); // mount, unmount 시에 단 한번씩만 실행

    의존성 배열을 생략하면 컴포넌트가 업데이트 될 때마다 실행
    => useEffect(이펙트 함수); // 컴포넌트가 업데이트 될 때마다 실행
*/

import React, { useState, useEffect } from "react";

function CounterEffect(props) {
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate와 비슷하게 작동
    useEffect(() => {
        // 브라우저 API를 사용해서 document의 title을 update
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

export default CounterEffect;
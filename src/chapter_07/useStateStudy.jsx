// useState : useState() 함수는 상태값을 생성하고, 상태값을 변경하는 함수를 반환합니다.
/* useState() 사용법
   const [state, setState] = useState(initialState);
    - state : 상태값을 저장하는 변수
    - setState : 상태값을 변경하는 함수
    - initialState : 상태값의 초기값
*/

import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);
    {/* 버튼을 클릭하면 setCount() 함수를 호출하여 count 값을 1 증가시키는 컴포넌트
        버튼 클릭시 setCount 함수를 호출하여 카운트를 1 증가
        카운트 값이 변경되면서 컴포넌트가 재렌더링 되어 화면에 새로운 카운트 값이 출력 */}
    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>            
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    );
}

export default Counter;
// useRef : Reference(특정 컴포넌트에 접근할 수 있게 해주는 객체)를 사용하기 위한 Hook

/* useRef() 사용법 
   const refContainer = useRef(초기값);
   파라미터로 초기값을 넣으면 해당 초기값으로 초기화된 레퍼런스 객체를 반환
   => 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타입 전체에 걸쳐서 유지
      즉, 컴포넌트가 마운트 해제 전까지는 계속 유지된다
    
   useRef Hook은 매번 렌더링 될 때마다 항상 같은 레퍼런스 객체를 반환.
   또한, useRef Hook은 내부의 데이터가 변경되었을 때 별도로 알리지 않는다. 그래서 current 속성이 변경한다고 해서 재렌더링이 일어나지 않음
   따라서 ref에 돔노트가 연결되거나 분리되었을 경우에 어떤 코드를 실행하고 싶으면
   CallbackRef를 사용해야 한다.
*/

import React, { useRef } from "react";

function TextInputWithFocusButton(props) {
    const inputElem = useRef(null);

    const onButtonClick = () => {
        // `current`는 마운트된 input element를 가리킴
        inputElem.current.focus();
    };

    return (
        <>
            <input ref={inputElem} type="text" />
            <button onClink={onButtonClick}>Focus the input</button>
        </>
    )
}

export default TextInputWithFocusButton;
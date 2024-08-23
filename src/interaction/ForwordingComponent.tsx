import React, { useState } from 'react'

// 컴포넌트로 상태 전달 :
// - 부모요소에서 자식요소로 상태를 전달할 수 있음
// - 자식 요소에 속성으로 전달
// - 자식 컴포넌트에서 상태를 변경하면 부모 컴포넌트가 리렌더링 됨
// - 부모 컴포넌트의 자식 컴포넌트 중 해당 상태를 사용하지 않는 컴포넌트 까지 렌더링 됨
// - 코드의 복잡성 (컴포넌트의 속성 복잡성)
// - 이 문제를 해결하기 위해 글로벌 상태로 관리하는 방법이 파생됨
// - 글로벌 상태 관리 기법으로 context, Redux, zustand라는 기법이 존재
export default function ForwordingComponent() {

    const [count, setCount] = useState<number>(0);

    const onIncrease = () => {
        setCount(count => count + 1)
    }
    return (
        <div>
            <Child1 count={count} />
            <Child2 />
            <Child3 onIncrease={onIncrease} />
        </div>
    )
}

interface Child1Props {
    count: number;
}
function Child1({ count }: Child1Props) {
    return (
        <div style={{ height: '200px', backgroundColor: '#FF4826' }}>
            <h1>{count}</h1>
        </div>
    )
}

function Child2() {
    return (
        <div style={{ height: '200px', backgroundColor: '#FF7156' }}></div>
    )
}

interface Child3Props {
    // count: number;
    // setCount: React.Dispatch<React.SetStateAction<number>>;
    onIncrease: () => void
}
function Child3({ /*count, setCount*/ onIncrease }: Child3Props) {

    // const onIncrease = () => {
    //     setCount(count => count + 1);
    // }
    return (
        <div style={{ height: '200px', backgroundColor: '#F84668' }}>
            <button style={{ width: '100%', height: '100%' }} onClick={onIncrease}>+</button>
        </div>
    )
}
import { useState } from 'react'

function Counter() {
    // Hook, class 컴포넌트에서
    // function 컴포넌트로 오면서, class 컴포넌트에서만
    // 지원하던 기능을 function 컴포넌트에도 훅이란 이름으로
    // 함수로 지원함! useState() 훅은 사용법보다 의미가 중요
    // 상태가 바뀌면 알아서 해당 컴포넌트를 새로 그려줌(렌더링)
    // 그래서 일부부는 이 상태변수를 reactive 변수라고도 부름
    // 사용자와의 상호작용에 사용됨!

    //구조분해 양쪽타입이 같다
    //const [aaa,bbb]= ["메롱", function(){alert("메롱")}]

    // useState함수와 위와 같은 식의 배열을 리턴해 주어서, 결국 구조분해 문법임
    const [subin,setSubin] = useState(0) 
    const handleClick = ()=>{
        // set에도 콜백함수를 사용할 수 있음
        //prevSubin : 이전값
        //setSubin((prevSubin) => prevSubin+1);
        //setSubin(prevSubin => prevSubin+1); //위에랑 똑같은 동작
        setSubin((prevSubin) => {
            return prevSubin+1}
        ); //위에랑 똑같은 동작 return 문 하나 했을 때 return, 중괄호 생략된다
    }

  return (
    <>
        <button onClick={handleClick}>{subin}번째</button>
    </>
  )
}

export default Counter
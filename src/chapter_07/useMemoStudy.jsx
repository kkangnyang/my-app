// useMemo : 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있게 해주는 Hook
//           Memoized Value를 반환
// memoization: 비용이 높은, 즉 연산량이 많이 드는 함수의 호출 결과를 저장해 두었다가 같은 입력 값으로 함수를 호출하면 새로 함수를 호출하지 않고 이전에 저장해 놨던 호출 결과를 바로 반환
//              결과적으로 함수 호출 결과를 받기까지 걸리는 시간도 짧아질 뿐더러 불필요한 중복 연산도 하지 않기 때문에 컴퓨터의 자원을 적게 사용
//              useMemo() Hook은 이러한 memoization을 구현할 수 있게 해주는 Hook
/* useMemo() 사용법 
   const memoizedValue = useMemo(() => {
       // 연산 작업
       return computeExpensiveValue(의존성 변수1, 의존성 변수2);
   }, [의존성 변수1, 의존성 변수2]);

   의존성 배열에 넣은 변수가 변경될 때만 연산 작업을 수행하고, 그렇지 않으면 이전에 연산한 값을 재사용  

   의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행됨
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b));
   => 따라서 useMemo 훅에 의존성 배열을 넣지 않고 사용하는 것은 아무런 의미가 없음

   의존성 배열이 빈 배열일 경우, 컴포넌트 마운트 시에만 호출 됨
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), []);
   => 결국 마운트 이후에는 값이 변경되지 않으므로, 한 번만 호출되고 이후에는 호출되지 않음  

   
*/
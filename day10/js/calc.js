//덧셈 프로그램
let n1 = prompt("첫번째 수 입력 : ");
let n2 = prompt("두번째 수 입력 : ");
let sum_v = 0;

//연산
// sum_v = n1 + n2;
  //  이 경우 계산이 되지 않고 두 입력값 문자들이 그대로 나열됨.
sum_v = parseInt(n1) + parseInt(n2);
//위와 같이 적었을때 합계값이 나옴






//출력
document.write("두 수의 합 :" + sum_v);
/*놀이공원 입장료 계산 프로그램 (나이로 구분)
  취학 전 아동 - 1000원
  초등학생 - 2000원
  중.고등학생 - 2500원
  일반인 - 3000원 
*/


//입력
var age = 23;
var charge = 0;

//연산 및 출력
if(age < 8){
    document.write("취학 전 아동입니다.<br>");
    charge = 1000;
}else if(age >= 8 && age < 14){
    document.write("초등학생 입니다.<br>");
    charge = 2000;
}else if(age >= 14 && age < 20){
    document.write("중.고등학생 입니다.<br>");
    charge = 2500;
}else{  //이 부분의 조건식 생략가능. (age >= 20)가 생략되어 있음.
    document.write("일반인 입니다.<br>");
    charge = 3000;
}
document.write("입장료는 <span class='accent'> " + 
        charge + "</span> 원 입니다.");
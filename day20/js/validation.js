//입력값 검증(유효성 체크)
var id = document.getElementById("user-id");
var pw1 = document.getElementById("user-pw1");
var pw2 = document.getElementById("user-pw2");

//onchange 속성 사용
id.onchange = checkId;   //checkId 함수 호출
//괄호를 생략해서 이벤트 발생시에만 호출됨

//이벤트 처리기 함수를 사용했을 경우
//id.addEventListener("change", checkId);

pw1.onchange = checkPw;
pw2.onchange = comparePw;

//아이디 체크 함수
function checkId(){
    if(id.value.length < 4 || id.value.length > 15){
        alert("아이디는 4자 이상 15자 이하로 입력하세요");
        id.select();
        //return false;
    }
}

//비밀번호 체크 함수
function checkPw(){
    if(pw1.value.length < 8){
        alert("비밀번호는 8자 이상 입력하세요");
        pw1.select();
    }
}

//비민번호 일치 여부 함수
function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        pw2.value = "";   //비밀번호 초기화
        pw1.focus();      //커서 위치
    }
}
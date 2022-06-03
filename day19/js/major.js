//선택한 옵션 항목 찾아내기
//select 태그 이름(name)에 폼이름으로 접근
let selectMenu = document.testForm.major;

function displaySelect(){
    //select option 속성의 value로 선택한 것 - ex. archi
    //let selectedText = document.getElementById("subj").value;
    //alert(selectedText + "가 선택되었습니다."); 

    //태그의 text- ex.건축공학과
    //document.testForm.major.options[1].innerText
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(selectedText + "가 선택되었습니다.");
}

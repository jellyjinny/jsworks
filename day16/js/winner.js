let member = prompt("전체 응모자 수 : ");   //응모자 수
let winner = new Array(5); //당첨자 수 5명 배열 선언


if(member == null){
    document.write("<p>입력이 취소되었습니다</p>");
}
else{  //member != null
//발표
document.write("<p>전체 응모자 수 : " + member + "명</P>")
document.write("<p>당첨자 : ")

//추첨(저장)
for(var i = 0; i < winner.length; i++){
    let pickedOne = Math.floor(Math.random()*member) + 1;
    winner[i] = pickedOne;
    for(let j = 0; j < i; j++){
        if(winner[i] == winner[j]){   //이전 인덱스와 값이 같으면 
            i--;     //인덱스 1 감소
            break;
        }
    }
}
/*

    i=0, winner[0]

*/

//출력
for(var i = 0; i < winner.length; i++){
    document.write(winner[i] + "번, ")
}
document.write("</P>")


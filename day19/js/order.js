//체크 박스에 이벤트 처리하기
let check = document.querySelector("#shippingInfo");

check.addEventListener("click", doCheck);
//클릭했을때 이벤트 처리

function doCheck(){
    //name 속성으로 처리
    if(check.checked == true){  //체크박스에 체크 되었다면
        shippingName.value = billingName.value;
          //주문 정보(이름)을 배송정보(이름)에 대입
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }else{  //check.checked == false
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";

    }
}
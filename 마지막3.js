
function make(사진링크){
    var img = document.createElement('img'); // 이미지 객체 생성
    img.onclick = function(){document.getElementById('board').removeChild(this)}; // 이미지를 클릭하면 제거되는 onclick 함수 생성
    
    img.src = 사진링크; // 이미지 경로 설정 
    img.width=300;
    document.getElementById('board').appendChild(img); // board DIV 에 이미지 동적 추가
}
function del(){
    document.getElementById('board').innerHTML = '';
}
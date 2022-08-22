
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


function 그룹가나다(){


    
}
function 그룹데뷔(){

   
}
function 개인가나다(){



}



var sel3 = document.querySelector('select')
var aa3 = document.querySelector('.사진모음1')
var bb3 = document.querySelector('.사진모음2')
var cc3 = document.querySelector('.사진모음3')

sel3.addEventListener('change',()=>{
    var a = sel3.value;
    
    if (a == '그룹 가나다순') {
        aa3.style.display = 'block';
        bb3.style.display = 'none';
        cc3.style.display = 'none';
    }
    else if (a == '그룹 데뷔년도') {

        aa3.style.display = 'none';
        bb3.style.display = 'block';

         cc3.style.display = 'none';
    }
    else if (a == '개인 가나다순') {

        aa3.style.display = 'none';
        bb3.style.display = 'none';

        cc3.style.display = 'block';
    }
})

var 그룹저장=function(){
    
}





